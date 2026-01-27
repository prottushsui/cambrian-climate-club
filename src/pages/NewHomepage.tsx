import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useData } from '@/hooks/useData';
import ProjectCard from '@/components/ProjectCard';
import SectionHeader from '@/components/SectionHeader';
import OptimizedImage from '@/components/ui/OptimizedImage';
import ShaderBackground from '@/components/hero/ShaderBackground';
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
        className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl text-center shadow-lg border border-white/20 apple-card glass-card dark:bg-slate-800/70 dark:border-slate-700/50"
        variants={statItemVariants}
        whileHover={{ 
            y: -10, 
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)" 
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        data-testid={testId}
        role="listitem"
        aria-label={`${label}: ${typeof value === 'number' ? value : label}`}
    >
        <p className="text-4xl font-bold text-emerald-600 dark:text-emerald-400" aria-live="polite">{value}</p>
        <p className="text-slate-600 dark:text-slate-300 mt-2 font-medium">{label}</p>
    </motion.div>
);

/**
 * New Homepage component with enhanced shader effects
 * 
 * @component
 * @example
 * return (
 *   <NewHomepage />
 * )
 */
const NewHomepage: React.FC = () => {
  const { projects, members, loading, error } = useData();
  
  // Refs for shader customization
  const [shaderParams, setShaderParams] = useState({
    uAmplitude: 0.5,
    uDensity: 2.0,
    uFrequency: 6.0,
    uSpeed: 0.5,
    uStrength: 4.0,
    color1: '#10b981', // emerald-500
    color2: '#06b6d4', // cyan-400
    color3: '#3b82f6', // blue-500
    brightness: 1.5,
    rotationZ: -90,
    type: 'waterPlane' as const,
    wireframe: false,
  });

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
      {/* Enhanced Hero Section with Interactive Shader */}
      <section 
        className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 overflow-hidden min-h-screen flex items-center"
        aria-labelledby="hero-heading"
      >
        {/* Advanced Shader Background */}
        <ShaderBackground 
          animate={true}
          bgColor1="#000000"
          bgColor2="#0f172a"
          brightness={shaderParams.brightness}
          cAzimuthAngle={180}
          cDistance={2.9}
          cPolarAngle={120}
          cameraZoom={1}
          color1={shaderParams.color1}
          color2={shaderParams.color2}
          color3={shaderParams.color3}
          envPreset="city"
          fov={45}
          frameRate={10}
          grain="off"
          lightType="3d"
          pixelDensity={1}
          positionX={0}
          positionY={1.8}
          positionZ={0}
          reflection={0.1}
          rotationX={0}
          rotationY={0}
          rotationZ={shaderParams.rotationZ}
          shader="defaults"
          type={shaderParams.type}
          uAmplitude={shaderParams.uAmplitude}
          uDensity={shaderParams.uDensity}
          uFrequency={shaderParams.uFrequency}
          uSpeed={shaderParams.uSpeed}
          uStrength={shaderParams.uStrength}
          uTime={0.2}
          wireframe={shaderParams.wireframe}
        />
        
        {/* Dark Overlay for Contrast */}
        <div className="absolute inset-0 bg-black/30 dark:bg-black/20 z-0"></div>
        
        <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12 relative z-10">
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={slideInLeftVariants}
          >
            <motion.h1 
              id="hero-heading"
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight min-h-[144px] md:min-h-[192px] apple-title leading-tight"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <span className="block text-emerald-300">Climate Action</span>
              <span className="block text-cyan-300 mt-2">— Innovation —</span>
              <span className="block text-blue-300 mt-2">Sustainability</span>
            </motion.h1>
            <motion.p 
              className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            >
              Join our mission to create a sustainable future through innovative projects, community engagement, and cutting-edge technology solutions.
            </motion.p>
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              <Link to="/projects" className="w-full sm:w-auto block">
                <motion.div 
                  className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-teal-600 text-center text-white font-semibold py-4 px-8 rounded-full shadow-lg shadow-emerald-500/30 apple-button apple-button-primary transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -3, boxShadow: "0 12px 30px rgba(16, 185, 129, 0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Explore Projects
                </motion.div>
              </Link>
              <Link to="/about" className="w-full sm:w-auto block">
                <motion.div 
                  className="w-full sm:w-auto bg-white/20 backdrop-blur-sm text-center text-emerald-200 font-semibold py-4 px-8 rounded-full shadow-lg border border-white/30 apple-button apple-button-secondary transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -3, boxShadow: "0 12px 30px rgba(255, 255, 255, 0.15)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Learn More
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Interactive Shader Controls Panel */}
          <motion.div 
            className="lg:w-1/2 bg-white/20 backdrop-blur-md rounded-3xl p-6 border border-white/30 shadow-xl"
            initial="hidden"
            animate="visible"
            variants={slideInRightVariants}
          >
            <h3 className="text-xl font-bold text-white mb-4">Shader Customization</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-1">Wave Speed</label>
                <input 
                  type="range" 
                  min="0" 
                  max="2" 
                  step="0.1"
                  value={shaderParams.uSpeed}
                  onChange={(e) => setShaderParams(prev => ({ ...prev, uSpeed: parseFloat(e.target.value) }))}
                  className="w-full accent-emerald-500"
                />
                <span className="text-xs text-slate-300">{shaderParams.uSpeed}</span>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-200 mb-1">Wave Frequency</label>
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  step="0.1"
                  value={shaderParams.uFrequency}
                  onChange={(e) => setShaderParams(prev => ({ ...prev, uFrequency: parseFloat(e.target.value) }))}
                  className="w-full accent-emerald-500"
                />
                <span className="text-xs text-slate-300">{shaderParams.uFrequency}</span>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-200 mb-1">Color 1</label>
                  <input 
                    type="color" 
                    value={shaderParams.color1}
                    onChange={(e) => setShaderParams(prev => ({ ...prev, color1: e.target.value }))}
                    className="w-full h-8 rounded cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-200 mb-1">Color 2</label>
                  <input 
                    type="color" 
                    value={shaderParams.color2}
                    onChange={(e) => setShaderParams(prev => ({ ...prev, color2: e.target.value }))}
                    className="w-full h-8 rounded cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-200 mb-1">Color 3</label>
                  <input 
                    type="color" 
                    value={shaderParams.color3}
                    onChange={(e) => setShaderParams(prev => ({ ...prev, color3: e.target.value }))}
                    className="w-full h-8 rounded cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Initiatives Section */}
      <section 
        className="container mx-auto px-4 py-24" 
        aria-labelledby="featured-initiatives-heading"
        data-testid="featured-initiatives-section"
      >
        <SectionHeader title="Featured Initiatives" subtitle="Our core projects making a tangible impact on our campus and community." />
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            data-testid="projects-grid"
        >
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="apple-card glass-card rounded-3xl overflow-hidden shadow-xl border border-white/20 dark:bg-slate-800/80 dark:border-slate-700/50"
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              data-testid={`project-card-${index}`}
              role="listitem"
            >
              <div className="relative overflow-hidden">
                <OptimizedImage 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-60 object-cover transition-transform duration-700"
                  placeholder="/images/homepagepicture1.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-600 dark:text-slate-300">{project.description || "Join us in our mission to create a sustainable campus environment through innovative projects and community engagement."}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Quick Stats Section */}
      <section 
        className="bg-gradient-to-br from-slate-50 via-emerald-50 to-blue-50 py-24 dark:from-slate-900 dark:via-emerald-900 dark:to-blue-900" 
        aria-labelledby="stats-heading"
        data-testid="stats-section"
      >
        <div className="container mx-auto px-4">
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
                <StatCard value={<StaticCounter value={`${members.length} Active Members`} data-testid="counter-members" />} label="Active Members" data-testid="stat-members" />
                <StatCard value={<StaticCounter value="100+ Trees Planted" data-testid="counter-trees" />} label="Trees Planted" data-testid="stat-trees" />
                <StatCard value={<StaticCounter value="3 Awards" data-testid="counter-awards" />} label="Awards Won" data-testid="stat-awards" />
            </motion.div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto mb-8">
              Join our community of passionate individuals working toward a sustainable future.
            </p>
            <Link to="/about" className="inline-block">
              <motion.button
                className="bg-white text-emerald-600 font-bold py-4 px-10 rounded-full text-lg shadow-lg"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Involved
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NewHomepage;