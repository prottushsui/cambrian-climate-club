# Project Handover Guide

This document is the operational guide for maintaining the Cambrian Climate Club website. Keep it updated whenever the build, hosting, content model, or deployment process changes.

## Project at a glance

- **Application:** public-facing website for the Cambrian Climate Club.
- **Frontend:** React 18, TypeScript, React Router, Tailwind CSS, and Framer Motion.
- **Build tool:** Vite. Production output is written to `dist/`.
- **Primary hosting:** Vercel (configured in `vercel.json`).
- **Optional Node server:** Express static server in `server.js`; it serves an already-built `dist/` directory.
- **Routing:** hash-based routing through `HashRouter`. Routes look like `/#/about`; preserve this unless hosting and routing are deliberately migrated together.
- **Main content source:** `src/data/content.ts`.
- **Static media:** `public/`. Paths used in React are URL paths, for example `/images/Club%20logo.png` or `/Video/Video%201.mp4`.

## First-time setup

Use Node.js 22 (see `.nvmrc`) and npm.

```bash
npm ci
npm run dev
```

Vite's development server is configured for port 3000. If port 3000 is occupied, Vite may select another port because `strictPort` is disabled.

## Before committing or handing off a change

Run the checks in this order:

```bash
npm run type-check
npm run lint
npm run format:check
npm run build
npm run preview
```

Open the preview URL and check the affected page at desktop and mobile widths. For media changes, open each affected image/video in the browser and confirm the URL's capitalization and extension exactly match the file in `public/`.

The GitHub Actions workflow runs installation, repository-hygiene checks, type checking, linting, formatting, and a production build on pull requests and pushes to `main`. A green type-check alone does not prove that formatting or the production build passed.

## Where to make common changes

| Change                                             | Location                                                       |
| -------------------------------------------------- | -------------------------------------------------------------- |
| Club members, advisors, alumni, leadership terms   | `src/data/content.ts`                                         |
| Project cards and achievement milestones           | `src/data/content.ts`                                         |
| Gallery groupings and image lists                  | `src/data/content.ts`                                         |
| Video archive ordering                             | `src/components/ImageGallery.tsx` (`VIDEO_ARCHIVE`)          |
| Navigation links                                   | `src/components/Navbar.tsx` and routes in `App.tsx`          |
| Page content and layouts                           | `src/pages/`                                                  |
| Shared navigation, footer, cards, gallery, lightbox | `src/components/`                                             |
| Global styles and design tokens                    | `index.css`, `tailwind.config.js`, `src/design-system.md`  |
| Static images and video                            | `public/images/`, `public/Video/`                            |
| Build and local server configuration               | `vite.config.ts`, `vercel.json`, `server.js`                |

## Adding or changing media

1. Put the original media file in the appropriate folder under `public/`.
2. Use a descriptive filename and preserve the exact case and extension.
3. Reference it with a root-relative URL beginning with `/`, not a filesystem path such as `public/images/example.jpg`.
4. Check the reference and file name together before committing. Spaces in filenames work as URL paths, but URL-encoding spaces is safer in HTML attributes and links.
5. Keep video files in `public/Video/` and add new archive entries to `VIDEO_ARCHIVE` in `src/components/ImageGallery.tsx`.
6. Do not replace a missing portrait with another person's photo. The leadership page has a deliberate placeholder when a portrait is not mapped.

Large video files materially increase repository size and clone time. Before adding more, consider whether the club should host videos on a media platform and embed them instead. Do not remove existing assets as part of a refactor without checking every reference.

## Adding a page

1. Create the page component under `src/pages/`.
2. Add a route in `App.tsx`.
3. Add a navigation item in `src/components/Navbar.tsx` if it should appear in the main menu.
4. Use the shared layout, colors, and motion conventions; respect reduced-motion preferences.
5. Verify the page through both the development server and a production build preview.

## Deployment

The repository includes Vercel configuration and the live site is currently configured through the Vercel project. A push to `main` does not by itself prove a successful deployment: check the GitHub Actions result and the Vercel deployment status.

For the optional Express server:

```bash
npm ci
npm run build
npm start
```

The server requires the generated `dist/` directory and reads the port from `PORT` (default: 3000). It is not a substitute for running the Vite build first.

## Troubleshooting

- **A change is not visible:** wait for deployment to finish, hard-refresh with Ctrl+F5, and check that the intended commit is deployed.
- **Image/video is missing:** compare the referenced URL with the exact file path under `public/`; filename case matters on Linux hosting.
- **A route is missing:** verify both the route in `App.tsx` and the link in `Navbar.tsx`. Keep hash routing unless the hosting fallback is intentionally changed.
- **CI fails at formatting:** run `npm run format`, review the diff, then commit the formatted files.
- **The build fails after a dependency update:** restore the last known-good lockfile, update dependencies in a separate change, and run the full check sequence before deployment.
- **The Express server does not start:** confirm Node.js 22 is in use and `npm run build` has created `dist/index.html`.

## Ownership and access checklist

Before handing the project to a new maintainer, transfer or confirm access to:
- the GitHub repository and its branch protection / Actions settings;
- the Vercel project and its domain/DNS settings, if applicable;
- any analytics account used by the website;
- the official club email or other contact channels linked from the site.

Use each service's official ownership-transfer process. Never commit API keys, passwords, deployment tokens, or private environment files. The current site is primarily static and does not require application secrets for its normal frontend build.

## Known follow-up work

- Keep the CI workflow green and resolve all dependency audit findings based on their actual dependency paths and compatibility.
- Add automated checks for referenced static assets and a lightweight route/media smoke test if the project grows.
- Review accessibility and performance on real mobile devices before major releases.
