
import React, { useState, useRef, memo } from 'react';
import { motion } from 'framer-motion';
import type { Gallery } from '../types/types';
import Lightbox from './Lightbox';
import SectionHeader from './SectionHeader';

interface VideoModalProps {
  videoUrl: string;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ videoUrl, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75 transition-colors"
          aria-label="Close video"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <video
          ref={videoRef}
          src={videoUrl}
          className="w-full h-full object-contain"
          controls
          autoPlay
          playsInline
        />
      </div>
    </div>
  );
};

interface MediaItem {
  url: string;
  type: 'image' | 'video';
}

interface ImageGalleryProps {
  galleries: Gallery[];
}

const Carousel: React.FC<{ mediaItems: MediaItem[]; onMediaClick: (media: string, type: 'image' | 'video') => void; title: string }> = memo(({ mediaItems, onMediaClick, title }) => {
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
        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 bg-white p-3 rounded-full shadow-elevated text-primary-700 opacity-0 group-hover:opacity-100 transition-all duration-300 disabled:opacity-0 z-20 hover:bg-sandstone-100 hover:scale-110 focus:opacity-100"
        aria-label="Scroll left"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
      </button>
      <button 
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 bg-white p-3 rounded-full shadow-elevated text-primary-700 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 hover:bg-sandstone-100 hover:scale-110 focus:opacity-100"
        aria-label="Scroll right"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
      </button>

      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 py-8 px-4 snap-x snap-mandatory scrollbar-hide"
      >
        {mediaItems.map((item, index) => (
          <motion.div
            key={`${item.url}-${index}`}
            className={`flex-shrink-0 w-72 md:w-96 snap-center relative aspect-video cursor-pointer overflow-hidden rounded-xl shadow-elevated bg-sandstone-100 ${item.type === 'video' ? 'video-container' : ''}`}
            whileHover={{ scale: 1.03, y: -5 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
            onClick={() => onMediaClick(item.url, item.type)}
          >
            {item.type === 'image' ? (
              <img
                  src={item.url}
                  alt={`${title} media ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
              />
            ) : (
              <video
                src={item.url}
                className="w-full h-full object-cover"
                muted
                playsInline
                preload="metadata"
              />
            )}
            <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                 <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="bg-white/90 p-3 rounded-full shadow-elevated"
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
  const [videoModalUrl, setVideoModalUrl] = useState<string | null>(null);

  // Function to get all video files from public/video/ and public/Video/ directories
  const getAllVideoFiles = (): string[] => {
    return [
      '/video/achievement_2023.mp4',
      '/video/achievement_2024.mp4',
      '/video/achievement_2025.mp4',
      '/Video/Video 1.mp4',
      '/Video/Video 10.mp4',
      '/Video/Video 12.mp4',
      '/Video/Video 13.mp4',
      '/Video/Video 14.mp4',
      '/Video/Video 15.mp4',
      '/Video/Video 16.mp4',
      '/Video/Video 17.mp4',
      '/Video/Video 18.mp4',
      '/Video/Video 19.mp4',
      '/Video/Video 20.mp4',
      '/Video/Video 21 (1).mp4',
      '/Video/Video 3.mp4',
      '/Video/Video 4.mp4',
      '/Video/Video 5.mp4',
      '/Video/Video 6.mp4',
      '/Video/Video 8.mp4',
      '/Video/Video 9.mp4',
      '/Video/video 11.mp4',
      '/Video/video 7.mp4'
    ];
  };

  // Create a combined gallery with videos and existing galleries
  const getAllGalleries = (): Gallery[] => {
    // Create a video gallery
    const videoGallery: Gallery = {
      title: 'Video Archive',
      images: getAllVideoFiles()
    };
    
    // Return the video gallery first, then all the existing image galleries
    return [videoGallery, ...galleries];
  };

  // Function to determine if a URL is a video or image
  const getMediaType = (url: string): 'image' | 'video' => {
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.wmv'];
    const extension = url.toLowerCase().substring(url.lastIndexOf('.'));
    return videoExtensions.includes(extension) ? 'video' : 'image';
  };

  // Convert gallery images to media items
  const convertToMediaItems = (gallery: Gallery): MediaItem[] => {
    return gallery.images.map(url => ({
      url,
      type: getMediaType(url)
    }));
  };

  // Handle media click - open lightbox for images and modal for videos
  const handleMediaClick = (url: string, type: 'image' | 'video') => {
    if (type === 'image') {
      setLightboxImage(url);
    } else if (type === 'video') {
      setVideoModalUrl(url);
    }
  };

  const closeVideoModal = () => {
    setVideoModalUrl(null);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeader title="Image and Video Archive" subtitle="Explore the memorable moments from our events and initiatives." />
      <div className="space-y-20">
        {getAllGalleries().map((gallery, index) => (
          <motion.section 
            key={gallery.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="flex items-center mb-6 px-2">
                <div className="h-8 w-1.5 bg-coral-500 rounded-full mr-3"></div>
                <h3 className="text-2xl font-semibold text-charcoal-900">{gallery.title}</h3>
            </div>
            <Carousel mediaItems={convertToMediaItems(gallery)} onMediaClick={handleMediaClick} title={gallery.title} />
          </motion.section>
        ))}
      </div>
      {lightboxImage && <Lightbox imageUrl={lightboxImage} onClose={() => setLightboxImage(null)} />}
      {videoModalUrl && <VideoModal videoUrl={videoModalUrl} onClose={closeVideoModal} />}
    </div>
  );
});

export default ImageGallery;
