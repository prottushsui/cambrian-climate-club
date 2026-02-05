
import React, { memo } from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = memo(({ title, subtitle }) => {
  return (
    <div className="text-center mb-12 section-header">
      <motion.h2 
        className="text-3xl md:text-4xl font-semibold text-charcoal-900 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {title}
      </motion.h2>
      {subtitle && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
             <p className="mt-4 text-base md:text-lg text-charcoal-600 max-w-2xl mx-auto">{subtitle}</p>
          </motion.div>
      )}
    </div>
  );
});

export default SectionHeader;
