import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative bg-gradient-to-b from-cloud via-sand/30 to-cloud overflow-hidden min-h-[85vh] flex items-center justify-center"
      aria-labelledby="hero-heading"
    >
      {/* Premium Animated Background Shapes */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #0F3D5C 0%, transparent 70%)' }}
        animate={{ 
          y: [0, 40, 0], 
          x: [0, -20, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, #4C8C8C 0%, transparent 70%)' }}
        animate={{ 
          y: [0, -30, 0], 
          x: [0, 30, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container-premium relative z-10 py-20 flex flex-col lg:flex-row items-center gap-16">
        {/* Text Content */}
        <motion.div 
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            id="hero-heading"
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-ocean tracking-tight leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Cambrian Climate Club
          </motion.h1>
          <motion.p 
            className="text-lg text-text-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A student-led environmental initiative committed to climate action, sustainability, and community engagement since 2023.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link to="/projects" className="w-full sm:w-auto">
              <motion.button 
                className="btn btn-primary w-full"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Projects
              </motion.button>
            </Link>
            <Link to="/leadership" className="w-full sm:w-auto">
              <motion.button 
                className="btn btn-outline w-full"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Meet the Team
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Gallery */}
        <motion.div 
          className="lg:w-1/2 grid grid-cols-2 grid-rows-2 gap-4 h-[350px] md:h-[450px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div 
            className="col-span-1 row-span-2 relative group overflow-hidden rounded-2xl shadow-md"
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src="/images/Campus Cleanliness Drive.jpg" 
              alt="Campus Cleanliness Drive" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/10 to-transparent group-hover:from-charcoal/5 transition-all duration-300"></div>
          </motion.div>
          <motion.div 
            className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl shadow-md"
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src="/images/Campus Greening Initiative.jpg" 
              alt="Campus Greening Initiative" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/10 to-transparent group-hover:from-charcoal/5 transition-all duration-300"></div>
          </motion.div>
          <motion.div 
            className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl shadow-md"
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src="/images/homepagepicture3.jpg" 
              alt="Climate Action E-Magazine" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/10 to-transparent group-hover:from-charcoal/5 transition-all duration-300"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
