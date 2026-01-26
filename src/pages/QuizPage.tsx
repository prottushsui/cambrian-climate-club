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
      
      <div className="mt-12">
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Quiz Platform Coming Soon</h3>
            <p className="text-slate-600 mb-6">
              Take our climate knowledge quizzes to test your understanding and track your progress.
            </p>
            <div className="bg-gray-100 rounded-lg p-8">
              <p className="text-slate-500 italic">Interactive quiz features will be available soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;