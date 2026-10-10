import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Keep the magazine at a stable URL so the PDF can be replaced without
// changing the page component or its download link.
const MAGAZINE_PDF_URL =
  '/resources/climate-chronicle/climate-chronicle-2025-2026.pdf';

const ClimateChroniclesPage = () => {
  const [magazineAvailable, setMagazineAvailable] = useState(false);
  const [checkedMagazine, setCheckedMagazine] = useState(false);

  useEffect(() => {
    let cancelled = false;

    // Check the public asset before rendering an iframe; a missing PDF should
    // produce a clear empty state instead of a broken document viewer.
    fetch(MAGAZINE_PDF_URL, { method: 'HEAD' })
      .then(response => {
        if (!cancelled) {
          setMagazineAvailable(response.ok);
          setCheckedMagazine(true);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setMagazineAvailable(false);
          setCheckedMagazine(true);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="min-h-[70vh] bg-sandstone-50 px-4 py-16 sm:py-24">
      <motion.section
        className="mx-auto w-full max-w-6xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        aria-labelledby="climate-chronicles-title"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="editorial-kicker mb-4">The club magazine</p>
          <h1
            id="climate-chronicles-title"
            className="font-heading text-4xl font-semibold tracking-tight text-charcoal-900 sm:text-5xl md:text-6xl"
          >
            Climate Chronicles
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-charcoal-600">
            Stories, ideas, and action from the Cambrian Climate Club. Read the
            2025–2026 issue below or open the complete magazine separately.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-sandstone-200 bg-white shadow-sm">
          <div className="flex flex-col gap-4 border-b border-sandstone-200 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary-700">
                2025–2026 edition
              </p>
              <h2 className="mt-1 font-heading text-2xl font-semibold text-charcoal-900">
                The complete magazine
              </h2>
            </div>
            {magazineAvailable && (
              <div className="flex flex-wrap gap-3">
                <a
                  className="inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  href={MAGAZINE_PDF_URL}
                  download="climate-chronicle-2025-2026.pdf"
                >
                  Download PDF
                </a>
                <a
                  className="inline-flex min-h-11 items-center justify-center rounded-lg border border-sandstone-300 bg-white px-5 py-3 text-sm font-semibold text-charcoal-900 transition hover:bg-sandstone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  href={MAGAZINE_PDF_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in new tab
                </a>
              </div>
            )}
          </div>

          {magazineAvailable ? (
            <iframe
              className="block h-[70vh] min-h-[480px] w-full bg-sandstone-100 sm:h-[80vh]"
              src={MAGAZINE_PDF_URL}
              title="Climate Chronicles 2025–2026 magazine PDF"
            />
          ) : (
            <div
              className="flex min-h-[320px] flex-col items-center justify-center px-6 py-16 text-center sm:min-h-[420px]"
              aria-live="polite"
            >
              <span
                className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-sandstone-100 text-2xl"
                aria-hidden="true"
              >
                {checkedMagazine ? '📖' : '🌱'}
              </span>
              <h3 className="font-heading text-2xl font-semibold text-charcoal-900">
                {checkedMagazine
                  ? 'The next page is waiting on the magazine file.'
                  : 'Preparing the reading room…'}
              </h3>
              <p className="mt-3 max-w-lg leading-relaxed text-charcoal-600">
                {checkedMagazine
                  ? 'The PDF has not been added yet. Once the final issue is uploaded, it will appear here with a download option. The original page order will be preserved.'
                  : 'Checking for the published 2025–2026 issue.'}
              </p>
            </div>
          )}
        </div>

        <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-relaxed text-charcoal-500">
          For the best reading experience, use the viewer controls to zoom in or
          open the PDF in a new tab. The magazine file is kept separate from the
          website code so future editions can be updated independently.
        </p>
      </motion.section>
    </div>
  );
};

export default ClimateChroniclesPage;
