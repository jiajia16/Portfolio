# Developer Portfolio (Vite + React + TailwindCSS)

Single-page portfolio with dark/light themes, section reveals, sticky navigation, and data-driven projects.

## Getting started
- Install deps: `npm install`
- Run dev server: `npm run dev`
- Build for production: `npm run build`
- Preview build locally: `npm run preview`

## Editing content
- Profile text, socials, skills, experience, education: `src/data/profile.js`
- Projects (featured, filters, modal details): `src/data/projects.js`
- Theme + design tokens: `tailwind.config.js` and global styles in `src/index.css`
- Page layout and sections: components under `src/components/`

## Deploying to GitHub Pages
1. In `vite.config.js`, set `base` to `"/REPO_NAME/"` (replace with your repo name).
2. Build: `npm run build`
3. Deploy the `dist` folder to Pages (e.g., push to `gh-pages` branch or use an action).
4. If using Actions, ensure the action runs `npm ci`, `npm run build`, and publishes `dist`.

## Notes
- Resume link points to `/resume.pdf`; drop your file in `public/resume.pdf`.
- Open Graph tags use `profile.seo` from `src/data/profile.js` (image placeholder `/og-image.svg` in `public`).
