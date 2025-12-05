
import React, { memo } from 'react';
import { motion, Variants } from 'framer-motion';
import type { Project } from '../types';
import { cardHoverVariants } from '../constants/animation';

interface ProjectCardProps {
  project: Project;
  isFeatured?: boolean;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 18 }
  }
};

const ProjectCard: React.FC<ProjectCardProps> = memo(({ project, isFeatured = false }) => {
  return (
    <motion.div 
        className="relative group bg-white rounded-2xl shadow-lg overflow-hidden apple-card"
        variants={cardHoverVariants}
        initial="rest"
        whileHover="hover"
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <div className="overflow-hidden h-64">
        <motion.img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover" 
            loading="lazy" 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
            <motion.h3 
                className="text-white text-2xl font-semibold drop-shadow-md apple-title"
                initial={{ y: 20, opacity: 0.9 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                {project.title}
            </motion.h3>
        </div>
      </div>
      {!isFeatured && (
         <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center backdrop-blur-sm z-10">
            <motion.span 
                className="text-white text-2xl font-semibold border-2 border-white/30 p-4 rounded-xl shadow-xl apple-title"
                initial={{ rotate: -8, scale: 0.95 }}
                whileHover={{ rotate: 0, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                Coming Soon
            </motion.span>
        </div>
      )}
    </motion.div>
  );
});

export default ProjectCard;
