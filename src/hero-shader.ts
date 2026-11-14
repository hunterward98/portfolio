// A tiny raw-WebGL background: flowing noise, quantized into a dot grid with
// ordered (Bayer) dithering for a retro feel. Leans toward the mouse.
// Falls back to the CSS gradient on #bg if WebGL is unavailable.

const VERT = `
attribute vec2 p;
void main() { gl_Position = vec4(p, 0.0, 1.0); }`;

const FRAG = `
precision mediump float;
uniform vec2 res;
uniform vec2 mouse;
uniform float t;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x),
             mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { v += a * noise(p); p *= 2.0; a *= 0.5; }
  return v;
}
float bayer4(vec2 c) {
  vec2 m = mod(c, 4.0);
  int i = int(m.x + m.y * 4.0);
  // 4x4 Bayer matrix, flattened
  float b = 0.0;
  if (i == 0) b = 0.0;  else if (i == 1) b = 8.0;  else if (i == 2) b = 2.0;  else if (i == 3) b = 10.0;
  else if (i == 4) b = 12.0; else if (i == 5) b = 4.0;  else if (i == 6) b = 14.0; else if (i == 7) b = 6.0;
  else if (i == 8) b = 3.0;  else if (i == 9) b = 11.0; else if (i == 10) b = 1.0; else if (i == 11) b = 9.0;
  else if (i == 12) b = 15.0; else if (i == 13) b = 7.0; else if (i == 14) b = 13.0; else b = 5.0;
  return b / 16.0;
}

void main() {
  float cell = 5.0;
  vec2 cellId = floor(gl_FragCoord.xy / cell);
  vec2 uv = (cellId * cell) / res.y;
  vec2 m = mouse / res.y;

  vec2 q = vec2(fbm(uv * 2.0 + t * 0.05), fbm(uv * 2.0 - t * 0.04 + 3.1));
  float n = fbm(uv * 1.6 + q * 1.8 + t * 0.02);

  // Brighten near the mouse.
  float d = distance(uv, m);
  n += 0.25 * exp(-d * d * 6.0);

  float lit = step(bayer4(cellId), smoothstep(0.35, 0.95, n));

  // Round dots inside each cell.
  vec2 f = fract(gl_FragCoord.xy / cell) - 0.5;
  float dot = 1.0 - smoothstep(0.25, 0.4, length(f));

  // Translucent shell green drifting into a deeper emerald.
  vec3 shell = vec3(0.55, 0.78, 0.25);
  vec3 emerald = vec3(0.15, 0.55, 0.3);
  vec3 col = mix(shell, emerald, smoothstep(0.3, 0.8, q.x));
  gl_FragColor = vec4(col * lit * dot * 0.5, 1.0);
}`;

export function startShader(canvas: HTMLCanvasElement) {
  const gl = canvas.getContext("webgl", { antialias: false, powerPreference: "low-power" });
  if (!gl) return;

  const compile = (type: number, src: string) => {
    const s = gl.createShader(type)!;
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s) ?? "shader");
    return s;
  };

  const prog = gl.createProgram()!;
  try {
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
  } catch (err) {
    console.warn("[hero-shader] disabled:", err);
    return;
  }
  gl.useProgram(prog);

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, "p");
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  const uRes = gl.getUniformLocation(prog, "res");
  const uMouse = gl.getUniformLocation(prog, "mouse");
  const uT = gl.getUniformLocation(prog, "t");

  // Cap resolution: the effect is chunky by design, so 1x is plenty.
  const resize = () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform2f(uRes, canvas.width, canvas.height);
  };
  resize();
  addEventListener("resize", resize);

  // Smoothed mouse position (GL coords have y flipped).
  const target = { x: innerWidth * 0.7, y: innerHeight * 0.6 };
  const mouse = { ...target };
  addEventListener("pointermove", (e) => {
    target.x = e.clientX;
    target.y = innerHeight - e.clientY;
  });

  // Only render while the hero is on screen and the tab is visible, at ~30fps.
  let visible = true;
  const hero = document.querySelector(".hero");
  if (hero) new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(hero);

  const start = performance.now();
  let last = 0;
  const loop = (now: number) => {
    requestAnimationFrame(loop);
    if (!visible || document.hidden || now - last < 33) return;
    last = now;
    mouse.x += (target.x - mouse.x) * 0.08;
    mouse.y += (target.y - mouse.y) * 0.08;
    gl.uniform2f(uMouse, mouse.x, mouse.y);
    gl.uniform1f(uT, (now - start) / 1000);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  };
  requestAnimationFrame(loop);
  canvas.style.background = "none";
}
