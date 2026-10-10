import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Keep the magazine at a stable URL so the PDF can be replaced without
// changing the page component or its download link.
const MAGAZINE_PDF_URL =
  '/Climate%20Chronicle/Climate%20Chronicle%2025-26.pdf';

const ClimateChroniclesPage = () => {
  const [magazineAvailable, setMagazineAvailable] = useState(false);
  const [checkedMagazine, setCheckedMagazine] = useState(false);
  const [bookIsOpen, setBookIsOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;

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
    <div className="min-h-[70vh] overflow-hidden bg-sandstone-50 px-4 py-14 sm:py-20">
      <motion.section
        className="mx-auto w-full max-w-6xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        aria-labelledby="climate-chronicles-title"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="editorial-kicker mb-4">The club magazine · 2025–2026</p>
          <h1
            id="climate-chronicles-title"
            className="font-heading text-4xl font-semibold tracking-tight text-charcoal-900 sm:text-5xl md:text-6xl"
          >
            Climate Chronicles
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-charcoal-600 sm:text-lg">
            A year of ideas, stories, and action for a changing planet. Settle
            in, open the issue, and explore the work of the Cambrian Climate
            Club.
          </p>
        </div>

        {!checkedMagazine ? (
          <div
            className="mx-auto mt-12 flex min-h-[360px] max-w-5xl items-center justify-center rounded-3xl border border-sandstone-200 bg-white/70 px-6 text-center shadow-sm"
            aria-live="polite"
          >
            <div>
              <span className="text-4xl" aria-hidden="true">
                📖
              </span>
              <p className="mt-4 font-heading text-xl font-semibold text-charcoal-900">
                Preparing your reading room…
              </p>
              <p className="mt-2 text-sm text-charcoal-600">
                Checking the published magazine file.
              </p>
            </div>
          </div>
        ) : magazineAvailable ? (
          <div className="mt-10 sm:mt-14">
            <div
              className="flex flex-col gap-5 rounded-2xl border border-sandstone-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-7"
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex h-14 w-12 shrink-0 items-center justify-center rounded-md bg-primary text-2xl text-white shadow-md"
                >
                  <span aria-hidden="true">▤</span>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-700">
                    2025–2026 edition
                  </p>
                  <h2 className="mt-1 font-heading text-xl font-semibold text-charcoal-900 sm:text-2xl">
                    Your copy is ready
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal-600">
                    Read online or keep the full publication as a PDF.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-primary-800 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  href={MAGAZINE_PDF_URL}
                  download="climate-chronicle-2025-2026.pdf"
                >
                  <span aria-hidden="true">↓</span>
                  Download the magazine
                </a>
                <a
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-sandstone-300 bg-white px-5 py-3 text-sm font-semibold text-charcoal-900 transition hover:bg-sandstone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  href={MAGAZINE_PDF_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open PDF separately
                </a>
              </div>
            </div>

            {!bookIsOpen ? (
              <motion.div
                className="relative mx-auto mt-9 max-w-5xl px-2 pb-5 pt-2 sm:mt-12 sm:px-8"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div
                  className="pointer-events-none absolute bottom-0 left-6 right-6 top-6 rounded-[2rem] bg-primary/10 blur-2xl sm:left-16 sm:right-16"
                  aria-hidden="true"
                />
                <div
                  className="relative mx-auto grid min-h-[390px] max-w-4xl grid-cols-1 overflow-hidden rounded-r-2xl rounded-l-md bg-primary shadow-2xl sm:min-h-[490px] sm:grid-cols-[12px_1fr]"
                >
                  <div
                    className="hidden bg-primary-950 sm:block"
                    aria-hidden="true"
                  />
                  <div
                    className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-primary-800 via-primary to-primary-950 px-7 py-12 text-center text-white sm:px-14"
                  >
                    <div
                      className="pointer-events-none absolute inset-3 rounded-r-xl border border-white/15 sm:inset-5"
                      aria-hidden="true"
                    />
                    <div
                      className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10"
                      aria-hidden="true"
                    />
                    <div
                      className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full border border-white/10"
                      aria-hidden="true"
                    />
                    <p className="relative text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
                      Cambrian Climate Club presents
                    </p>
                    <div
                      className="relative my-7 flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/5 text-4xl shadow-inner sm:my-9 sm:h-24 sm:w-24"
                    >
                      <span aria-hidden="true">✳</span>
                    </div>
                    <h2
                      className="relative max-w-xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl"
                    >
                      Climate
                      <br />
                      Chronicles
                    </h2>
                    <div
                      className="relative my-6 h-px w-20 bg-white/50"
                      aria-hidden="true"
                    />
                    <p className="relative text-sm uppercase tracking-[0.22em] text-white/75">
                      The 2025–2026 edition
                    </p>
                    <p className="relative mt-3 max-w-md text-sm leading-relaxed text-white/75 sm:text-base">
                      Stories from our community. Ideas for our future. A planet
                      worth turning the page for.
                    </p>
                    <button
                      className="relative mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary shadow-lg transition duration-200 hover:-translate-y-0.5 hover:bg-sandstone-50 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                      onClick={() => setBookIsOpen(true)}
                      type="button"
                    >
                      Open the magazine
                      <span aria-hidden="true">→</span>
                    </button>
                    <p className="relative mt-4 text-xs text-white/55">
                      Best experienced on a larger screen
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.section
                className="mt-8 sm:mt-10"
                initial={{
                  opacity: 0,
                  rotateY: -9,
                  rotateX: 2,
                  scale: 0.97,
                  y: 20,
                }}
                animate={{ opacity: 1, rotateY: 0, rotateX: 0, scale: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'left center', perspective: 1600 }}
                aria-label="Climate Chronicles reading area"
              >
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3 px-1">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-700">
                      The reading room
                    </p>
                    <p className="mt-1 text-sm text-charcoal-600">
                      Turn pages with the PDF viewer controls.
                    </p>
                  </div>
                  <button
                    className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-sandstone-300 bg-white px-4 py-2 text-sm font-semibold text-charcoal-900 transition hover:bg-sandstone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    onClick={() => setBookIsOpen(false)}
                    type="button"
                  >
                    <span aria-hidden="true">‹</span>
                    Close book
                  </button>
                </div>

                <div
                  className="relative rounded-2xl bg-[#d9d2c4] p-2 shadow-[0_24px_70px_-28px_rgba(11,27,43,0.55)] sm:rounded-3xl sm:p-4"
                >
                  <div
                    className="pointer-events-none absolute bottom-5 left-5 top-5 z-10 hidden w-2 rounded-full bg-primary/15 sm:block"
                    aria-hidden="true"
                  />
                  <div
                    className="overflow-hidden rounded-lg border border-black/10 bg-white shadow-inner sm:rounded-xl"
                  >
                    <iframe
                      className="block h-[68vh] min-h-[520px] w-full bg-white sm:h-[82vh] sm:min-h-[680px]"
                      src={MAGAZINE_PDF_URL}
                      title="Climate Chronicles 2025–2026 magazine PDF reader"
                      loading="lazy"
                    />
                  </div>
                </div>
                <p className="mt-4 text-center text-xs leading-relaxed text-charcoal-500">
                  Page turning and zoom controls are provided by your browser’s
                  PDF reader. If the reader does not appear, use “Open PDF
                  separately” above.
                </p>
              </motion.section>
            )}
          </div>
        ) : (
          <div
            className="mx-auto mt-12 flex min-h-[340px] max-w-5xl flex-col items-center justify-center rounded-3xl border border-sandstone-200 bg-white px-6 py-16 text-center shadow-sm sm:min-h-[420px]"
            aria-live="polite"
          >
            <span
              className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-sandstone-100 text-3xl"
              aria-hidden="true"
            >
              📖
            </span>
            <h2 className="font-heading text-2xl font-semibold text-charcoal-900">
              This reading room is taking a moment.
            </h2>
            <p className="mt-3 max-w-lg leading-relaxed text-charcoal-600">
              The magazine file could not be reached. Please try again in a
              moment or reopen this page. The original publication remains
              unchanged.
            </p>
            <button
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              onClick={() => window.location.reload()}
              type="button"
            >
              Try again
            </button>
          </div>
        )}

        <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-charcoal-500">
          The publication stays as its original PDF. You can download a copy at
          any time, and future editions can be updated independently of the
          website.
        </p>
      </motion.section>
    </div>
  );
};

export default ClimateChroniclesPage;
