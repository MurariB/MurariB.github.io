# Murari Bhadragiri: Portfolio

Personal portfolio site built with React, TypeScript, Vite and Tailwind CSS.

## Edit content

All text lives in [`src/data/profile.ts`](src/data/profile.ts). Change it there; no component edits needed.

- Photo: `public/profile.jpeg`
- CV download: export your CV from Word as PDF to `public/Murari-Bhadragiri-CV.pdf`

## Run locally

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages (murarib.github.io)

1. Create a public repo on GitHub named exactly `MurariB.github.io`.
2. Push this folder to its `main` branch:
   ```bash
   git init -b main
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/MurariB/MurariB.github.io.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

The workflow in `.github/workflows/deploy.yml` builds and publishes on every push to `main`. The site goes live at https://murarib.github.io.
