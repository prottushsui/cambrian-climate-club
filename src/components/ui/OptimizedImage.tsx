import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholder?: string;
  className?: string;
  width?: string | number;
  height?: string | number;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  placeholder,
  className = '',
  width,
  height,
  objectFit = 'cover',
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  // Reset loading state when src changes
  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {isLoading && placeholder && (
        <div 
          className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"
          style={{ backgroundImage: `url(${placeholder})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
      )}
      
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full object-${objectFit} transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${hasError ? 'hidden' : ''}`}
        loading="lazy"
        {...props}
      />
      
      {hasError && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800"
          role="img"
          aria-label="Image unavailable"
        >
          <div className="text-center p-2">
            <div className="mx-auto bg-gray-200 dark:bg-gray-700 border-2 border-dashed rounded-xl w-16 h-16 mb-2" />
            <span className="text-gray-500 dark:text-gray-400 text-sm">Image unavailable</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;