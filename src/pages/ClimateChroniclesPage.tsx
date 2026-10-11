import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MAGAZINE_PDF_URL = '/Climate%20Chronicle/Climate%20Chronicle%2025-26.pdf';
const MAGAZINE_COVER_URL =
  '/Climate%20Chronicle/Climate%20Chronicle%20Cover%20pages/CC%20Cover%20page.jpg';
const PDFJS_VERSION = '3.11.174';
const FLIP_DURATION = 720;

interface PdfViewport {
  width: number;
  height: number;
}

interface PdfPage {
  getViewport: (options: { scale: number }) => PdfViewport;
  render: (options: {
    canvasContext: CanvasRenderingContext2D;
    viewport: PdfViewport;
  }) => { promise: Promise<void>; cancel?: () => void };
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
type FlipDirection = 'next' | 'previous';

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
  const [flipArmed, setFlipArmed] = useState(false);
  const [flipDirection, setFlipDirection] = useState<FlipDirection>('next');
  const [readerError, setReaderError] = useState(false);
  const [softPrint, setSoftPrint] = useState(true);
  const leftCanvas = useRef<HTMLCanvasElement>(null);
  const rightCanvas = useRef<HTMLCanvasElement>(null);
  const flipFrontCanvas = useRef<HTMLCanvasElement>(null);
  const flipBackCanvas = useRef<HTMLCanvasElement>(null);
  const flipTimer = useRef<number | null>(null);
  const pageCache = useRef<Map<number, HTMLCanvasElement>>(new Map());

  const pageStep = readingMode === 'spread' ? 2 : 1;

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');
    const updateMode = (event: MediaQueryListEvent) => {
      setReadingMode(event.matches ? 'single' : 'spread');
      setIsFlipping(false);
      setFlipArmed(false);
      if (flipTimer.current !== null) {
        window.clearTimeout(flipTimer.current);
        flipTimer.current = null;
      }
    };
    media.addEventListener('change', updateMode);
    return () => media.removeEventListener('change', updateMode);
  }, []);

  useEffect(
    () => () => {
      if (flipTimer.current !== null) window.clearTimeout(flipTimer.current);
    },
    [],
  );

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
              if (window.pdfjsLib) {
                resolve();
              } else {
                existing.addEventListener('load', () => resolve(), { once: true });
                existing.addEventListener('error', () => reject(new Error('PDF reader failed to load')), { once: true });
              }
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
    if (!pdf || !bookIsOpen) return;
    let cancelled = false;
    const renderTasks: Array<{ cancel?: () => void }> = [];

    const drawPage = async (canvas: HTMLCanvasElement | null, number: number) => {
      if (!canvas) return;
      const context = canvas.getContext('2d');
      if (!context) return;

      if (number < 1 || number > pdf.numPages) {
        canvas.width = 1;
        canvas.height = 1;
        context.clearRect(0, 0, 1, 1);
        return;
      }

      try {
        const cachedPage = pageCache.current.get(number);
        if (cachedPage) {
          canvas.width = cachedPage.width;
          canvas.height = cachedPage.height;
          context.drawImage(cachedPage, 0, 0);
          return;
        }

        const page = await pdf.getPage(number);
        if (cancelled) return;
        const baseViewport = page.getViewport({ scale: 1 });
        // Render once at a crisp, capped resolution; reuse the bitmap on later turns.
        const pixelRatio = Math.min(1.35, Math.max(1, window.devicePixelRatio || 1));
        const viewport = page.getViewport({ scale: (820 / baseViewport.height) * pixelRatio });
        const pageCanvas = document.createElement('canvas');
        const pageContext = pageCanvas.getContext('2d');
        if (!pageContext) return;
        pageCanvas.width = viewport.width;
        pageCanvas.height = viewport.height;
        const renderTask = page.render({ canvasContext: pageContext, viewport });
        renderTasks.push(renderTask);
        await renderTask.promise;
        if (cancelled) return;

        pageCache.current.set(number, pageCanvas);
        // Keep a small rolling cache to avoid retaining every page of a large PDF.
        if (pageCache.current.size > 8) {
          const oldestPage = pageCache.current.keys().next().value;
          if (oldestPage !== undefined) pageCache.current.delete(oldestPage);
        }
        canvas.width = pageCanvas.width;
        canvas.height = pageCanvas.height;
        context.drawImage(pageCanvas, 0, 0);
      } catch {
        if (!cancelled) setReaderError(true);
      }
    };

    let leftPage = pageNumber;
    let rightPage = pageNumber + 1;
    let frontPage = pageNumber + 1;
    let backPage = pageNumber + 2;

    if (readingMode === 'spread' && isFlipping && flipDirection === 'next') {
      rightPage = pageNumber + 3;
    } else if (readingMode === 'spread' && isFlipping && flipDirection === 'previous') {
      leftPage = pageNumber - 2;
      frontPage = pageNumber;
      backPage = pageNumber - 1;
    } else if (readingMode === 'single' && isFlipping && flipDirection === 'next') {
      leftPage = pageNumber + 1;
      rightPage = pageNumber + 1;
      frontPage = pageNumber;
      backPage = pageNumber + 1;
    } else if (readingMode === 'single' && isFlipping && flipDirection === 'previous') {
      leftPage = pageNumber - 1;
      rightPage = pageNumber - 1;
      frontPage = pageNumber;
      backPage = pageNumber - 1;
    } else if (readingMode === 'single') {
      frontPage = pageNumber;
      backPage = pageNumber + 1;
    }

    void Promise.all([
      drawPage(leftCanvas.current, leftPage),
      drawPage(rightCanvas.current, rightPage),
      drawPage(flipFrontCanvas.current, frontPage),
      drawPage(flipBackCanvas.current, backPage),
    ]).then(() => {
      if (!cancelled && isFlipping) setFlipArmed(true);
    });

    return () => {
      cancelled = true;
      renderTasks.forEach(task => task.cancel?.());
    };
  }, [pdf, bookIsOpen, pageNumber, readingMode, isFlipping, flipDirection]);

  useEffect(() => {
    if (!isFlipping || !flipArmed) return;
    flipTimer.current = window.setTimeout(() => {
      setPageNumber(current => current + (flipDirection === 'next' ? pageStep : -pageStep));
      setIsFlipping(false);
      setFlipArmed(false);
      flipTimer.current = null;
    }, FLIP_DURATION);
    return () => {
      if (flipTimer.current !== null) {
        window.clearTimeout(flipTimer.current);
        flipTimer.current = null;
      }
    };
  }, [isFlipping, flipArmed, flipDirection, pageStep]);

  const lastVisiblePage = Math.min(
    pageNumber + (readingMode === 'spread' ? 1 : 0),
    pdf?.numPages ?? pageNumber,
  );

  const turnPage = (direction: FlipDirection) => {
    if (!pdf || isFlipping) return;
    const target = direction === 'next' ? pageNumber + pageStep : pageNumber - pageStep;
    if (target < 1 || target > pdf.numPages) return;

    setFlipDirection(direction);
    setFlipArmed(false);
    setIsFlipping(true);
  };

  const changeReadingMode = (mode: ReadingMode) => {
    if (mode === readingMode || isFlipping) return;
    setReadingMode(mode);
  };

  const flipStyle =
    readingMode === 'spread'
      ? {
          left: flipDirection === 'next' ? '50%' : '0%',
          width: '50%',
          transformOrigin: flipDirection === 'next' ? 'left center' : 'right center',
          transform: 'rotateY(0deg)',
        }
      : {
          left: '0%',
          width: '100%',
          transformOrigin: flipDirection === 'next' ? 'left center' : 'right center',
          transform: 'rotateY(0deg)',
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
              <motion.section className="mt-8 sm:mt-10" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} aria-label="Climate Chronicles page-flip reader">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3 px-1">
                  <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-700">The reading room</p><p className="mt-1 text-sm text-charcoal-600">Turn a page to keep reading the original issue.</p></div>
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="inline-flex rounded-xl border border-sandstone-300 bg-white p-1" role="group" aria-label="Reading layout">
                      <button className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${readingMode === 'spread' ? 'bg-primary text-white' : 'text-charcoal-700 hover:bg-sandstone-100'}`} onClick={() => changeReadingMode('spread')} aria-pressed={readingMode === 'spread'} type="button" disabled={isFlipping}>2 pages</button>
                      <button className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${readingMode === 'single' ? 'bg-primary text-white' : 'text-charcoal-700 hover:bg-sandstone-100'}`} onClick={() => changeReadingMode('single')} aria-pressed={readingMode === 'single'} type="button" disabled={isFlipping}>1 page</button>
                    </div>
                    <button
                      className={`inline-flex min-h-10 items-center justify-center rounded-lg border px-4 py-2 text-sm font-semibold transition ${softPrint ? 'border-primary/30 bg-primary/10 text-primary-800' : 'border-sandstone-300 bg-white text-charcoal-900 hover:bg-sandstone-100'}`}
                      onClick={() => setSoftPrint(value => !value)}
                      type="button"
                      aria-pressed={softPrint}
                      title="Apply a very subtle soft-print finish to the rendered pages"
                    >
                      Soft print {softPrint ? 'on' : 'off'}
                    </button>
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
                    <div className="rounded-2xl border border-[#c9c0af] bg-gradient-to-br from-[#e7e0d3] via-[#d7cebd] to-[#c7bda9] p-3 shadow-[0_28px_70px_-30px_rgba(11,27,43,0.6)] sm:rounded-3xl sm:p-6">
                      <style>{`@keyframes climate-page-turn-next { from { transform: rotateY(0deg); } to { transform: rotateY(-180deg); } } @keyframes climate-page-turn-previous { from { transform: rotateY(0deg); } to { transform: rotateY(180deg); } } @media (prefers-reduced-motion: reduce) { .climate-page-turn { animation-duration: 1ms !important; } }`}</style>
                      <div
                        className={`relative mx-auto overflow-hidden rounded-md ${readingMode === 'spread' ? 'max-w-[1120px]' : 'max-w-[680px]'}`}
                        style={{
                          aspectRatio: readingMode === 'spread' ? '1.414 / 1' : '0.707 / 1',
                          perspective: '2400px',
                          transformStyle: 'preserve-3d',
                          boxShadow: '0 12px 30px rgba(33, 28, 19, 0.22), 0 2px 5px rgba(33, 28, 19, 0.12)',
                        }}
                      >
                        <div className={`absolute inset-0 grid ${readingMode === 'spread' ? 'grid-cols-2' : 'grid-cols-1'}`}>
                          <div className="relative min-w-0 overflow-hidden bg-white" style={{ boxShadow: readingMode === 'spread' ? 'inset -12px 0 18px -18px rgba(0,0,0,.8)' : 'none' }}>
                            <canvas ref={leftCanvas} className="absolute inset-0 h-full w-full" style={{ filter: softPrint ? 'blur(0.18px) saturate(0.94) contrast(0.985)' : 'none' }} aria-label={`Page ${pageNumber}`} />
                          </div>
                          {readingMode === 'spread' && (
                            <div className="relative min-w-0 overflow-hidden bg-white" style={{ boxShadow: 'inset 12px 0 18px -18px rgba(0,0,0,.8)' }}>
                              <canvas ref={rightCanvas} className="absolute inset-0 h-full w-full" style={{ filter: softPrint ? 'blur(0.18px) saturate(0.94) contrast(0.985)' : 'none' }} aria-label={`Page ${Math.min(pageNumber + 1, pdf.numPages)}`} />
                            </div>
                          )}
                        </div>

                        {readingMode === 'spread' && (
                          <div className="pointer-events-none absolute inset-y-0 left-1/2 z-20 w-[10px] -translate-x-1/2" style={{ background: 'linear-gradient(90deg, rgba(0,0,0,.22), rgba(255,255,255,.48) 45%, rgba(0,0,0,.12))' }} aria-hidden="true" />
                        )}

                        {(
                          <div
                            className="climate-page-turn absolute inset-y-0 z-30 overflow-visible"
                            style={{
                              ...flipStyle,
                              transformStyle: 'preserve-3d',
                              opacity: isFlipping ? 1 : 0,
                              pointerEvents: isFlipping ? 'auto' : 'none',
                              animation: isFlipping && flipArmed
                                ? `${flipDirection === 'next' ? 'climate-page-turn-next' : 'climate-page-turn-previous'} ${FLIP_DURATION}ms cubic-bezier(0.52, 0.08, 0.18, 1) forwards`
                                : 'none',
                              willChange: isFlipping && flipArmed ? 'transform' : 'auto',
                              backfaceVisibility: 'hidden',
                            }}
                          >
                            <div className="absolute inset-0 overflow-hidden bg-white" style={{ backfaceVisibility: 'hidden' }}>
                              <canvas ref={flipFrontCanvas} className="absolute inset-0 h-full w-full" style={{ filter: softPrint ? 'blur(0.18px) saturate(0.94) contrast(0.985)' : 'none' }} aria-hidden="true" />
                              <div className="pointer-events-none absolute inset-0" style={{ background: flipDirection === 'next' ? 'linear-gradient(90deg, rgba(0,0,0,.22), transparent 26%, rgba(255,255,255,.04) 72%, rgba(0,0,0,.08))' : 'linear-gradient(270deg, rgba(0,0,0,.22), transparent 26%, rgba(255,255,255,.04) 72%, rgba(0,0,0,.08))' }} />
                            </div>
                            <div className="absolute inset-0 overflow-hidden bg-white" style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}>
                              <canvas ref={flipBackCanvas} className="absolute inset-0 h-full w-full" style={{ filter: softPrint ? 'blur(0.18px) saturate(0.94) contrast(0.985)' : 'none' }} aria-hidden="true" />
                              <div className="pointer-events-none absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(0,0,0,.15), transparent 22%, transparent 78%, rgba(0,0,0,.08))' }} />
                            </div>
                          </div>
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
