import React, { useState } from 'react';

interface VideoPlayerProps {
  src: string;
  title?: string;
  description?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, title, description }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadStart = () => {
    setIsLoading(true);
  };

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  return (
    <div className="mt-4">
      <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
            <span className="text-gray-500">Loading video...</span>
          </div>
        )}
        <video
          src={src}
          controls
          className="w-full h-full object-contain"
          preload="metadata"
          onLoadStart={handleLoadStart}
          onLoadedData={handleLoadedData}
          onError={() => setIsLoading(false)}
        />
      </div>
      {(title || description) && (
        <div className="mt-2">
          {title && <h4 className="font-medium text-gray-800">{title}</h4>}
          {description && <p className="text-sm text-gray-600">{description}</p>}
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;