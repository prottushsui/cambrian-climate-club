
import React, { memo } from 'react';
import { motion, Variants } from 'framer-motion';
import type { Project } from '../types/types';
import { cardHoverVariants } from '../constants/animation';
import OptimizedImage from './ui/OptimizedImage';

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

/**
 * ProjectCard component - Displays a project with title, description, and image
 * 
 * @component
 * @param {Project} project - The project object containing title and imageUrl
 * @param {boolean} [isFeatured=false] - Whether this is a featured project
 * @example
 * return (
 *   <ProjectCard project={project} isFeatured={true} />
 * )
 */
const ProjectCard: React.FC<ProjectCardProps> = memo(({ project, isFeatured = false }) => {
  return (
    <motion.div 
        className="apple-card glass-card rounded-2xl overflow-hidden shadow-lg border border-white/20"
        whileHover={{ y: -8, scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        data-testid={`project-card-${project.title.replace(/\s+/g, '-').toLowerCase()}`}
        role="listitem"
        aria-label={project.title}
    >
      <div className="relative overflow-hidden">
        <OptimizedImage 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-44 object-cover transition-transform duration-700" 
          placeholder="/images/homepagepicture1.jpg"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
        </div>
      </div>
      <div className="p-4">
        {project.description && <p className="text-slate-600 text-sm">{project.description}</p>}
      </div>
    </motion.div>
  );
});

export default ProjectCard;
