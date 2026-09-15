import { memo, useEffect, useRef, useState } from 'react';

interface LightboxProps {
  imageUrl: string;
  onClose: () => void;
}

const Lightbox = memo(({ imageUrl, onClose }: LightboxProps) => {
  const [visible, setVisible] = useState(false);
  const closeTimerRef = useRef<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previousActiveElementRef.current =
      document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    setVisible(true);
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current);
      }
      previousActiveElementRef.current?.focus();
    };
  }, []);

  const handleClose = () => {
    setVisible(false);
    closeTimerRef.current = window.setTimeout(onClose, 220);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-200 ${visible ? 'bg-opacity-80' : 'bg-opacity-0'}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
    >
      <div
        className={`relative max-w-4xl max-h-[90vh] w-full p-4 transition-all duration-200 ease-out ${visible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={event => event.stopPropagation()}
      >
        <img
          src={imageUrl}
          alt="Enlarged view"
          className="w-full h-full object-contain rounded-lg shadow-2xl"
        />
        <button
          ref={closeButtonRef}
          type="button"
          onClick={handleClose}
          className="absolute -top-2 -right-2 md:top-4 md:right-4 text-white text-3xl font-bold bg-black bg-opacity-60 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-transform hover:scale-110"
          aria-label="Close image preview"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
});

Lightbox.displayName = 'Lightbox';

export default Lightbox;
