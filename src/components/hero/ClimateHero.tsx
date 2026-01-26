'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  containerVariants, 
  itemVariants, 
  slideInLeftVariants, 
  slideInRightVariants
} from '@/constants/animation';
import ShaderBackground from './ShaderBackground';

const ClimateHero: React.FC = () => {
  const heroTitle = "Climate Club — Mission Driven".split("—");
  const titleWords = heroTitle.map(part => part.trim().split(" "));

  return (
    <section 
      className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 overflow-hidden min-h-[90vh] flex items-center"
      aria-labelledby="hero-heading"
    >
      {/* Shader Background */}
      <ShaderBackground 
        animate={true}
        bgColor1="#000000"
        bgColor2="#000000"
        brightness={1.2}
        cAzimuthAngle={180}
        cDistance={2.9}
        cPolarAngle={120}
        cameraZoom={1}
        color1="#ebedff"
        color2="#f3f2f8"
        color3="#dbf8ff"
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
        rotationZ={-90}
        shader="defaults"
        type="waterPlane"
        uAmplitude={0}
        uDensity={1}
        uFrequency={5.5}
        uSpeed={0.3}
        uStrength={3}
        uTime={0.2}
        wireframe={false}
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
            {titleWords.map((part, partIndex) => (
              <span key={partIndex} className={partIndex > 0 ? "block text-emerald-300 mt-2" : "block"}>
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
            className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          >
            A student-led environmental initiative promoting sustainability, climate awareness, and community action for a greener tomorrow.
          </motion.p>
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <a href="/projects" className="w-full sm:w-auto block">
              <motion.div 
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-teal-600 text-center text-white font-semibold py-4 px-8 rounded-full shadow-lg shadow-emerald-500/30 apple-button apple-button-primary transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3, boxShadow: "0 12px 30px rgba(16, 185, 129, 0.4)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Explore Projects
              </motion.div>
            </a>
            <a href="/leadership" className="w-full sm:w-auto block">
              <motion.div 
                className="w-full sm:w-auto bg-white/20 backdrop-blur-sm text-center text-emerald-200 font-semibold py-4 px-8 rounded-full shadow-lg border border-white/30 apple-button apple-button-secondary transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3, boxShadow: "0 12px 30px rgba(255, 255, 255, 0.15)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Meet the Team
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
        
        {/* Placeholder for images or content */}
        <motion.div 
          className="lg:w-1/2 grid grid-cols-2 grid-rows-2 gap-6 h-[400px] md:h-[500px]"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div 
            className="col-span-1 row-span-2 relative group overflow-hidden rounded-3xl bg-emerald-500/20 backdrop-blur-sm border border-white/20"
            variants={slideInRightVariants}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-white text-center p-4">
                <div className="text-4xl mb-2">🌱</div>
                <div className="font-semibold">Sustainability</div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="col-span-1 row-span-1 relative group overflow-hidden rounded-3xl bg-blue-500/20 backdrop-blur-sm border border-white/20"
            variants={slideInRightVariants}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-white text-center p-4">
                <div className="text-3xl mb-2">🌍</div>
                <div className="font-semibold">Climate Action</div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="col-span-1 row-span-1 relative group overflow-hidden rounded-3xl bg-teal-500/20 backdrop-blur-sm border border-white/20"
            variants={slideInRightVariants}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-white text-center p-4">
                <div className="text-3xl mb-2">🤝</div>
                <div className="font-semibold">Community</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClimateHero;