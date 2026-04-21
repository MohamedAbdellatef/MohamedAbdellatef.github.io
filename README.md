# Junior Data Engineer — Portfolio

A premium, recruiter-focused portfolio for a junior data engineer targeting the UAE market.

Built with **TanStack Start (React 19 + Vite) + TypeScript + Tailwind CSS v4**.
(Equivalent stack to Next.js — SSR, file-based routing, type-safe links.)

## ✨ Features

- Hero with strong value prop and 5 CTAs (Projects, GitHub, LinkedIn, CV, Contact)
- About, Skills (grouped), Featured Projects, GitHub repos, Resume highlights, Experience timeline, Why-Hire pitch, Contact form
- Project filter page + detailed case-study pages (`/projects/[slug]`)
- Dark / light theme toggle (persisted)
- Scroll progress bar + back-to-top button
- SEO: per-route titles, descriptions, Open Graph tags
- Accessible semantic HTML, keyboard-friendly, responsive
- Subtle Framer Motion animations
- Validated contact form (zod + react-hook-form) → mailto handoff

## 🗂️ Where to edit your content

Everything you'd ever change lives in **one file**:

```
src/data/site.ts
```

Update:
- `site` → name, role, location, email, GitHub, LinkedIn, CV path, WhatsApp
- `projects` → add/edit case studies (each becomes `/projects/<slug>`)
- `repos` → GitHub repo cards (or wire to GitHub REST API later)
- `skills`, `experience`, `certifications`, `currentlyLearning`, `cvHighlights`

Add your CV PDF at `public/cv.pdf` (or change `site.cvUrl`).

## 🧱 Folder structure

```
src/
  components/
    portfolio/        # All portfolio sections + layout chrome
    ui/               # shadcn primitives
  data/site.ts        # Single source of truth for content
  routes/             # File-based routes (TanStack Router)
    __root.tsx        # Layout + theme + header/footer
    index.tsx         # Home (hero + all sections)
    about.tsx         # /about
    contact.tsx       # /contact
    projects.index.tsx
    projects.$slug.tsx
  styles.css          # Design tokens + utilities
```

## 🚀 Deploy

The template ships with a Cloudflare Workers config (`wrangler.jsonc`).
You can also deploy to **Vercel** or any Node/edge host:

1. Push to GitHub.
2. Import the repo on Vercel.
3. Build command: `npm run build` · Output handled by Vite plugin.
4. Set the environment to Node 20+.

## 🔗 GitHub API (optional upgrade)

Currently `repos` is a static array. To fetch live repos, replace
`src/data/site.ts` `repos` with a route loader hitting:
`https://api.github.com/users/<your-handle>/repos?sort=updated`

## 📜 License

MIT — make it yours.