# moisespaello.dev

Personal developer portfolio for **Moisés Pérez Aello** — a single-page static
site served from GitHub Pages at [moisespaello.dev](https://moisespaello.dev).

## Stack

No build step. Plain semantic HTML, modern CSS, and a small amount of vanilla
JavaScript — the site is itself meant to be a clean code sample, and it deploys
straight to GitHub Pages with zero CI.

```
index.html          # the whole page
styles/main.css     # design tokens + all styling (light/dark via [data-theme])
scripts/main.js     # theme toggle + footer year (progressive enhancement)
assets/favicon.svg  # favicon
assets/cv/          # drop the CV PDF here (see below)
CNAME               # custom domain: moisespaello.dev
```

## Local preview

It's static, so any static server works:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## CV download

The hero's **Download CV** button links to `assets/cv/moises-perez-cv.pdf`.
Add that file to make the button work. Until then it 404s.

## Deploying

Pushing to `main` publishes via GitHub Pages. In **Settings → Pages**, set the
custom domain to `moisespaello.dev` and enable **Enforce HTTPS** (`.dev` is on
the HSTS preload list, so HTTPS is mandatory). DNS: apex `A`/`AAAA` records to
GitHub Pages, `www` `CNAME` → `moisesPAello.github.io`.
