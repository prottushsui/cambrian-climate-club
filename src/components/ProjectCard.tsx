
import React, { memo } from 'react';
import type { Project } from '../types/types';
import OptimizedImage from './ui/OptimizedImage';

interface ProjectCardProps {
  project: Project;
  isFeatured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = memo(({ project }) => {
  return (
    <div 
      className="bg-text-light rounded-lg border border-sand-300 shadow-base overflow-hidden hover:shadow-lg transition-shadow"
      role="listitem"
      aria-label={project.title}
    >
      <div className="relative overflow-hidden h-48">
        <OptimizedImage 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover" 
          placeholder="/images/homepagepicture1.jpg"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-primary-600 mb-2">{project.title}</h3>
        {project.description && <p className="text-text-secondary text-sm leading-relaxed">{project.description}</p>}
      </div>
    </div>
  );
});

export default ProjectCard;
