import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

type UpdateCategory = 'Major drops' | 'New additions' | 'Quality of life';

type UpdateItem = {
  date: string;
  category: UpdateCategory;
  title: string;
  summary: string;
  details: string[];
  tag: string;
};

const updates: UpdateItem[] = [
  {
    date: '11 Oct 2026',
    category: 'Major drops',
    title: 'Climate Chronicles becomes a real digital magazine',
    summary:
      'The 2025–2026 issue now has its real cover and an interactive reader built around the original PDF.',
    details: [
      'A 3D page-turn animation with the reverse of the turning sheet rendered during the flip.',
      'Two-page desktop spreads with a spine, plus a one-page reading mode that also suits mobile screens.',
      'The original PDF stays available to download or open separately, with page order preserved.',
      'Cached page bitmaps, stale-render cancellation, reduced-motion support, and a soft-print finish refine the reading experience.',
    ],
    tag: 'Magazine experience',
  },
  {
    date: '10 Oct 2026',
    category: 'Major drops',
    title: 'Friendlier error handling and offline fallback',
    summary:
      'A failed screen no longer needs to feel like a dead end.',
    details: [
      'A branded application-error screen offers retry and a route back home instead of exposing a stack trace.',
      'A service worker and a dedicated offline fallback improve what visitors see after a successful first visit.',
      'The production server fallback was corrected for Express 5 routing.',
    ],
    tag: 'Resilience',
  },
  {
    date: '8–11 Oct 2026',
    category: 'New additions',
    title: 'A fuller photo and video archive',
    summary:
      'More club activity is represented through new gallery material and an updated homepage archive.',
    details: [
      'Added image galleries for SPSC and awareness materials.',
      'Refreshed awareness-gallery imagery and surfaced the image/video archive on the homepage.',
      'Added the latest video to the archive carousel and cleaned up duplicate or inconsistent video filenames.',
    ],
    tag: 'Gallery & archive',
  },
  {
    date: '8–9 Oct 2026',
    category: 'New additions',
    title: 'Leadership records and recognition refreshed',
    summary:
      'The leadership pages better reflect current roles, former members, and the people behind the club.',
    details: [
      'Added missing 2025 Executive Committee members and restored verified member IDs.',
      'Corrected portrait mappings, official names, alumni terms, and member IDs.',
      'Moved former office-holders into the alumni roster and clarified current leadership cards.',
      'Added cards for vacant core leadership positions, updated class levels, and refined special-recognition details.',
    ],
    tag: 'People & leadership',
  },
  {
    date: '15 Sep 2026',
    category: 'Quality of life',
    title: 'A stronger engineering and security baseline',
    summary:
      'The September maintenance pass focused on safer production behavior and repeatable checks.',
    details: [
      'Added baseline production security headers and removed a tracked local environment file.',
      'Improved ESM/Vite and production-server compatibility, and tightened TypeScript project boundaries.',
      'Added explicit type-check, lint, formatting, and build verification; cleaned tracked dependencies and generated output.',
    ],
    tag: 'Stability & security',
  },
  {
    date: '15 Sep–10 Oct 2026',
    category: 'Quality of life',
    title: 'Accessibility and failure states get attention',
    summary:
      'Small interaction details are more predictable for keyboard users and visitors on imperfect connections.',
    details: [
      'Added a graceful not-found route and clearer document metadata.',
      'Made the image lightbox safer for keyboard use and page scrolling.',
      'Hardened leadership/member rendering and stable list keys, and added an accessible main landmark.',
      'Kept CI verification read-only and made static asset references part of the checks.',
    ],
    tag: 'Usability',
  },
  {
    date: '13 Sep–10 Oct 2026',
    category: 'Quality of life',
    title: 'Dependencies and build tooling cleaned up',
    summary:
      'Maintenance work reduces avoidable build friction and addresses dependency risk.',
    details: [
      'Merged grouped dependency updates and patched a proxy-addr security advisory.',
      'Migrated Tailwind CSS and resolved related dependency vulnerabilities.',
      'Pinned the Node.js major version, updated CI actions for Node 24 compatibility, and enabled scheduled dependency-update proposals.',
    ],
    tag: 'Developer experience',
  },
];

const categories: Array<'Everything' | UpdateCategory> = [
  'Everything',
  'Major drops',
  'New additions',
  'Quality of life',
];

const categoryStyles: Record<UpdateCategory, string> = {
  'Major drops': 'bg-primary-100 text-primary-800',
  'New additions': 'bg-emerald-100 text-emerald-800',
  'Quality of life': 'bg-coral-100 text-coral-800',
};

const WhatsNewPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<
    'Everything' | UpdateCategory
  >('Everything');

  const visibleUpdates = useMemo(
    () =>
      activeCategory === 'Everything'
        ? updates
        : updates.filter(item => item.category === activeCategory),
    [activeCategory]
  );

  return (
    <div className="min-h-screen bg-sandstone-50">
      <section className="relative overflow-hidden border-b border-sandstone-200 bg-primary-900 text-white">
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full border border-white/40" />
          <div className="absolute -right-4 -top-16 h-64 w-64 rounded-full border border-white/30" />
          <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full border border-white/20" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-coral-200">
            Cambrian Climate Club · Release notes
          </p>
          <motion.h1
            className="max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            What’s new at CCC?
          </motion.h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            The latest drops, new additions, and thoughtful fixes that make the
            club website more useful. A recap of repository changes from 1
            September to 11 October 2026.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90">
              3 major release themes
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90">
              People, media & reliability
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="editorial-kicker">The changelog</p>
            <h2 className="mt-2 text-3xl font-semibold text-charcoal-900 md:text-4xl">
              Built for the people who visit
            </h2>
            <p className="mt-3 max-w-2xl text-charcoal-600">
              A curated summary of meaningful changes—not every formatting
              commit or dependency bot update.
            </p>
          </div>
          <Link
            to="/climate-chronicles"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-700"
          >
            Explore Climate Chronicles <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div
          className="mb-8 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter updates by category"
        >
          {categories.map(category => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 ${
                activeCategory === category
                  ? 'border-primary-800 bg-primary-800 text-white'
                  : 'border-sandstone-300 bg-white text-charcoal-700 hover:border-primary-500 hover:text-primary-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {visibleUpdates.map((item, index) => (
            <motion.article
              key={item.title}
              className="editorial-card flex h-full flex-col p-6 md:p-8"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.2) }}
              layout
            >
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ${categoryStyles[item.category]}`}
                >
                  {item.category}
                </span>
                <time className="text-sm font-medium text-charcoal-500">
                  {item.date}
                </time>
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-secondary-600">
                {item.tag}
              </p>
              <h3 className="mt-0 text-2xl font-semibold leading-snug text-charcoal-900">
                {item.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-charcoal-600">
                {item.summary}
              </p>
              <ul className="mt-3 space-y-2 pl-0">
                {item.details.map(detail => (
                  <li
                    key={detail}
                    className="flex items-start gap-3 text-sm leading-relaxed text-charcoal-700"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-coral-500"
                      aria-hidden="true"
                    />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-sandstone-200 bg-white p-6 md:flex md:items-center md:justify-between md:gap-8 md:p-8">
          <div>
            <p className="editorial-kicker">That’s the roundup</p>
            <h2 className="mt-2 text-2xl font-semibold text-charcoal-900">
              More progress, less noise.
            </h2>
            <p className="mt-2 mb-0 max-w-2xl text-charcoal-600">
              This page highlights user-facing changes and meaningful
              maintenance from the repository history. It does not imply that
              every merged change is already live on every deployment.
            </p>
          </div>
          <Link
            to="/"
            className="mt-5 inline-flex flex-shrink-0 items-center gap-2 font-semibold text-primary-800 hover:text-primary-600 md:mt-0"
          >
            Back to the homepage <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WhatsNewPage;
