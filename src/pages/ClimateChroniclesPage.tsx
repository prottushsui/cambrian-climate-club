import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MAGAZINE_PDF_URL = '/Climate%20Chronicle/Climate%20Chronicle%2025-26.pdf';
const MAGAZINE_COVER_URL =
  '/Climate%20Chronicle/Climate%20Chronicle%20Cover%20pages/CC%20Cover%20page.jpg';
const PDFJS_VERSION = '3.11.174';

interface PdfPage {
  getViewport: (options: { scale: number }) => { width: number; height: number };
  render: (options: {
    canvasContext: CanvasRenderingContext2D;
    viewport: { width: number; height: number };
  }) => { promise: Promise<void> };
}

interface PdfDocument {
  numPages: number;
  getPage: (pageNumber: number) => Promise<PdfPage>;
}

interface PdfJs {
  GlobalWorkerOptions: { workerSrc: string };
  getDocument: (url: string) => { promise: Promise<PdfDocument> };
}

declare global {
  interface Window {
    pdfjsLib?: PdfJs;
  }
}

type ReadingMode = 'spread' | 'single';

const ClimateChroniclesPage = () => {
  const [magazineAvailable, setMagazineAvailable] = useState(false);
  const [checkedMagazine, setCheckedMagazine] = useState(false);
  const [bookIsOpen, setBookIsOpen] = useState(false);
  const [pdf, setPdf] = useState<PdfDocument | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [readingMode, setReadingMode] = useState<ReadingMode>(
    typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches
      ? 'single'
      : 'spread',
  );
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'previous'>('next');
  const [readerError, setReaderError] = useState(false);
  const leftCanvas = useRef<HTMLCanvasElement>(null);
  const rightCanvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');
    const updateMode = (event: MediaQueryListEvent) => {
      setReadingMode(event.matches ? 'single' : 'spread');
    };
    media.addEventListener('change', updateMode);
    return () => media.removeEventListener('change', updateMode);
  }, []);

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

  useEffect(() => {
    if (!bookIsOpen || !magazineAvailable) return;
    let cancelled = false;
    const loadPdf = async () => {
      try {
        if (!window.pdfjsLib) {
          await new Promise<void>((resolve, reject) => {
            const existing = document.querySelector<HTMLScriptElement>(
              'script[data-climate-pdfjs]',
            );
            if (existing) {
              existing.addEventListener('load', () => resolve(), { once: true });
              existing.addEventListener('error', () => reject(new Error('PDF reader failed to load')), { once: true });
              if (window.pdfjsLib) resolve();
              return;
            }
            const script = document.createElement('script');
            script.dataset.climatePdfjs = 'true';
            script.src = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS_VERSION}/pdf.min.js`;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error('PDF reader failed to load'));
            document.head.appendChild(script);
          });
        }
        if (!window.pdfjsLib) throw new Error('PDF reader is unavailable');
        window.pdfjsLib.GlobalWorkerOptions.workerSrc =
          `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS_VERSION}/pdf.worker.min.js`;
        const documentProxy = await window.pdfjsLib.getDocument(MAGAZINE_PDF_URL).promise;
        if (!cancelled) {
          setPdf(documentProxy);
          setReaderError(false);
        }
      } catch {
        if (!cancelled) setReaderError(true);
      }
    };
    void loadPdf();
    return () => {
      cancelled = true;
    };
  }, [bookIsOpen, magazineAvailable]);

  useEffect(() => {
    if (!pdf || !leftCanvas.current) return;
    let cancelled = false;
    const draw = async (number: number, canvas: HTMLCanvasElement) => {
      const context = canvas.getContext('2d');
      if (!context) return;
      if (number > pdf.numPages) {
        canvas.width = 1;
        canvas.height = 1;
        context.clearRect(0, 0, 1, 1);
        return;
      }
      try {
        const page = await pdf.getPage(Math.max(number, 1));
        if (cancelled) return;
        const viewport = page.getViewport({ scale: 1.5 });
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        await page.render({ canvasContext: context, viewport }).promise;
      } catch {
        if (!cancelled) setReaderError(true);
      }
    };
    void draw(pageNumber, leftCanvas.current);
    if (readingMode === 'spread' && rightCanvas.current) {
      void draw(pageNumber + 1, rightCanvas.current);
    }
    return () => {
      cancelled = true;
    };
  }, [pdf, pageNumber, readingMode]);

  const pageStep = readingMode === 'spread' ? 2 : 1;
  const lastVisiblePage = Math.min(
    pageNumber + (readingMode === 'spread' ? 1 : 0),
    pdf?.numPages ?? pageNumber,
  );

  const turnPage = (direction: 'next' | 'previous') => {
    if (!pdf || isFlipping) return;
    const target = direction === 'next' ? pageNumber + pageStep : pageNumber - pageStep;
    if (target < 1 || target > pdf.numPages) return;
    setFlipDirection(direction);
    setIsFlipping(true);
    window.setTimeout(() => {
      setPageNumber(target);
      setIsFlipping(false);
    }, 420);
  };

  const changeReadingMode = (mode: ReadingMode) => {
    if (mode === readingMode) return;
    setReadingMode(mode);
    // Keep the page currently in view as the first page in the new layout.
  };

  return (
    <div className="min-h-[70vh] overflow-hidden bg-sandstone-50 px-4 py-14 sm:py-20">
      <motion.section
        className="mx-auto w-full max-w-6xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        aria-labelledby="climate-chronicles-title"
      >
        <header className="mx-auto max-w-3xl text-center">
          <p className="editorial-kicker mb-4">The club magazine · 2025–2026</p>
          <h1 id="climate-chronicles-title" className="font-heading text-4xl font-semibold tracking-tight text-charcoal-900 sm:text-5xl md:text-6xl">
            Climate Chronicles
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-charcoal-600 sm:text-lg">
            A year of ideas, stories, and action for a changing planet. Settle in, open the issue, and explore the work of the Cambrian Climate Club.
          </p>
        </header>

        {!checkedMagazine ? (
          <div className="mx-auto mt-12 flex min-h-[360px] max-w-5xl items-center justify-center rounded-3xl border border-sandstone-200 bg-white/70 px-6 text-center shadow-sm" aria-live="polite">
            <div><span className="text-4xl" aria-hidden="true">📖</span><p className="mt-4 font-heading text-xl font-semibold text-charcoal-900">Preparing your reading room…</p><p className="mt-2 text-sm text-charcoal-600">Checking the published magazine file.</p></div>
          </div>
        ) : magazineAvailable ? (
          <div className="mt-10 sm:mt-14">
            <div className="flex flex-col gap-5 rounded-2xl border border-sandstone-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-12 shrink-0 items-center justify-center rounded-md bg-primary text-2xl text-white shadow-md" aria-hidden="true">▤</div>
                <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-700">2025–2026 edition</p><h2 className="mt-1 font-heading text-xl font-semibold text-charcoal-900 sm:text-2xl">Your copy is ready</h2><p className="mt-1 text-sm leading-relaxed text-charcoal-600">Read online or keep the full publication as a PDF.</p></div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-primary-800 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" href={MAGAZINE_PDF_URL} download="climate-chronicle-2025-2026.pdf"><span aria-hidden="true">↓</span>Download the magazine</a>
                <a className="inline-flex min-h-12 items-center justify-center rounded-xl border border-sandstone-300 bg-white px-5 py-3 text-sm font-semibold text-charcoal-900 transition hover:bg-sandstone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" href={MAGAZINE_PDF_URL} target="_blank" rel="noreferrer">Open PDF separately</a>
              </div>
            </div>

            {!bookIsOpen ? (
              <motion.div className="relative mx-auto mt-9 max-w-5xl px-2 pb-5 pt-2 sm:mt-12 sm:px-8" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <div className="pointer-events-none absolute bottom-0 left-6 right-6 top-6 rounded-[2rem] bg-primary/10 blur-2xl sm:left-16 sm:right-16" aria-hidden="true" />
                <div className="relative mx-auto max-w-4xl overflow-hidden rounded-r-2xl rounded-l-md bg-primary shadow-2xl">
                  <div className="grid min-h-[430px] grid-cols-1 sm:min-h-[560px] sm:grid-cols-[12px_1fr]">
                    <div className="hidden bg-primary-950 sm:block" aria-hidden="true" />
                    <div className="relative flex flex-col items-center justify-center overflow-hidden bg-charcoal-950 p-3 sm:p-5">
                      <div className="pointer-events-none absolute inset-3 rounded-r-xl border border-white/15 sm:inset-5" aria-hidden="true" />
                      <img
                        src={MAGAZINE_COVER_URL}
                        alt="Climate Chronicles — official 2025–2026 magazine cover"
                        className="relative z-0 max-h-[430px] w-auto max-w-full rounded-sm object-contain shadow-2xl sm:max-h-[490px]"
                        onError={() => setReaderError(true)}
                      />
                      <button className="relative z-10 mt-5 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary shadow-lg transition hover:-translate-y-0.5 hover:bg-sandstone-50 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary" onClick={() => { setReaderError(false); setBookIsOpen(true); }} type="button">Open the magazine <span aria-hidden="true">→</span></button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.section className="mt-8 sm:mt-10" initial={{ opacity: 0, y: 18, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.5 }} aria-label="Climate Chronicles page-flip reader">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3 px-1">
                  <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-700">The reading room</p><p className="mt-1 text-sm text-charcoal-600">Your magazine opens to the original PDF pages.</p></div>
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="inline-flex rounded-xl border border-sandstone-300 bg-white p-1" role="group" aria-label="Reading layout">
                      <button className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${readingMode === 'spread' ? 'bg-primary text-white' : 'text-charcoal-700 hover:bg-sandstone-100'}`} onClick={() => changeReadingMode('spread')} aria-pressed={readingMode === 'spread'} type="button">2 pages</button>
                      <button className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${readingMode === 'single' ? 'bg-primary text-white' : 'text-charcoal-700 hover:bg-sandstone-100'}`} onClick={() => changeReadingMode('single')} aria-pressed={readingMode === 'single'} type="button">1 page</button>
                    </div>
                    <button className="inline-flex min-h-10 items-center justify-center rounded-lg border border-sandstone-300 bg-white px-4 py-2 text-sm font-semibold text-charcoal-900 transition hover:bg-sandstone-100" onClick={() => setBookIsOpen(false)} type="button">‹ Close book</button>
                  </div>
                </div>

                {readerError ? (
                  <div className="rounded-2xl border border-sandstone-200 bg-white p-6 text-center shadow-sm">
                    <p className="font-semibold text-charcoal-900">The interactive reader could not load.</p>
                    <p className="mt-2 text-sm text-charcoal-600">You can still read the original PDF in your browser.</p>
                    <a className="mt-4 inline-flex rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white" href={MAGAZINE_PDF_URL} target="_blank" rel="noreferrer">Open the PDF</a>
                  </div>
                ) : !pdf ? (
                  <div className="flex min-h-[420px] items-center justify-center rounded-2xl border border-sandstone-200 bg-white text-center text-charcoal-600 shadow-sm" role="status">Preparing the pages…</div>
                ) : (
                  <div className="mx-auto max-w-6xl">
                    <div className="rounded-2xl bg-[#d9d2c4] p-3 shadow-[0_24px_70px_-28px_rgba(11,27,43,0.55)] sm:rounded-3xl sm:p-6">
                      <div className={`relative mx-auto flex w-full ${readingMode === 'spread' ? 'max-w-[1120px] items-stretch' : 'max-w-[680px] justify-center'}`} style={{ perspective: '1800px' }}>
                        <div className={`relative min-w-0 flex-1 overflow-hidden bg-white ${readingMode === 'spread' ? 'rounded-l-lg shadow-[-8px_0_18px_rgba(0,0,0,0.12)]' : 'rounded-l-lg'}`} style={{ aspectRatio: readingMode === 'spread' ? '0.707' : '0.707', transform: isFlipping ? `rotateY(${flipDirection === 'next' ? '2deg' : '-2deg'})` : 'none', transition: 'transform 420ms ease' }}>
                          <canvas ref={leftCanvas} className="absolute inset-0 h-full w-full object-contain" aria-label={`Page ${pageNumber}`} />
                          <div className="pointer-events-none absolute inset-y-0 right-0 w-3 bg-gradient-to-l from-black/10 to-transparent" aria-hidden="true" />
                        </div>
                        {readingMode === 'spread' && (
                          <>
                            <div className="z-10 w-2 shrink-0 bg-gradient-to-r from-black/20 via-[#eee8dc] to-black/20 shadow-[0_0_10px_rgba(0,0,0,0.18)]" aria-hidden="true" />
                            <div className="relative min-w-0 flex-1 overflow-hidden rounded-r-lg bg-white shadow-[8px_0_18px_rgba(0,0,0,0.12)]" style={{ aspectRatio: '0.707' }}>
                              <canvas ref={rightCanvas} className="absolute inset-0 h-full w-full object-contain" aria-label={`Page ${Math.min(pageNumber + 1, pdf.numPages)}`} />
                              <div className="pointer-events-none absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/10 to-transparent" aria-hidden="true" />
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="mt-5 flex items-center justify-between gap-3">
                      <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-sandstone-300 bg-white px-4 py-3 text-sm font-semibold text-charcoal-900 transition hover:bg-sandstone-100 disabled:cursor-not-allowed disabled:opacity-40" onClick={() => turnPage('previous')} disabled={pageNumber <= 1 || isFlipping} type="button">← Previous</button>
                      <p className="text-center text-sm font-medium tabular-nums text-charcoal-700" aria-live="polite">{readingMode === 'spread' && lastVisiblePage !== pageNumber ? `Pages ${pageNumber}–${lastVisiblePage}` : `Page ${pageNumber}`} of {pdf.numPages}</p>
                      <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-800 disabled:cursor-not-allowed disabled:opacity-40" onClick={() => turnPage('next')} disabled={pageNumber + pageStep > pdf.numPages || isFlipping} type="button">Next {readingMode === 'spread' ? 'spread' : 'page'} →</button>
                    </div>
                    <p className="mt-4 text-center text-xs leading-relaxed text-charcoal-500">The original PDF is preserved. Use Download or Open PDF separately for printing, searching, and offline reading.</p>
                  </div>
                )}
              </motion.section>
            )}
          </div>
        ) : (
          <div className="mx-auto mt-12 flex min-h-[340px] max-w-5xl flex-col items-center justify-center rounded-3xl border border-sandstone-200 bg-white px-6 py-16 text-center shadow-sm sm:min-h-[420px]" aria-live="polite">
            <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-sandstone-100 text-3xl" aria-hidden="true">📖</span>
            <h2 className="font-heading text-2xl font-semibold text-charcoal-900">This reading room is taking a moment.</h2>
            <p className="mt-3 max-w-lg leading-relaxed text-charcoal-600">The magazine file could not be reached. Please try again in a moment or reopen this page. The original publication remains unchanged.</p>
            <button className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-800" onClick={() => window.location.reload()} type="button">Try again</button>
          </div>
        )}

        <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-charcoal-500">The publication stays as its original PDF. You can download a copy at any time, and future editions can be updated independently of the website.</p>
      </motion.section>
    </div>
  );
};

export default ClimateChroniclesPage;
