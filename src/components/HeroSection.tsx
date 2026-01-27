import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { slideInLeftVariants, slideInRightVariants, fadeInUpVariants } from '@/constants/animation';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/homepagepicture1.jpg')] bg-cover bg-center mix-blend-overlay opacity-10"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={slideInLeftVariants}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
              variants={fadeInUpVariants}
            >
              Leading Climate Action at <span className="text-primary">Cambrian School & College</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto lg:mx-0"
              variants={fadeInUpVariants}
              style={{ transitionDelay: '0.2s' }}
            >
              Empowering students to take meaningful action for a sustainable future through education, innovation, and community service.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={fadeInUpVariants}
              style={{ transitionDelay: '0.3s' }}
            >
              <Link 
                to="/about" 
                className="btn btn-primary px-8 py-3 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                Learn About Us
              </Link>
              
              <Link 
                to="/projects" 
                className="btn btn-outline px-8 py-3 text-lg font-medium rounded-lg"
              >
                Our Projects
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Right Image */}
          <motion.div 
            className="flex-1 flex justify-center"
            initial="hidden"
            animate="visible"
            variants={slideInRightVariants}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                <img 
                  src="/images/homepagepicture1.jpg" 
                  alt="Cambrian Climate Club - Environmental Action" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-accent/20 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-secondary/20 blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;