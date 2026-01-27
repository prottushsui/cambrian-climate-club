
import React, { memo } from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = memo(({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <motion.h2 
        className="text-4xl md:text-5xl font-bold text-foreground tracking-tight"
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
             <p className="mt-6 text-xl text-foreground/80 max-w-3xl mx-auto font-light">{subtitle}</p>
          </motion.div>
      )}
    </div>
  );
});

export default SectionHeader;
