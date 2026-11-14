// Build-time HTML rendering. Imported by vite.config.ts, never shipped to the browser.
import type { Content } from "./content";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const isExternal = (href: string) => /^https?:/.test(href);

const prompt = (dir: string) =>
  `<h2 class="prompt"><span class="path">~/${dir}</span> <span class="dollar">$</span> <span class="cmd">ls</span></h2>`;

export function renderHero(c: Content, portrait: string): string {
  const links = c.links
    .map((l) => {
      const ext = isExternal(l.href) ? ' target="_blank" rel="noopener"' : "";
      const face = l.button
        ? `<span class="face" aria-hidden="true">${l.button}</span>`
        : "";
      const cls = l.button ? `btn btn-${l.button.toLowerCase()}` : "btn";
      return `<a class="${cls}" href="${esc(l.href)}"${ext}>${face}${esc(l.label)}</a>`;
    })
    .join("\n        ");
  return `
    <section class="hero" id="top">
      <div class="hero-text">
        <p class="kicker">$ whoami</p>
        <h1>${esc(c.name)}<span class="cursor" aria-hidden="true">_</span></h1>
        <p class="role">${esc(c.role)}</p>
        <p class="tagline">${esc(c.tagline)}</p>
        <nav class="links" aria-label="Primary">
        ${links}
        </nav>
      </div>
      <pre class="portrait" role="img" aria-label="ASCII art self portrait of ${esc(c.name)}">${esc(portrait)}</pre>
    </section>`;
}

export function renderSections(c: Content): string {
  const about = `
    <section id="about" class="reveal">
      <h2 class="prompt"><span class="path">~/about</span> <span class="dollar">$</span> <span class="cmd">cat bio.txt</span></h2>
      <p class="bio">${esc(c.bio)}</p>
      <p class="bio outside">${esc(c.outside)}</p>
    </section>`;

  const experience = `
    <section id="experience" class="reveal">
      ${prompt("experience")}
      <ol class="timeline">
        ${c.experience
          .map(
            (e) => `
        <li class="job">
          <div class="job-head">
            <h3>${esc(e.role)} <span class="at">@ ${esc(e.company)}</span></h3>
            <span class="dates">${e.location ? `${esc(e.location)} · ` : ""}${esc(e.start)} – ${esc(e.end)}</span>
          </div>
          <ul>${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
        </li>`,
          )
          .join("")}
      </ol>
    </section>`;

  const projects = `
    <section id="projects" class="reveal">
      ${prompt("projects")}
      <div class="cards">
        ${c.projects
          .map((p) => {
            const title = p.href
              ? `<a href="${esc(p.href)}" target="_blank" rel="noopener">${esc(p.name)} ↗</a>`
              : esc(p.name);
            return `
        <article class="card">
          <div class="card-head">
            <h3>${title}</h3>
            ${p.dates ? `<span class="dates">${esc(p.dates)}</span>` : ""}
          </div>
          <p>${esc(p.blurb)}</p>
          ${p.points?.length ? `<ul class="points">${p.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
          <ul class="tags">${p.tech.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
        </article>`;
          })
          .join("")}
      </div>
    </section>`;

  const skills = `
    <section id="skills" class="reveal">
      ${prompt("skills")}
      <dl class="skills">
        ${c.skills
          .map((s) => `<div><dt>${esc(s.group)}/</dt><dd>${s.items.map(esc).join(" · ")}</dd></div>`)
          .join("")}
      </dl>
      <h3 class="sub">education</h3>
      <ul class="edu">
        ${c.education
          .map(
            (e) =>
              `<li><strong>${esc(e.degree)}</strong>, ${esc(e.school)}${e.years ? ` <span class="dates">${esc(e.years)}</span>` : ""}</li>`,
          )
          .join("")}
      </ul>
      ${
        c.certifications.length
          ? `<h3 class="sub">certifications</h3>
      <ul class="edu">${c.certifications.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`
          : ""
      }
    </section>`;

  return about + experience + projects + skills;
}
