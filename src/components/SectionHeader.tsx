
import React, { memo } from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = memo(({ title, subtitle }) => {
  return (
    <div className="text-center">
      <motion.h2 
        className="text-4xl md:text-5xl font-bold text-ocean tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
          <motion.p 
            className="mt-4 text-lg text-text-muted max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
             {subtitle}
          </motion.p>
      )}
    </div>
  );
});

export default SectionHeader;
