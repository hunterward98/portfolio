import { readFileSync } from "node:fs";
import { defineConfig, type Plugin } from "vite";
import { content } from "./src/content";
import { renderHero, renderSections } from "./src/render";

const PORTRAIT = new URL("./src/portrait.txt", import.meta.url);

// Renders all copy into index.html at build time so the page is real HTML
// (crawlable, readable without JS). JS only adds the effects on top.
function staticContent(): Plugin {
  return {
    name: "static-content",
    transformIndexHtml(html) {
      const portrait = readFileSync(PORTRAIT, "utf8").replace(/\s+$/, "");
      return html
        .replace("<!--hero-->", renderHero(content, portrait))
        .replace("<!--sections-->", renderSections(content))
        .replaceAll("%NAME%", content.name)
        .replaceAll("%ROLE%", content.role)
        .replaceAll("%YEAR%", String(new Date().getFullYear()));
    },
    configureServer(server) {
      // Full reload when the portrait or content changes during dev.
      server.watcher.add(PORTRAIT.pathname);
      server.watcher.on("change", (file) => {
        if (file.endsWith("portrait.txt") || file.endsWith("content.ts") || file.endsWith("render.ts")) {
          server.ws.send({ type: "full-reload" });
        }
      });
    },
  };
}

export default defineConfig({
  // Relative base works on both <user>.github.io/portfolio/ and a custom domain.
  base: "./",
  plugins: [staticContent()],
});
