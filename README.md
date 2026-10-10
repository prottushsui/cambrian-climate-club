# Cambrian Climate Club Website

The official website for the Cambrian Climate Club, a student-led environmental and sustainability organization at Cambrian School & College, Campus 2.

**Live website:** https://cambrian-climate-club-v2.vercel.app

## What the site contains

- Home, About, Leadership, Projects, Achievements, and Climate Chronicles pages.
- Responsive layouts styled with Tailwind CSS and a custom editorial design system.
- Club leadership, alumni, advisors, projects, achievements, galleries, and video archive.
- An embedded Climate Chronicles PDF reader with a separate download option when an issue file is published.
- A friendly application-error screen and a service-worker offline fallback for visitors who have previously loaded the site.
- Framer Motion animations configured to respect the visitor's reduced-motion preference.
- Vercel Analytics integration.

## Technology

- React 18 + TypeScript
- React Router DOM (hash-based routing)
- Vite
- Tailwind CSS
- Framer Motion
- Vercel Analytics
- Optional Express static server for deployments that need a Node process

## Requirements

- Node.js 22 (see `.nvmrc`)
- npm

## Start locally

```bash
npm ci
npm run dev
```

Vite is configured to use port 3000. The development server prints the actual local URL when it starts.

## Quality checks

Run these before opening a pull request or deploying:

```bash
npm run type-check
npm run lint
npm run format:check
npm run build
npm run preview
```

To apply the configured formatting locally:

```bash
npm run format
```

The production build is generated in `dist/`. `npm run preview` serves that build locally so you can inspect it before release.

## Repository layout

```text
├── App.tsx                      # Application shell and routes
├── index.tsx                    # React entry point and error boundary
├── index.html                   # HTML document metadata and mount point
├── index.css                    # Global styles
├── public/                      # Static images, portraits, and videos
├── src/
│   ├── components/              # Shared UI components
│   ├── constants/               # Shared animation constants
│   ├── data/content.ts          # Club content and media references
│   ├── pages/                   # Route-level page components
│   ├── types/                   # Shared TypeScript types
│   └── design-system.md         # Design-system notes
├── docs/HANDOVER.md             # Setup, maintenance, deployment and troubleshooting
├── server.js                    # Optional Express server for dist/
├── vite.config.ts               # Vite configuration
├── vercel.json                  # Vercel response headers
└── .github/workflows/ci.yml     # Automated verification
```

## Updating content and media

Most club information lives in `src/data/content.ts`. Gallery videos are listed in `VIDEO_ARCHIVE` inside `src/components/ImageGallery.tsx`. Static assets belong under `public/` and are referenced using root-relative URLs (for example, `/images/Club%20logo.png`).

### Publishing a Climate Chronicles issue

Place the final PDF at:

```text
public/resources/climate-chronicle/climate-chronicle-2025-2026.pdf
```

The Climate Chronicles page checks for that public asset before displaying the embedded reader and download link. If the file is absent, the page shows a clear placeholder instead of a broken PDF frame. Keep the original PDF intact; the browser's built-in reader handles page navigation and zoom without converting or reordering pages.

Read [the handover guide](docs/HANDOVER.md) before making structural, routing, hosting, or asset changes. It explains the project conventions and release checklist.

## Deployment

The repository is configured for Vercel. Verify that CI passes and the Vercel deployment succeeds after changes to `main`; a successful Git push is not proof of a successful production release.

An optional Express server can serve a built site with:

```bash
npm ci
npm run build
npm start
```

## Offline behavior

The service worker caches the small offline page and successful same-origin pages/assets. It can show the fallback for offline navigation and server errors after a visitor has successfully loaded the site at least once. It cannot guarantee a fallback on a first visit or when the hosting origin cannot serve the service worker or cached resources.

## License

See [LICENSE](LICENSE).
