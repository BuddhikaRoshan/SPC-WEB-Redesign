# SPC-WEB-Redesign

**A modern redesign of the State Printing Corporation (SPC) website** — built with Next.js and TypeScript, styled with Tailwind CSS, and designed for accessibility, performance, and a responsive UX.

---

![SPC Redesign Screenshot](./public/screenshots/hero.png)

> *Replace the screenshot path above with actual images from `/public/screenshots/` or a hosted URL.*

## Table of contents

* [About](#about)
* [Live Demo](#live-demo)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Screenshots](#screenshots)
* [Getting Started](#getting-started)

  * [Prerequisites](#prerequisites)
  * [Install](#install)
  * [Development](#development)
  * [Build & Production](#build--production)
* [Environment Variables](#environment-variables)
* [Project Structure](#project-structure)
* [Routing & Pages](#routing--pages)
* [Styling & Design System](#styling--design-system)
* [Testing](#testing)
* [Linting & Formatting](#linting--formatting)
* [Deployment](#deployment)
* [Contributing](#contributing)
* [Roadmap](#roadmap)
* [License](#license)
* [Acknowledgements](#acknowledgements)

---

## About

This repository contains a modern, responsive redesign of the SPC (State Printing Corporation) public website. The goal is to create a fast, accessible, and maintainable website that showcases SPC services, gallery, news, and contact interfaces — while being easy to extend into an internal CMS-backed portal later.

## Live Demo

> *Add a URL here if you deploy (Vercel, Netlify, or your server).*

## Features

* Accessible, responsive layout (desktop, tablet, mobile)
* Component-driven UI with reusable design tokens
* SEO-friendly pages with server-side rendering for key pages
* Image optimization using Next.js `next/image`
* Utility-first styling using Tailwind CSS
* Modular page-level metadata and OpenGraph tags
* Simple contact form (example) with client-side validation
* Ready for localization (i18n) in future iterations

## Tech Stack

* Next.js (App Router) — React framework for production
* TypeScript — static typing and developer DX
* Tailwind CSS — fast utility-first styling
* ESLint + Prettier — linting & code style
* Vercel (recommended) — deployment platform

> Replace any entry above if your project uses a different toolchain (e.g., CRA, Remix, MUI, SCSS).

## Screenshots

*Add screenshot images into `/public/screenshots/` and update the paths below.*

* Desktop home: `/public/screenshots/home-desktop.png`
* Mobile home: `/public/screenshots/home-mobile.png`
* Photo gallery: `/public/screenshots/gallery.png`

---

## Getting started

### Prerequisites

* Node.js 18.x or newer (recommended)
* npm, yarn, or pnpm
* Git

### Install

Clone the repo and install dependencies:

```bash
# Clone
git clone https://github.com/BuddhikaRoshan/SPC-WEB-Redesign.git
cd SPC-WEB-Redesign

# Install (npm)
npm install

# or (yarn)
yarn

# or (pnpm)
pnpm install
```

### Development

Run the Next.js development server:

```bash
# npm
npm run dev

# yarn
yarn dev

# pnpm
pnpm dev
```

Open `http://localhost:3000` in your browser. The app hot‑reloads when you save files.

### Build & Production

```bash
# build
npm run build

# start
npm start
```

For platforms like Vercel, simply connect the repository and use the default Next.js build settings.

## Environment variables

If your project requires environment variables (for example API keys, contact form endpoints, or CMS integration), create a `.env.local` file at the project root and add variables like:

```env
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
CONTACT_FORM_ENDPOINT=https://hooks.example.com/contact
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your_map_key_here
```

> Never commit secrets to the repository. Add `.env.local` to `.gitignore`.

## Project structure

*This is a suggested structure; adjust to match your repo.*

```
SPC-WEB-Redesign/
├─ public/                     # static assets (images, icons, screenshots)
├─ src/
│  ├─ app/                     # Next.js app-router pages and layout
│  ├─ components/              # shared UI components (Header, Footer, Card...)
│  ├─ lib/                     # utilities, API clients, helpers
│  ├─ styles/                  # global styles & tailwind config
│  ├─ hooks/                   # custom React hooks
│  └─ data/                    # sample JSON data (news, events, gallery)
├─ .eslintrc, .prettierrc       # lint & formatting
├─ next.config.js
├─ package.json
└─ README.md
```

## Routing & Pages

* `/` — Home (hero, services, highlights)
* `/about` — About SPC and mission
* `/services` — Services listing and detail
* `/gallery` — Photo gallery with pagination/lightbox
* `/news` — News & announcements list
* `/contact` — Contact form and map
* `/admin` — (Optional) admin dashboard stub for future CMS

## Styling & Design System

* Tailwind design tokens are defined in `tailwind.config.js`.
* Reusable components: `Button`, `Card`, `Navbar`, `Footer`, `Hero`, `GalleryGrid`.
* Color, spacing, and typography tokens are centralized for consistency.

## Testing

This template includes a basic testing setup suggestion. If you want to add tests:

* Unit & component tests: `vitest` or `jest` + `testing-library/react`
* End-to-end tests: `cypress` or `playwright`

Add a sample test command to `package.json`:

```json
"test": "vitest"
```

## Linting & Formatting

Run linters and formatters with:

```bash
npm run lint
npm run format
```

Add or tune rules in `.eslintrc` and `.prettierrc` to match your code style.

## Deployment

**Vercel (recommended)**

1. Go to [https://vercel.com](https://vercel.com) and import the GitHub repository.
2. Use the default Next.js build settings (`npm run build`).
3. Set any required environment variables in the Vercel project settings.

Other hosts (Netlify, AWS Amplify, DigitalOcean App Platform) also support Next.js — check their docs for Next.js-specific settings.

## Contributing

Contributions welcome — please follow this workflow:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/my-feature`.
3. Commit changes with meaningful messages.
4. Push branch and open a Pull Request.

Please follow these guidelines:

* Keep components small and focused.
* Write TypeScript types for public component APIs.
* Add unit tests for new logic where applicable.
* Run `npm run lint` and `npm run format` before submitting.

## Roadmap

Planned improvements:

* CMS integration (Sanity / Strapi / Contentful)
* Multi-language support (Sinhala, Tamil, English)
* Role-based admin panel for content management
* Automated accessibility checks & performance budgets

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## Acknowledgements

* Next.js & the Vercel team for an excellent framework
* Tailwind Labs for Tailwind CSS
* Any designers, photographers or stakeholders who contributed assets or feedback

---

*Made with ❤️ by Buddhika Roshan Bandara — feel free to adapt and reuse.*
