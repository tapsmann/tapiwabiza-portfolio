# Tapiwa Jairos Biza - Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with dark/light mode support
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile
- **Smooth Animations**: Framer Motion-like animations using CSS
- **Accessible**: Semantic HTML, proper ARIA labels, keyboard navigation
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards
- **TypeScript**: Full type safety throughout the codebase

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Inter (via next/font)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tapiwa-biza-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles & Tailwind imports
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main portfolio page
├── components/          # Reusable components (future use)
public/                  # Static assets
```

## Customization

### Personal Information

Edit the data objects in `src/app/page.tsx`:
- `personalInfo` - Name, title, contact details, summary
- `skills` - Technical skills organized by category
- `experience` - Work experience entries
- `projects` - Portfolio projects
- `education` - Educational background
- `certifications` - Professional certifications
- `languages` - Language proficiencies

### Colors & Theme

Modify `tailwind.config.ts` to customize:
- Color palette (primary, dark)
- Font families
- Animations
- Breakpoints

### Styling

Global styles in `src/app/globals.css` include:
- CSS variables for theming
- Custom component classes
- Utility classes
- Keyframe animations

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform supporting Node.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted VPS

## License

MIT License - feel free to use this as a template for your own portfolio.

## Contact

- **Email**: tapiwajairosbiza@gmail.com
- **Phone**: +263 78 258 5268 / +263 77 278 9236
- **GitHub**: [github.com/tapsmann](https://github.com/tapsmann)
- **Portfolio**: [tapsmann.github.io/destiny-for-women.org](https://tapsmann.github.io/destiny-for-women.org)