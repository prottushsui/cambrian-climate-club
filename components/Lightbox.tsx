
import React, { useState, useEffect } from 'react';

interface LightboxProps {
  imageUrl: string;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ imageUrl, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); // Animate in
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(onClose, 300); // match transition duration
  };

  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-300 ${show ? 'bg-opacity-80' : 'bg-opacity-0'}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
    >
      <div 
        className={`relative max-w-4xl max-h-[90vh] w-full p-4 transition-all duration-300 ease-out ${show ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} alt="Enlarged view" className="w-full h-full object-contain rounded-lg shadow-2xl" />
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 md:top-4 md:right-4 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-transform hover:scale-110"
          aria-label="Close lightbox"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
