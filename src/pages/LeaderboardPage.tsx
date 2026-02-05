import React from 'react';
import SectionHeader from '@/components/SectionHeader';
import { motion } from 'framer-motion';

/**
 * LeaderboardPage component - Displays the quiz leaderboard
 * 
 * @component
 */
const LeaderboardPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <SectionHeader 
        title="Leaderboard" 
        subtitle="See how you rank against other participants" 
      />
      
      <div className="mt-8">
        <motion.div
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-elevated p-10 border border-sandstone-200 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="editorial-kicker mb-4">Leaderboard</p>
          <h2 className="text-3xl font-semibold text-charcoal-900 mb-4">Coming Soon</h2>
          <p className="text-charcoal-600">
            The leaderboard is being rebuilt with verified results and a refined presentation. Please check back soon.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
