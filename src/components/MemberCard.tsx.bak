
import React, { memo, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import type { Member } from '../types/types';
import OptimizedImage from './ui/OptimizedImage';
import SkeletonLoader from './ui/SkeletonLoader';

interface MemberCardProps {
  member: Member;
  isLoading?: boolean;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15, mass: 1 }
  }
};

const MemberCard: React.FC<MemberCardProps> = memo(({ member, isLoading = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  if (isLoading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden text-center h-full flex flex-col">
        <div className="relative h-64 bg-gray-200 dark:bg-gray-700 overflow-hidden flex items-center justify-center">
          <SkeletonLoader className="w-full h-full" />
        </div>
        <div className="p-6 flex-grow flex flex-col justify-center">
          <SkeletonLoader className="h-6 w-3/4 mx-auto mb-2" />
          <SkeletonLoader className="h-4 w-1/2 mx-auto mb-2" />
          <SkeletonLoader className="h-4 w-2/3 mx-auto" />
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden text-center h-full flex flex-col transform-gpu"
      variants={itemVariants}
      whileHover={{ 
        y: -12, 
        scale: 1.02,
        boxShadow: "0 25px 30px -5px rgb(0 0 0 / 0.15), 0 10px 10px -6px rgb(0 0 0 / 0.1)"
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      role="article"
      aria-labelledby={`member-name-${member.name.replace(/\s+/g, '-')}`}
    >
      <div className="relative h-64 bg-slate-100 dark:bg-gray-700 overflow-hidden flex items-center justify-center">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-gray-200 dark:bg-gray-600 rounded animate-pulse w-full h-full" />
          </div>
        )}
        <OptimizedImage
          src={member.imageUrl}
          alt={member.name}
          className={`w-full h-full object-contain ${imageLoaded ? 'opacity-100' : 'opacity-0'} ${imageError ? 'hidden' : ''}`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          loading="lazy"
          priority={false}
        />
        {imageError && (
          <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
            <div className="text-center p-4">
              <div className="mx-auto bg-gray-200 dark:bg-gray-600 border-2 border-dashed rounded-xl w-16 h-16 mb-2" />
              <p className="text-sm">Image unavailable</p>
            </div>
          </div>
        )}
        {member.specialRecognition && (
            <motion.div 
              className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full z-10 shadow-md"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              aria-label="Special recognition badge"
            >
                Special Recognition
            </motion.div>
        )}
      </div>
      <div className="p-6 flex-grow flex flex-col justify-center relative z-10 bg-white dark:bg-gray-800">
        <h3 
          id={`member-name-${member.id.replace(/\s+/g, '-')}`} 
          className="text-xl font-bold text-primary-900 dark:text-white"
        >
          {member.name}
        </h3>
        <p className="text-primary-700 dark:text-primary-300 font-semibold mt-1">
          {member.role} {member.term && `(${member.term})`}
        </p>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">{member.id || ''}</p>
        <p className="text-slate-500 dark:text-slate-400 text-sm">{member.classInfo || ''}{member.classInfo && member.campus ? ', ' : ''}{member.campus || ''}</p>
      </div>
    </motion.div>
  );
});

export default MemberCard;
