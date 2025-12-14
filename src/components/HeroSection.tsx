import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  containerVariants, 
  itemVariants, 
  slideInLeftVariants, 
  slideInRightVariants
} from '@/constants/animation';
import OptimizedImage from './ui/OptimizedImage';

const HeroSection: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const heroTitle = "Cambrian Climate Club — Campus 2".split("—");
  const titleWords = heroTitle.map(part => part.trim().split(" "));

  return (
    <section 
      className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 overflow-hidden min-h-[90vh] flex items-center dark:from-slate-900 dark:via-blue-900 dark:to-emerald-900"
      aria-labelledby="hero-heading"
    >
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-gradient-to-r from-emerald-200/30 to-teal-200/30 rounded-full opacity-50 filter blur-3xl dark:from-emerald-800/30 dark:to-teal-800/30"
        animate={{ 
          y: [0, 40, 0], 
          x: [0, 20, 0],
          scale: [1, 1.1, 1] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[-10%] right-[-5%] w-80 h-80 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full opacity-50 filter blur-3xl dark:from-blue-800/30 dark:to-cyan-800/30"
        animate={{ 
          y: [0, -50, 0], 
          x: [0, -30, 0],
          scale: [1, 1.2, 1] 
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div 
        className="absolute top-[20%] right-[10%] w-32 h-32 bg-gradient-to-r from-green-200/40 to-emerald-200/40 rounded-full opacity-60 filter blur-2xl dark:from-green-700/40 dark:to-emerald-700/40"
        animate={{ 
          y: [0, 20, 0], 
          scale: [1, 1.5, 1], 
          rotate: [0, 180, 360] 
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        <motion.div 
          className="lg:w-1/2 text-center lg:text-left"
          initial="hidden"
          animate="visible"
          variants={slideInLeftVariants}
        >
          <motion.h1 
            id="hero-heading"
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight min-h-[144px] md:min-h-[192px] apple-title leading-tight"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {titleWords.map((part, partIndex) => (
              <span key={partIndex} className={partIndex > 0 ? "block text-emerald-700 dark:text-emerald-400 mt-2" : "block"}>
                {partIndex > 0 ? "— " : ""}
                {part.map((word, wordIndex) => (
                  <span key={wordIndex} className="inline-block whitespace-nowrap mr-2 md:mr-4">
                    {word.split("").map((char, charIndex) => (
                      <motion.span 
                        key={charIndex} 
                        className="inline-block" 
                        variants={itemVariants}
                        style={{ display: 'inline-block' }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </span>
            ))}
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          >
            A student-led environmental initiative promoting sustainability, climate awareness, and community action since 2023.
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
            <Link to="/leadership" className="w-full sm:w-auto block">
              <motion.div 
                className="w-full sm:w-auto bg-white/80 backdrop-blur-sm dark:bg-slate-800/80 text-center text-emerald-600 dark:text-emerald-400 font-semibold py-4 px-8 rounded-full shadow-lg border border-white/50 apple-button apple-button-secondary transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3, boxShadow: "0 12px 30px rgba(0, 0, 0, 0.15)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Meet the Team
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
        <motion.div 
          className="lg:w-1/2 grid grid-cols-2 grid-rows-2 gap-6 h-[400px] md:h-[500px]"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            className="col-span-1 row-span-2 relative group overflow-hidden rounded-3xl"
            variants={slideInRightVariants}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <OptimizedImage 
              src="/images/Campus Cleanliness Drive.jpg" 
              alt="Campus Cleanliness Drive" 
              className="w-full h-full object-cover" 
              placeholder="/images/homepagepicture1.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/10 transition-all duration-300 rounded-3xl"></div>
          </motion.div>
          <motion.div 
            className="col-span-1 row-span-1 relative group overflow-hidden rounded-3xl"
            variants={slideInRightVariants}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <OptimizedImage 
              src="/images/Campus Greening Initiative.jpg" 
              alt="Campus Greening Initiative" 
              className="w-full h-full object-cover" 
              placeholder="/images/homepagepicture2.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent group-hover:from-black/10 transition-all duration-300 rounded-3xl"></div>
          </motion.div>
          <motion.div 
            className="col-span-1 row-span-1 relative group overflow-hidden rounded-3xl"
            variants={slideInRightVariants}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <OptimizedImage 
              src="/images/homepagepicture3.jpg" 
              alt="Climate Action E-Magazine" 
              className="w-full h-full object-cover" 
              placeholder="/images/homepagepicture3.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent group-hover:from-black/10 transition-all duration-300 rounded-3xl"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;