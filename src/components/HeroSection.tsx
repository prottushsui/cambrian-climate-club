import React from 'react';
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
  const heroTitle = "Cambrian Climate Club — Campus 2".split("—");
  const titleWords = heroTitle.map(part => part.trim().split(" "));

  return (
    <section 
      className="relative bg-sandstone-50 overflow-hidden min-h-[85vh] flex items-center"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/70 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        <motion.div 
          className="lg:w-1/2 text-center lg:text-left"
          initial="hidden"
          animate="visible"
          variants={slideInLeftVariants}
        >
          <p className="editorial-kicker mb-4">Cambrian School & College, Campus 2</p>
          <motion.h1 
            id="hero-heading"
            className="text-4xl md:text-6xl lg:text-7xl font-semibold text-charcoal-900 tracking-tight min-h-[144px] md:min-h-[192px] leading-tight"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {titleWords.map((part, partIndex) => (
              <span key={partIndex} className={partIndex > 0 ? "block text-primary-700 mt-2" : "block"}>
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
            className="mt-6 text-lg md:text-xl text-charcoal-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          >
            A student-led environmental initiative promoting sustainability, climate awareness, and community action since 2023.
          </motion.p>
          
          {/* Clear mission statement */}
          <motion.div 
            className="mt-8 p-6 bg-white rounded-2xl shadow-elevated border border-sandstone-200 max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <p className="text-lg font-semibold text-center text-primary-700">
              <strong>Mission:</strong> Empowering students to become proactive leaders in sustainability and climate action through hands-on projects and community engagement.
            </p>
          </motion.div>
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <Link to="/projects" className="w-full sm:w-auto block">
              <motion.button
                className="w-full sm:w-auto bg-primary-700 text-white font-semibold py-4 px-8 rounded-full shadow-elevated transition-all duration-300"
                whileHover={{ scale: 1.04, y: -4, boxShadow: "0 20px 40px rgba(11, 27, 43, 0.25)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => window.location.hash = '#/projects'}
              >
                Explore Projects
              </motion.button>
            </Link>
            <Link to="/leadership" className="w-full sm:w-auto block">
              <motion.button
                className="w-full sm:w-auto bg-white text-primary-700 font-semibold py-4 px-8 rounded-full shadow-subtle border border-sandstone-200 transition-all duration-300"
                whileHover={{ scale: 1.03, y: -3, boxShadow: "0 16px 32px rgba(15, 23, 42, 0.16)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => window.location.hash = '#/leadership'}
              >
                Meet the Team
              </motion.button>
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
            className="col-span-1 row-span-2 relative group overflow-hidden rounded-3xl border border-sandstone-200 shadow-subtle"
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
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 to-transparent group-hover:from-charcoal-900/20 transition-all duration-300 rounded-3xl"></div>
          </motion.div>
          <motion.div 
            className="col-span-1 row-span-1 relative group overflow-hidden rounded-3xl border border-sandstone-200 shadow-subtle"
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
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/30 to-transparent group-hover:from-charcoal-900/15 transition-all duration-300 rounded-3xl"></div>
          </motion.div>
          <motion.div 
            className="col-span-1 row-span-1 relative group overflow-hidden rounded-3xl border border-sandstone-200 shadow-subtle"
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
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/30 to-transparent group-hover:from-charcoal-900/15 transition-all duration-300 rounded-3xl"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
