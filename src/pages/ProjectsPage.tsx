
import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/content';
import SectionHeader from '../components/SectionHeader';

const ProjectsPage: React.FC = () => {
  return (
    <div className="bg-cloud">
      {/* Header Section */}
      <section className="container-premium py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            title="Our Projects"
            subtitle="Environmental initiatives driving real impact on campus and beyond."
          />
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="container-premium pb-24">
        <motion.div 
          className="grid-responsive"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="card-hover overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-ocean mb-3">{project.title}</h3>
                <p className="text-text-muted leading-relaxed mb-6">{project.description}</p>
                
                <motion.button
                  className="text-ocean font-semibold hover:text-teal transition-colors flex items-center gap-2"
                  whileHover={{ gap: 8 }}
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default ProjectsPage;
