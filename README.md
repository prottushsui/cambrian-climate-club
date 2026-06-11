# Cambrian Climate Club Website

The official website for the Cambrian Climate Club, a student-led environmental and sustainability organization at Cambrian School & College, Campus 2.

## About

This website serves as the digital home for the Cambrian Climate Club, providing information about the club's mission, projects, leadership, and achievements. The club promotes environmental awareness and sustainability initiatives within the school community and beyond.

## Features

- **Focused public pages**: Home, About, Leadership, Projects, and Achievements.
- **Responsive design**: Tailwind CSS layouts optimized for mobile, tablet, and desktop screens.
- **Club content archive**: Leadership profiles, project summaries, achievement milestones, images, and videos are driven from local content data.
- **Accessible navigation**: Keyboard-focus styles, labeled navigation, and semantic page structure.
- **Motion with user preferences**: Framer Motion animations respect reduced-motion settings.
- **Analytics-ready**: Vercel Analytics is included in the application shell.

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS with a custom editorial design system
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Server**: Optional Express static server for production builds

## Project Structure

```text
├── App.tsx                         # Application shell and routes
├── index.html                      # HTML entry point
├── index.tsx                       # React entry point
├── index.css                       # Global styles and Tailwind layers
├── public/                         # Referenced static images and videos
├── src/
│   ├── components/                 # Shared UI and layout components
│   ├── constants/                  # Shared animation variants
│   ├── data/content.ts             # Club content, projects, achievements, galleries
│   ├── pages/                      # Home, About, Leadership, Projects, Achievements
│   └── types/types.ts              # Shared TypeScript content types
├── server.js                       # Static production server
├── tailwind.config.js              # Design tokens and Tailwind configuration
└── vite.config.ts                  # Vite build configuration
```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The Vite development server runs on port 3000 by default.

### Type Check

```bash
npm run type-check
```

### Build for Production

```bash
npm run build
```

The production build is written to `dist/`.

### Preview Production Build

```bash
npm run preview
```

## Content Updates

Most user-facing club content lives in `src/data/content.ts`. Update that file when changing leadership profiles, project descriptions, milestones, gallery groups, or referenced media paths.

## License

This project is licensed under the terms specified in the LICENSE file.
