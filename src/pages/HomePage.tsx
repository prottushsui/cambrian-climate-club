
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
  itemVariants
} from '@/constants/animation';

// Static counter component - no animation
const StaticCounter: React.FC<{ value: number | string; 'data-testid'?: string }> = ({ value, 'data-testid': testId }) => {
    return <span data-testid={testId}>{value}</span>;
};

const StatCard: React.FC<{ value: React.ReactNode; label: string; 'data-testid'?: string }> = ({ value, label, 'data-testid': testId }) => (
    <motion.div 
        className="bg-white/80 backdrop-blur-xl p-6 rounded-xl text-center shadow-sm border border-white/20 transition-all duration-300"
        variants={itemVariants}
        whileHover={{ 
            y: -4, 
            scale: 1.02,
            boxShadow: "0 12px 24px rgba(0, 0, 0, 0.08)" 
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        data-testid={testId}
        role="listitem"
        aria-label={`${label}: ${typeof value === 'number' ? value : label}`}
    >
        <p className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2" aria-live="polite">{value}</p>
        <p className="text-slate-700 dark:text-slate-300 font-medium text-base">{label}</p>
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
  const { projects, members, loading, error } = useData();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-slate-50/60 dark:bg-slate-900/60" data-testid="home-loading">
        <div 
          className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"
          role="status"
          aria-label="Loading homepage content"
        ></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-slate-50/60 dark:bg-slate-900/60" data-testid="home-error">
        <div className="text-red-500 text-center">
          <p role="alert">Error loading data: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600"
            aria-label="Retry loading data"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50/60 dark:bg-slate-900/60" data-testid="homepage-container">
      <HeroSection />
      
      {/* Featured Initiatives Section */}
      <section 
        className="container mx-auto px-4 py-20" 
        aria-labelledby="featured-initiatives-heading"
        data-testid="featured-initiatives-section"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Featured Initiatives" subtitle="Our core projects making a tangible impact on our campus and community." />
          <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
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
                initial="hidden"
                animate="visible"
                className="bg-white rounded-2xl border border-border shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full"
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                data-testid={`project-card-${index}`}
                role="listitem"
              >
                <div className="relative overflow-hidden">
                  <OptimizedImage 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-48 object-cover transition-transform duration-500" 
                    placeholder="/images/homepagepicture1.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="p-5 flex-grow">
                  <p className="text-slate-700 dark:text-slate-300 text-base">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section 
        className="bg-gradient-to-br from-slate-50 via-emerald-50 to-blue-50 py-20 dark:from-slate-900 dark:via-emerald-900 dark:to-blue-900" 
        aria-labelledby="stats-heading"
        data-testid="stats-section"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeader title="Our Journey in Numbers" />
            <motion.div 
                className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mt-16"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                role="list"
                data-testid="stats-grid"
            >
                <StatCard value={<StaticCounter value="2023" data-testid="counter-founded" />} label="Founded" data-testid="stat-founded" />
                <StatCard value={<StaticCounter value="37 Active Students" data-testid="counter-members" />} label="Active Members" data-testid="stat-members" />
                <StatCard value={<StaticCounter value="100+ Trees Planted" data-testid="counter-trees" />} label="Trees Planted" data-testid="stat-trees" />
                <StatCard value={<StaticCounter value="3 Awards" data-testid="counter-awards" />} label="Awards Won" data-testid="stat-awards" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
