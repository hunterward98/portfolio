// Easter-egg terminal. Dynamically imported the first time it's opened.
import { content as c } from "./content";

let root: HTMLDivElement | null = null;
let out: HTMLDivElement;
let input: HTMLInputElement;
const history: string[] = [];
let hIdx = 0;

const sections: Record<string, () => string> = {
  about: () => `${c.name}: ${c.role}\n${c.bio}`,
  experience: () =>
    c.experience
      .map((e) => `${e.role} @ ${e.company} (${e.start} – ${e.end})\n${e.points.map((p) => `  - ${p}`).join("\n")}`)
      .join("\n\n"),
  projects: () => c.projects.map((p) => `${p.name}  [${p.tech.join(", ")}]\n  ${p.blurb}`).join("\n\n"),
  skills: () =>
    c.skills.map((s) => `${s.group.padEnd(12)}${s.items.join(", ")}`).join("\n") +
    "\n\n" +
    c.education.map((e) => `${e.degree}, ${e.school} (${e.years})`).join("\n"),
};

const commands: Record<string, (args: string[]) => string | void> = {
  help: () =>
    [
      "available commands:",
      "  whoami            who is this",
      "  ls                list sections",
      "  cat <section>     print a section (try: cat projects)",
      "  cat portrait      ...you'll see",
      "  open <link>       open " + c.links.map((l) => l.label).join(" | "),
      "  goto <section>    scroll the page to a section",
      "  clear             clear the screen",
      "  exit              close the terminal",
    ].join("\n"),
  whoami: () => `${c.name}: ${c.role}. ${c.tagline}`,
  ls: () => Object.keys(sections).map((s) => s + "/").join("  ") + "  portrait.txt",
  cat: ([name = ""]) => {
    const key = name.replace(/[/]$|\.txt$/, "");
    if (key === "portrait") {
      print(document.querySelector(".portrait")?.textContent ?? "", "ascii");
      return;
    }
    if (sections[key]) return sections[key]();
    return name ? `cat: ${name}: No such file or directory` : "usage: cat <section>";
  },
  open: ([name = ""]) => {
    const link = c.links.find((l) => l.label === name);
    if (!link) return `open: unknown link '${name}'. try: ${c.links.map((l) => l.label).join(", ")}`;
    window.open(link.href, "_blank", "noopener");
    return `opening ${link.label}...`;
  },
  goto: ([name = ""]) => {
    const el = document.getElementById(name);
    if (!el) return `goto: no section '${name}'`;
    el.scrollIntoView({ behavior: "smooth" });
  },
  clear: () => {
    out.textContent = "";
  },
  exit: () => toggle(false),
  sudo: () => "nice try.",
};

function print(text: string, cls?: string) {
  const line = document.createElement("div");
  if (cls) line.className = cls;
  line.textContent = text;
  out.append(line);
  out.scrollTop = out.scrollHeight;
}

function run(raw: string) {
  const cmdline = raw.trim();
  print(`$ ${cmdline}`, "in");
  if (!cmdline) return;
  history.push(cmdline);
  hIdx = history.length;
  const [cmd, ...args] = cmdline.split(/\s+/);
  const fn = commands[cmd.toLowerCase()];
  if (!fn) return print(`command not found: ${cmd}. type 'help'`, "err");
  const result = fn(args);
  if (typeof result === "string") print(result);
}

function build() {
  root = document.createElement("div");
  root.className = "term";
  root.setAttribute("role", "dialog");
  root.setAttribute("aria-label", "Terminal");
  root.innerHTML = `
    <div class="term-bar"><span>guest@${c.name.split(" ")[0].toLowerCase()}: ~</span><button type="button" aria-label="Close terminal">×</button></div>
    <div class="term-out" aria-live="polite"></div>
    <label class="term-line"><span>$</span><input type="text" autocomplete="off" spellcheck="false" aria-label="Command" /></label>`;
  out = root.querySelector(".term-out")!;
  input = root.querySelector("input")!;
  root.querySelector("button")!.addEventListener("click", () => toggle(false));
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      run(input.value);
      input.value = "";
    } else if (e.key === "Escape" || (e.key === "`" && !input.value)) {
      e.preventDefault();
      toggle(false);
    } else if (e.key === "ArrowUp" && hIdx > 0) {
      input.value = history[--hIdx];
      e.preventDefault();
    } else if (e.key === "ArrowDown") {
      hIdx = Math.min(hIdx + 1, history.length);
      input.value = history[hIdx] ?? "";
    } else if (e.key === "Tab") {
      e.preventDefault();
      const [cmd, arg] = input.value.split(/\s+/);
      const pool = arg !== undefined ? [...Object.keys(sections), "portrait"] : Object.keys(commands);
      const word = arg ?? cmd;
      const hit = pool.find((p) => p.startsWith(word));
      if (hit) input.value = arg !== undefined ? `${cmd} ${hit}` : hit;
    }
  });
  document.body.append(root);
  print(`welcome. type 'help' to get started.`);
}

export function toggle(force?: boolean) {
  const firstOpen = !root;
  if (!root) build();
  const show = force ?? (firstOpen || root!.hidden);
  root!.hidden = !show;
  if (show) input.focus();
  else (document.querySelector(".term-toggle") as HTMLElement | null)?.focus();
}
