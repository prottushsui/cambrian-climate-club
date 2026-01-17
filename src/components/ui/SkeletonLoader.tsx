import React from 'react';

interface SkeletonLoaderProps {
  className?: string;
  count?: number;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
  className = 'h-4 w-full', 
  count = 1 
}) => {
  const skeletons = Array.from({ length: count }, (_, index) => (
    <div
      key={index}
      className={`bg-gray-200 dark:bg-gray-700 rounded animate-pulse ${className}`}
      role="status"
      aria-label="Loading content"
    />
  ));

  return <>{skeletons}</>;
};

export default SkeletonLoader;