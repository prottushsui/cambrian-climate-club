import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MAGAZINE_PDF_URL = '/Climate%20Chronicle/Climate%20Chronicle%2025-26.pdf';
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

const ClimateChroniclesPage = () => {
  const [magazineAvailable, setMagazineAvailable] = useState(false);
  const [checkedMagazine, setCheckedMagazine] = useState(false);
  const [bookIsOpen, setBookIsOpen] = useState(false);
  const [pdf, setPdf] = useState<PdfDocument | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'previous'>('next');
  const [readerError, setReaderError] = useState(false);
  const currentCanvas = useRef<HTMLCanvasElement>(null);
  const nextCanvas = useRef<HTMLCanvasElement>(null);

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
    if (!pdf || !currentCanvas.current || !nextCanvas.current) return;
    let cancelled = false;
    const draw = async (number: number, canvas: HTMLCanvasElement) => {
      try {
        const page = await pdf.getPage(Math.min(Math.max(number, 1), pdf.numPages));
        if (cancelled) return;
        const viewport = page.getViewport({ scale: 1.35 });
        const context = canvas.getContext('2d');
        if (!context) return;
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        await page.render({ canvasContext: context, viewport }).promise;
      } catch {
        if (!cancelled) setReaderError(true);
      }
    };
    void draw(pageNumber, currentCanvas.current);
    void draw(Math.min(pageNumber + 1, pdf.numPages), nextCanvas.current);
    return () => {
      cancelled = true;
    };
  }, [pdf, pageNumber]);

  const turnPage = (direction: 'next' | 'previous') => {
    if (!pdf || isFlipping) return;
    const target = direction === 'next' ? pageNumber + 1 : pageNumber - 1;
    if (target < 1 || target > pdf.numPages) return;
    setFlipDirection(direction);
    setIsFlipping(true);
    window.setTimeout(() => {
      setPageNumber(target);
      setIsFlipping(false);
    }, 620);
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
                <div className="relative mx-auto grid min-h-[390px] max-w-4xl grid-cols-1 overflow-hidden rounded-r-2xl rounded-l-md bg-primary shadow-2xl sm:min-h-[490px] sm:grid-cols-[12px_1fr]">
                  <div className="hidden bg-primary-950 sm:block" aria-hidden="true" />
                  <div className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-primary-800 via-primary to-primary-950 px-7 py-12 text-center text-white sm:px-14">
                    <div className="pointer-events-none absolute inset-3 rounded-r-xl border border-white/15 sm:inset-5" aria-hidden="true" />
                    <p className="relative text-xs font-semibold uppercase tracking-[0.28em] text-white/70">Cambrian Climate Club presents</p>
                    <div className="relative my-7 flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/5 text-4xl shadow-inner sm:my-9 sm:h-24 sm:w-24" aria-hidden="true">✳</div>
                    <h2 className="relative max-w-xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">Climate<br />Chronicles</h2>
                    <div className="relative my-6 h-px w-20 bg-white/50" aria-hidden="true" />
                    <p className="relative text-sm uppercase tracking-[0.22em] text-white/75">The 2025–2026 edition</p>
                    <p className="relative mt-3 max-w-md text-sm leading-relaxed text-white/75 sm:text-base">Stories from our community. Ideas for our future. A planet worth turning the page for.</p>
                    <button className="relative mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary shadow-lg transition hover:-translate-y-0.5 hover:bg-sandstone-50 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary" onClick={() => setBookIsOpen(true)} type="button">Open the magazine <span aria-hidden="true">→</span></button>
                    <p className="relative mt-4 text-xs text-white/55">A proper page-turning reader awaits inside.</p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.section className="mt-8 sm:mt-10" initial={{ opacity: 0, y: 18, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.5 }} aria-label="Climate Chronicles page-flip reader">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3 px-1">
                  <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-700">The reading room</p><p className="mt-1 text-sm text-charcoal-600">Turn the pages with the controls below.</p></div>
                  <button className="inline-flex min-h-10 items-center justify-center rounded-lg border border-sandstone-300 bg-white px-4 py-2 text-sm font-semibold text-charcoal-900 transition hover:bg-sandstone-100" onClick={() => setBookIsOpen(false)} type="button">‹ Close book</button>
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
                  <div className="mx-auto max-w-4xl">
                    <div className="rounded-2xl bg-[#d9d2c4] p-3 shadow-[0_24px_70px_-28px_rgba(11,27,43,0.55)] sm:rounded-3xl sm:p-6">
                      <div className="relative mx-auto w-full max-w-[680px]" style={{ perspective: '1800px' }}>
                        <div className="relative overflow-hidden rounded-r-lg bg-white shadow-2xl" style={{ aspectRatio: '0.707', background: '#fff' }}>
                          <canvas ref={nextCanvas} className="absolute inset-0 h-full w-full object-contain" aria-label={`Page ${Math.min(pageNumber + 1, pdf.numPages)}`} />
                          <canvas
                            ref={currentCanvas}
                            className="absolute inset-0 h-full w-full object-contain"
                            aria-label={`Page ${pageNumber}`}
                            style={{
                              transform: isFlipping ? `rotateY(${flipDirection === 'next' ? '-180deg' : '180deg'})` : 'rotateY(0deg)',
                              transformOrigin: flipDirection === 'next' ? 'left center' : 'right center',
                              transformStyle: 'preserve-3d',
                              backfaceVisibility: 'hidden',
                              transition: isFlipping ? 'transform 620ms cubic-bezier(0.2, 0.7, 0.2, 1)' : 'none',
                              boxShadow: isFlipping ? '0 4px 22px rgba(0,0,0,0.22)' : 'none',
                            }}
                          />
                          <div className="pointer-events-none absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/10 to-transparent" aria-hidden="true" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 flex items-center justify-between gap-3">
                      <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-sandstone-300 bg-white px-4 py-3 text-sm font-semibold text-charcoal-900 transition hover:bg-sandstone-100 disabled:cursor-not-allowed disabled:opacity-40" onClick={() => turnPage('previous')} disabled={pageNumber <= 1 || isFlipping} type="button">← Previous</button>
                      <p className="text-sm font-medium tabular-nums text-charcoal-700" aria-live="polite">Page {pageNumber} of {pdf.numPages}</p>
                      <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-800 disabled:cursor-not-allowed disabled:opacity-40" onClick={() => turnPage('next')} disabled={pageNumber >= pdf.numPages || isFlipping} type="button">Next page →</button>
                    </div>
                    <p className="mt-4 text-center text-xs leading-relaxed text-charcoal-500">Your original PDF is preserved. Use Download or Open PDF separately for printing, searching, and offline reading.</p>
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
