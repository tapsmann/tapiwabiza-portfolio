# Tapiwa Jairos Biza - Portfolio

A modern, responsive, static portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- Glassmorphism-inspired design with aligned, responsive containers
- Dark/light mode toggle that remembers the selected theme
- Fully responsive layout for desktop, tablet, and mobile
- CSS-based animations with no extra UI animation dependency
- Semantic HTML, labels, and ARIA attributes
- SEO metadata, Open Graph, and Twitter card tags
- TypeScript type checking and Next.js ESLint rules

## Tech Stack

- **Framework:** Next.js 14 App Router (static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Font:** System font stack with Inter as the preferred local font

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm

### Install and run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Verify the project

```bash
npm run typecheck
npm run lint
npm run build
```

The production build writes static files to `out/`.

To preview the built site locally:

```bash
npm run preview
```

## Cloudflare Pages deployment

This project is configured as a **static Next.js export**. In Cloudflare Pages use:

| Setting | Value |
| --- | --- |
| Framework preset | **Next.js (Static HTML Export)** |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `out` |

Do **not** use `.next/standalone` for this project.

Cloudflare will provide a `*.pages.dev` URL after the first deployment. The Martruther website (`https://martruther-dev.vercel.app`) is listed as a portfolio project; it is not the portfolio deployment target.

### Optional Wrangler deployment

```bash
npm run build
npx wrangler pages deploy out --project-name=tapiwabiza-portfolio
```

## Project Structure

```text
src/
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout and metadata
│   └── page.tsx         # Portfolio page and content data
├── components/          # Reusable components
public/
├── favicon.svg          # Site icon
└── projects/            # Captured screenshots used in project cards
```

## Customization

Edit the data objects at the top of `src/app/page.tsx` to update personal information, skills, experience, projects, education, certifications, and languages.

Colors, fonts, and animations are configured in `tailwind.config.ts`. Global component classes are in `src/app/globals.css`.

## Contact

- **Email:** tapiwajairosbiza@gmail.com
- **Phone:** +263 78 258 5268 / +263 77 278 9236
- **GitHub:** [github.com/tapsmann](https://github.com/tapsmann)
