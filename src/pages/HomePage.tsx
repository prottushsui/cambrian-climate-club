
import React, { useState, useEffect, useRef, memo } from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants, useInView } from 'framer-motion';
import { useData } from '@/hooks/useData';
import ProjectCard from '@/components/ProjectCard';
import SectionHeader from '@/components/SectionHeader';
import OptimizedImage from '@/components/ui/OptimizedImage';
import HeroSection from '@/components/HeroSection';
import { 
  fadeInUpVariants, 
  scaleInVariants, 
  slideInLeftVariants, 
  slideInRightVariants, 
  containerVariants, 
  itemVariants,
  statItemVariants 
} from '@/constants/animation';

// Static counter component - no animation
const StaticCounter: React.FC<{ value: number | string; 'data-testid'?: string }> = ({ value, 'data-testid': testId }) => {
    return <span data-testid={testId}>{value}</span>;
};

const StatCard: React.FC<{ value: React.ReactNode; label: string; 'data-testid'?: string }> = ({ value, label, 'data-testid': testId }) => (
    <motion.div 
        className="card-hover p-8 text-center"
        variants={statItemVariants}
        whileHover={{ 
            y: -4, 
            scale: 1.03,
        }}
        whileTap={{ scale: 0.98 }}
        data-testid={testId}
        role="listitem"
        aria-label={`${label}: ${typeof value === 'number' ? value : label}`}
    >
        <p className="text-4xl md:text-5xl font-bold text-ocean mb-3" aria-live="polite">{value}</p>
        <p className="text-text-muted font-medium">{label}</p>
    </motion.div>
);

/**
 * HomePage component - Main landing page for Cambrian Climate Club
 * 
 * @component
 * @example
 * return (
 *   <HomePage />
 * )
 */
const HomePage: React.FC = () => {
  const { projects, loading, error } = useData();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-cloud" data-testid="home-loading">
        <div 
          className="animate-spin rounded-full h-12 w-12 border-4 border-sand border-t-ocean"
          role="status"
          aria-label="Loading homepage content"
        ></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-cloud" data-testid="home-error">
        <div className="text-coral text-center">
          <p role="alert">Error loading data: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 btn btn-primary"
            aria-label="Retry loading data"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cloud" data-testid="homepage-container">
      <HeroSection />
      
      {/* Featured Initiatives Section */}
      <section 
        className="container-premium py-24" 
        aria-labelledby="featured-initiatives-heading"
        data-testid="featured-initiatives-section"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Featured Initiatives</h2>
          <p className="section-subtitle">Our core projects making a tangible impact on our campus and community.</p>
        </motion.div>

        <motion.div 
            className="grid-responsive mt-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            data-testid="projects-grid"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="card-hover overflow-hidden"
              data-testid={`project-card-${index}`}
              role="listitem"
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-cloud">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-text-muted leading-relaxed">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Quick Stats Section */}
      <section 
        className="bg-white border-t border-sand/40 py-20" 
        aria-labelledby="stats-heading"
        data-testid="stats-section"
      >
        <div className="container-premium">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="section-header text-center mb-16"
            >
              <h2 className="section-title">Our Journey in Numbers</h2>
            </motion.div>

            <motion.div 
                className="grid grid-cols-2 lg:grid-cols-4 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                role="list"
                data-testid="stats-grid"
            >
                <StatCard value={<StaticCounter value="2023" data-testid="counter-founded" />} label="Founded" data-testid="stat-founded" />
                <StatCard value={<StaticCounter value="37+" data-testid="counter-members" />} label="Active Members" data-testid="stat-members" />
                <StatCard value={<StaticCounter value="100+" data-testid="counter-trees" />} label="Trees Planted" data-testid="stat-trees" />
                <StatCard value={<StaticCounter value="5" data-testid="counter-awards" />} label="Awards Won" data-testid="stat-awards" />
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
