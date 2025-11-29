
import React, { memo } from 'react';
import { motion, Variants } from 'framer-motion';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  isFeatured?: boolean;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

const ProjectCard: React.FC<ProjectCardProps> = memo(({ project, isFeatured = false }) => {
  return (
    <motion.div 
        className="relative group bg-white rounded-2xl shadow-lg overflow-hidden"
        variants={itemVariants}
        whileHover={{ 
            y: -10, 
            scale: 1.02,
            boxShadow: "0 25px 30px -5px rgb(0 0 0 / 0.15), 0 10px 10px -6px rgb(0 0 0 / 0.1)" 
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <div className="overflow-hidden h-64">
        <motion.img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover" 
            loading="lazy" 
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
            <motion.h3 
                className="text-white text-2xl font-bold drop-shadow-md"
                initial={{ y: 20, opacity: 0.9 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                {project.title}
            </motion.h3>
        </div>
      </div>
      {!isFeatured && (
         <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center backdrop-blur-sm z-10">
            <motion.span 
                className="text-white text-3xl font-bold border-4 border-white p-4 rounded-lg shadow-xl"
                initial={{ rotate: -12, scale: 0.9 }}
                whileHover={{ rotate: 0, scale: 1.1 }}
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
