import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/constants/animation';
import SkeletonLoader from './ui/SkeletonLoader';

interface StatItem {
  id: string;
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface StatsSectionProps {
  stats: StatItem[];
  title?: string;
  isLoading?: boolean;
}

const StatsSection: React.FC<StatsSectionProps> = ({ 
  stats, 
  title = "Our Journey in Numbers", 
  isLoading = false 
}) => {
  return (
    <section 
      className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900"
      aria-labelledby="stats-heading"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          id="stats-heading"
          className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12 apple-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {title}
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {isLoading 
            ? Array.from({ length: 4 }).map((_, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center"
                >
                  <SkeletonLoader className="h-12 w-24 mx-auto mb-4" />
                  <SkeletonLoader className="h-4 w-32 mx-auto" />
                </div>
              ))
            : stats.map((stat) => (
                <motion.div
                  key={stat.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center transform-gpu"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -6px rgb(0 0 0 / 0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  role="region"
                  aria-labelledby={`stat-${stat.id}-label`}
                >
                  <div className="flex justify-center mb-4">
                    {stat.icon && (
                      <div className="text-emerald-600 dark:text-emerald-400" aria-hidden="true">
                        {stat.icon}
                      </div>
                    )}
                  </div>
                  <div 
                    id={`stat-${stat.id}-value`} 
                    className="text-4xl md:text-5xl font-bold text-emerald-700 dark:text-emerald-400 mb-2"
                  >
                    {stat.value}
                  </div>
                  <div 
                    id={`stat-${stat.id}-label`} 
                    className="text-lg text-slate-700 dark:text-slate-300 font-medium"
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))
          }
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;