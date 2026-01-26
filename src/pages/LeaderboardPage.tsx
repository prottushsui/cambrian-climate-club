import React from 'react';
import SectionHeader from '@/components/SectionHeader';

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
      
      <div className="mt-12">
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Leaderboard Coming Soon</h3>
            <p className="text-slate-600 mb-6">
              Check back later to see the quiz leaderboard and rankings.
            </p>
            <div className="bg-gray-100 rounded-lg p-8">
              <p className="text-slate-500 italic">Rankings will be displayed here once available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;