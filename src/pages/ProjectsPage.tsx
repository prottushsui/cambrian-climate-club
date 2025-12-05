
import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/content';
import ProjectCard from '../components/ProjectCard';
import SectionHeader from '../components/SectionHeader';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const ProjectsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeader
        title="Our Projects"
        subtitle="Key initiatives we are working on to promote sustainability. More details coming soon!"
      />
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
