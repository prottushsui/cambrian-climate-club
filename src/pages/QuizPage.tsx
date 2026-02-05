import React from 'react';
import SectionHeader from '@/components/SectionHeader';

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
        <div
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-elevated p-10 border border-sandstone-200 text-center"
        >
          <p className="editorial-kicker mb-4">Quiz Platform</p>
          <h2 className="text-3xl font-semibold text-charcoal-900 mb-4">Coming Soon</h2>
          <p className="text-charcoal-600">
            The quiz experience is being refined to match our new editorial platform. Please check back shortly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
