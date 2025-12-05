import React from 'react';
import { motion } from 'framer-motion';
import { Image } from 'lucide-react';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group"
    >
      <div className="relative h-48 overflow-hidden">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/400x300/059669/FFFFFF?text=Project';
            }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center">
            <Image className="h-12 w-12 text-green-600" />
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
        <p className="text-gray-600">
          {project.title === 'Campus Cleanliness Drive' && 
            'Our ongoing initiative to maintain a clean and healthy environment across the school campus.'}
        {project.title === 'Campus Greening Initiative' && 
            'Planting trees and creating green spaces to enhance the environmental sustainability of our campus.'}
        {project.title === 'Climate Action E-Magazine' && 
            'A digital publication highlighting environmental issues and promoting climate awareness among students.'}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;