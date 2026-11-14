import { startShader } from "./hero-shader";

const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

// ---------- hero background ----------
const canvas = document.getElementById("bg") as HTMLCanvasElement | null;
if (canvas && !reducedMotion) startShader(canvas);

// ---------- ASCII portrait "decode" on load ----------
const portrait = document.querySelector<HTMLPreElement>(".portrait");
if (portrait && !reducedMotion) decode(portrait);

function decode(el: HTMLPreElement) {
  const final = el.textContent ?? "";
  const glyphs = "@#%*+=-:.";
  const duration = 1400;
  const t0 = performance.now();
  const rows = final.split("\n").length;

  const frame = (now: number) => {
    const p = Math.min((now - t0) / duration, 1);
    let row = 0;
    let out = "";
    for (const ch of final) {
      if (ch === "\n") {
        row++;
        out += ch;
        continue;
      }
      // Each row resolves in a sweep from top to bottom, with a noisy edge.
      const settled = row / rows < p * 1.25 - Math.random() * 0.25;
      out += settled || ch === " " ? ch : glyphs[(Math.random() * glyphs.length) | 0];
    }
    el.textContent = out;
    if (p < 1) requestAnimationFrame(frame);
    else el.textContent = final;
  };
  requestAnimationFrame(frame);
}

// ---------- scroll reveals ----------
// IntersectionObserver + CSS transitions: no animation library needed.
const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      e.target.classList.add("in");
      io.unobserve(e.target);
    }
  },
  { rootMargin: "0px 0px -15% 0px" },
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Fade the shader out as the hero scrolls away.
if (canvas && !reducedMotion) {
  let ticking = false;
  addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const p = Math.min(scrollY / innerHeight, 1);
        canvas.style.opacity = String(0.55 - p * 0.43);
        ticking = false;
      });
    },
    { passive: true },
  );
}

// ---------- terminal easter egg (loaded on first use) ----------
let terminal: Promise<typeof import("./terminal")> | null = null;
const openTerminal = () => {
  terminal ??= import("./terminal");
  terminal.then((t) => t.toggle());
};
document.querySelector(".term-toggle")?.addEventListener("click", openTerminal);
// Prefetch when idle (~2KB) so keystrokes right after opening aren't lost.
const idle = window.requestIdleCallback ?? ((cb: () => void) => setTimeout(cb, 1500));
idle(() => (terminal ??= import("./terminal")));
addEventListener("keydown", (e) => {
  const target = e.target as HTMLElement;
  if (e.key === "`" && !/INPUT|TEXTAREA/.test(target.tagName)) {
    e.preventDefault();
    openTerminal();
  }
});
