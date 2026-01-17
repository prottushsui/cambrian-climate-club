
import React, { useState, useRef, memo } from 'react';
import { motion, Variants } from 'framer-motion';
import type { Gallery } from '../types/types';
import Lightbox from './Lightbox';
import SectionHeader from './SectionHeader';
import OptimizedImage from './ui/OptimizedImage';

interface ImageGalleryProps {
  galleries: Gallery[];
}

const Carousel: React.FC<{ images: string[]; onImageClick: (img: string) => void; title: string }> = memo(({ images, onImageClick, title }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      // Scroll by roughly one item width (accounting for some gap)
      const scrollAmount = direction === 'left' ? -320 : 320;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group">
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
      
      {/* Navigation Buttons */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 bg-white p-3 rounded-full shadow-xl text-primary-600 opacity-0 group-hover:opacity-100 transition-all duration-300 disabled:opacity-0 z-20 hover:bg-primary-50 hover:scale-110 focus:opacity-100"
        aria-label="Scroll left"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
      </button>
      <button 
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 bg-white p-3 rounded-full shadow-xl text-primary-600 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 hover:bg-primary-50 hover:scale-110 focus:opacity-100"
        aria-label="Scroll right"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
      </button>

      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 py-8 px-4 snap-x snap-mandatory scrollbar-hide"
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-72 md:w-96 snap-center relative aspect-video cursor-pointer overflow-hidden rounded-xl shadow-lg bg-slate-100"
            whileHover={{ scale: 1.03, y: -5 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
            onClick={() => onImageClick(image)}
          >
            <OptimizedImage
                src={image}
                alt={`${title} image ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                objectFit="cover"
            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                 <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="bg-white/90 p-3 rounded-full shadow-lg"
                 >
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                     </svg>
                 </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
});

const ImageGallery: React.FC<ImageGalleryProps> = memo(({ galleries }) => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeader title="Image Galleries" subtitle="Explore the memorable moments from our events and initiatives." />
      <div className="space-y-20">
        {galleries.map((gallery, index) => (
          <motion.section 
            key={gallery.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="flex items-center mb-6 px-2">
                <div className="h-8 w-1.5 bg-primary-500 rounded-full mr-3"></div>
                <h3 className="text-2xl font-bold text-slate-800">{gallery.title}</h3>
            </div>
            <Carousel images={gallery.images} onImageClick={setLightboxImage} title={gallery.title} />
          </motion.section>
        ))}
      </div>
      {lightboxImage && <Lightbox imageUrl={lightboxImage} onClose={() => setLightboxImage(null)} />}
    </div>
  );
});

export default ImageGallery;
