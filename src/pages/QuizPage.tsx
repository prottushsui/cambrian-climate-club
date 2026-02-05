import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import { motion } from 'framer-motion';

/**
 * QuizPage component - Main quiz interface
 * 
 * @component
 */
const QuizPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <SectionHeader 
        title="Quiz" 
        subtitle="Test your knowledge and learn more about climate topics" 
      />
      <div className="mt-8">
        <motion.div
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-elevated p-10 border border-sandstone-200 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="editorial-kicker mb-4">Quiz Platform</p>
          <h2 className="text-3xl font-semibold text-charcoal-900 mb-4">Comming Soon</h2>
          <p className="text-charcoal-600">
            The quiz experience is being refined to match our new editorial platform. Please check back shortly.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default QuizPage;
