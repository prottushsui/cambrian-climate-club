
import React, { memo } from 'react';
import { useData } from '@/hooks/useData';
import ProjectCard from '@/components/ProjectCard';
import SectionHeader from '@/components/SectionHeader';
import HeroSection from '@/components/HeroSection';

// Static counter component
const StatCard: React.FC<{ value: React.ReactNode; label: string }> = ({ value, label }) => (
  <div 
    className="bg-text-light p-6 rounded-lg text-center border border-sand-300 shadow-base"
    role="listitem"
  >
    <p className="text-3xl font-bold text-primary-600 mb-2">{value}</p>
    <p className="text-text-secondary font-medium text-sm">{label}</p>
  </div>
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
      <div className="flex justify-center items-center h-screen bg-sand-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-sand-100">
        <div className="text-center">
          <p className="text-accent-600">Error loading data: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-primary-600 text-text-light rounded-md hover:bg-primary-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-sand-100">
      <HeroSection />
      
      {/* Featured Projects Section */}
      <section 
        className="py-16"
        aria-labelledby="featured-projects-heading"
      >
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader title="Featured Projects" subtitle="Our core initiatives making impact on campus and community." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-text-light rounded-lg border border-sand-300 shadow-base overflow-hidden hover:shadow-lg transition-shadow"
                role="listitem"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-primary-600 mb-2">{project.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section 
        className="bg-primary-600 text-text-light py-16"
        aria-labelledby="stats-heading"
      >
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader title="Our Impact" subtitle="Measurable outcomes from our collective efforts" textColor="text-light" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <StatCard value="2023" label="Founded" />
            <StatCard value="37+" label="Active Members" />
            <StatCard value="100+" label="Trees Planted" />
            <StatCard value="3" label="Awards Won" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
