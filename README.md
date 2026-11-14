# Portfolio

A single static page: Vite + vanilla TypeScript, a hand-rolled WebGL hero, scroll reveals, an ASCII self-portrait, and a hidden terminal (press `` ` ``).

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + build to dist/
npm run preview    # serve the production build
```

## Editing

| What | Where |
| --- | --- |
| All copy (bio, experience, projects, skills, links) | `src/content.ts` |
| ASCII portrait | `src/portrait.txt` |
| Styles / colors | `src/styles.css` (tokens at the top) |
| Hero background shader | `src/hero-shader.ts` |
| Terminal commands | `src/terminal.ts` |
| Resume | drop it at `public/resume.pdf` |

Content is rendered into `index.html` at build time (see `vite.config.ts`), so the page is plain HTML that works without JavaScript; scripts only layer effects on top.

## ASCII portrait

```bash
npm run portrait -- path/to/photo.jpg --width 90
```

Options: `--width` (columns), `--contrast`, `--gamma`, `--invert`, `--ramp " .:-=+*#%@"`, `--out`. Use a tightly cropped head-and-shoulders photo against a plain background, iterate on contrast/gamma, then hand-edit `src/portrait.txt` to clean it up.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes `dist/` to GitHub Pages. One-time setup: repo **Settings → Pages → Source: GitHub Actions**.

Custom domain: add `public/CNAME` containing just the domain (e.g. `example.com`), then point DNS at GitHub Pages.
