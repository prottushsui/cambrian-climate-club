# Cleanup Report

## Summary

This cleanup focused the website on its active Climate Club pages and removed inactive experiments, placeholders, duplicate assets, and stale implementation notes while preserving the current public-facing Home, About, Leadership, Projects, and Achievements experiences.

## Removed inactive features

- Removed the hidden `/demo` route and its experimental animation/gallery components because it was not linked from the active site navigation and used unrelated sample portfolio content.
- Removed the broken quiz page and placeholder leaderboard page from routing and navigation because they were unfinished, produced TypeScript errors, and did not contribute to the current Climate Club website.
- Removed obsolete Google Apps Script and quiz platform documentation tied to the deleted quiz/leaderboard work.

## Removed unused code

- Removed the unused app context/reducer layer because no component consumed the context.
- Removed the simulated asynchronous `useData` hook and now reads static project content directly from `src/data/content.ts`.
- Removed unused UI primitives and demo-only helpers that were not referenced by the active application.
- Removed unused utility modules for SEO, image proxying, and performance metrics that were never imported by active code.
- Removed the unused `VideoPlayer` component and icon wrapper used only by deleted demo components.
- Removed an unused error-boundary console log while keeping the user-facing fallback behavior.

## Removed dependencies

- Removed `clsx` and `tailwind-merge` after deleting the unused UI primitive layer that depended on them.
- Removed `lucide-react` after deleting the demo-only icon wrapper that depended on it.
- Removed unused development dependencies `@vitejs/plugin-react-swc` and `vite-plugin-eslint`.

## Removed assets and placeholders

- Removed duplicate root-level video files that were already present under `public/Video/`.
- Removed zero-byte achievement video placeholders and their references.
- Removed one-byte `blank` placeholder files from source and public asset folders.
- Consolidated duplicated leadership portraits by updating member image paths to the existing `public/images/advisor&leadership/` directory and deleting the duplicate `public/people/` directory.
- Removed unreferenced overflow gallery images from MGM, Training, Achievement, Cleaning, and Conference folders while keeping every asset referenced by the active content data.

## Active functionality preserved

- Home page hero, featured initiatives, and journey stats remain active.
- About page content and branding remain active.
- Leadership/advisory/member displays remain active with consolidated image paths.
- Projects page remains active.
- Achievements timeline, image galleries, and active video archive remain active.
- Navbar and footer continue to link only to active public pages.

## Validation

- `npm run build` completed successfully after cleanup.
- A path scan found no unreferenced files under `public/` based on active source references.
