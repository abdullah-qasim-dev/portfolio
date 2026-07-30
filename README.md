# Hafiz Abdullah Qasim — AI Engineer Portfolio

A premium, dark-mode-first portfolio built with React, TypeScript, Vite, Tailwind CSS v4, and Framer Motion.

## Design concept

The whole site is themed around "the model booting up" — a nod to the AI/ML subject matter:

- **Loader** mimics a model initialization sequence ("loading weights... ready.")
- **Hero role text** types out like a terminal/log stream
- Section eyebrows are styled like log tags: `[ ABOUT ]`, `[ EXPERIENCE ]`
- A canvas-based **neural network background** (nodes + connecting lines) sits behind the hero
- A green **"signal" dot** pulses on live/current-status elements (current job, form status)

Palette: near-black "void" navy background, violet + cyan gradient accents, JetBrains Mono for labels/data, Space Grotesk for display headings, Inter for body text.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL in your browser.

## Contact form (EmailJS) setup

The contact form uses [EmailJS](https://www.emailjs.com/) to send emails directly from the browser — no backend needed.

1. Create a free account at https://www.emailjs.com/
2. **Email Services** → Add New Service → connect your Gmail → copy the **Service ID**
3. **Email Templates** → Create New Template with variables `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}` → copy the **Template ID**
4. **Account → General** → copy your **Public Key**
5. Copy `.env.example` to `.env` and fill in the three values:

```bash
cp .env.example .env
```

```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

6. Restart `npm run dev`. Until these are filled in, the form will show a friendly fallback message pointing visitors to your email address directly instead of erroring silently.

**Free tier**: 200 emails/month, which is plenty for a portfolio.

## Replacing placeholders

| What | Where |
|---|---|
| Resume PDF | Replace `public/Hafiz_Abdullah_Qasim_CV.pdf` with your real CV (keep the same filename), or update `resumeUrl` in `src/data/content.ts` |
| All text content (bio, projects, skills, experience, etc.) | `src/data/content.ts` — single source of truth for the whole site |
| Profile photo | `PROFILE.profileImage` in `src/data/content.ts` |
| Social links | `PROFILE.github` / `PROFILE.linkedin` in `src/data/content.ts` |
| Site URL (for SEO/canonical/OG tags) | `index.html` |

Adding a new project, certificate, skill, or tech stack item is just adding an object to the relevant array in `src/data/content.ts` — the UI updates automatically.

## Tech stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4 (CSS-first `@theme` tokens, see `src/index.css`)
- Framer Motion (animations, scroll reveals, page-load sequence)
- React Icons (Feather icon set)
- EmailJS (`@emailjs/browser`) for the contact form

## Deploying to Vercel

1. Push this project to a GitHub repository (exclude `node_modules`, `.env` — already in `.gitignore`)
2. Go to https://vercel.com → **New Project** → import the repo
3. Framework preset: **Vite** (auto-detected)
4. Add the three `VITE_EMAILJS_*` environment variables in Vercel's project settings (**Settings → Environment Variables**) so the contact form works in production
5. Deploy

## Scripts

```bash
npm run dev       # start dev server
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build locally
```
