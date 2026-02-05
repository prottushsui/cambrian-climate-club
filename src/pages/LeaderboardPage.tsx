import React, { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import { motion } from 'framer-motion';

interface LeaderboardEntry {
  id: number;
  name: string;
  score: number;
  quizCount: number;
  date: string;
}

/**
 * LeaderboardPage component - Displays the quiz leaderboard
 * 
 * @component
 */
const LeaderboardPage: React.FC = () => {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([
    { id: 1, name: 'Alex Johnson', score: 98, quizCount: 12, date: '2023-11-15' },
    { id: 2, name: 'Sam Chen', score: 95, quizCount: 10, date: '2023-11-18' },
    { id: 3, name: 'Taylor Smith', score: 92, quizCount: 15, date: '2023-11-20' },
    { id: 4, name: 'Jordan Williams', score: 88, quizCount: 8, date: '2023-11-17' },
    { id: 5, name: 'Casey Brown', score: 85, quizCount: 11, date: '2023-11-19' },
    { id: 6, name: 'Morgan Lee', score: 82, quizCount: 9, date: '2023-11-21' },
    { id: 7, name: 'Riley Davis', score: 79, quizCount: 7, date: '2023-11-16' },
    { id: 8, name: 'Quinn Miller', score: 76, quizCount: 13, date: '2023-11-14' },
    { id: 9, name: 'Drew Wilson', score: 73, quizCount: 6, date: '2023-11-22' },
    { id: 10, name: 'Peyton Taylor', score: 70, quizCount: 5, date: '2023-11-13' },
  ]);

  const [sortConfig, setSortConfig] = useState<{ key: keyof LeaderboardEntry; direction: 'asc' | 'desc' }>({
    key: 'score',
    direction: 'desc'
  });

  const [filter, setFilter] = useState<string>('all');

  const sortedAndFilteredData = React.useMemo(() => {
    let filteredData = [...leaderboardData];

    if (filter !== 'all') {
      if (filter === 'top5') {
        filteredData = filteredData.slice(0, 5);
      } else if (filter === 'top10') {
        filteredData = filteredData.slice(0, 10);
      }
    }

    return filteredData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [leaderboardData, sortConfig, filter]);

  const handleSort = (key: keyof LeaderboardEntry) => {
    let direction: 'asc' | 'desc' = 'desc';
    if (sortConfig.key === key && sortConfig.direction === 'desc') {
      direction = 'asc';
    }
    setSortConfig({ key, direction });
  };

  const getMedalClass = (position: number) => {
    switch (position) {
      case 1:
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 2:
        return 'bg-gray-100 text-gray-800 border-gray-300';
      case 3:
        return 'bg-amber-100 text-amber-800 border-amber-300';
      default:
        return 'bg-sandstone-100 text-charcoal-800 border-sandstone-300';
    }
  };

  const getMedalIcon = (position: number) => {
    switch (position) {
      case 1:
        return '🥇';
      case 2:
        return '🥈';
      case 3:
        return '🥉';
      default:
        return position;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SectionHeader 
        title="Leaderboard" 
        subtitle="See how you rank against other participants" 
      />
      
      <div className="mt-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-elevated p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h2 className="text-2xl font-semibold text-charcoal-900">Climate Quiz Rankings</h2>
              
              <div className="flex gap-2">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="px-4 py-2 border border-sandstone-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600"
                >
                  <option value="all">All Participants</option>
                  <option value="top10">Top 10</option>
                  <option value="top5">Top 5</option>
                </select>
                
                <div className="relative">
                  <select
                    value={`${sortConfig.key}-${sortConfig.direction}`}
                    onChange={(e) => {
                      const [key, direction] = e.target.value.split('-') as [keyof LeaderboardEntry, 'asc' | 'desc'];
                      setSortConfig({ key, direction });
                    }}
                    className="px-4 py-2 border border-sandstone-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-primary-600 appearance-none"
                  >
                    <option value="score-desc">Sort by Score (High to Low)</option>
                    <option value="score-asc">Sort by Score (Low to High)</option>
                    <option value="quizCount-desc">Sort by Quizzes Taken</option>
                    <option value="date-desc">Sort by Recent Activity</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-sandstone-200">
                <thead className="bg-sandstone-50">
                  <tr>
                    <th 
                      scope="col" 
                      className="px-6 py-3 text-left text-xs font-medium text-charcoal-500 uppercase tracking-wider cursor-pointer hover:bg-sandstone-100"
                      onClick={() => handleSort('id')}
                    >
                      Rank
                    </th>
                    <th 
                      scope="col" 
                      className="px-6 py-3 text-left text-xs font-medium text-charcoal-500 uppercase tracking-wider cursor-pointer hover:bg-sandstone-100"
                      onClick={() => handleSort('name')}
                    >
                      Participant
                    </th>
                    <th 
                      scope="col" 
                      className="px-6 py-3 text-left text-xs font-medium text-charcoal-500 uppercase tracking-wider cursor-pointer hover:bg-sandstone-100"
                      onClick={() => handleSort('score')}
                    >
                      Score
                    </th>
                    <th 
                      scope="col" 
                      className="px-6 py-3 text-left text-xs font-medium text-charcoal-500 uppercase tracking-wider cursor-pointer hover:bg-sandstone-100"
                      onClick={() => handleSort('quizCount')}
                    >
                      Quizzes Taken
                    </th>
                    <th 
                      scope="col" 
                      className="px-6 py-3 text-left text-xs font-medium text-charcoal-500 uppercase tracking-wider cursor-pointer hover:bg-sandstone-100"
                      onClick={() => handleSort('date')}
                    >
                      Last Active
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-sandstone-200">
                  {sortedAndFilteredData.map((entry, index) => (
                    <motion.tr 
                      key={entry.id}
                      className={`hover:bg-sandstone-50 ${index % 2 === 0 ? 'bg-white' : 'bg-sandstone-50/60'}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full border text-sm font-bold ${getMedalClass(index + 1)}`}>
                          {getMedalIcon(index + 1)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <div className="bg-primary-100 rounded-full h-10 w-10 flex items-center justify-center text-primary-700 font-bold">
                              {entry.name.charAt(0)}
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-charcoal-900">{entry.name}</div>
                            <div className="text-sm text-charcoal-500">Member</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-charcoal-900 font-semibold">{entry.score}%</div>
                        <div className="text-sm text-charcoal-500">
                          {entry.score >= 90 ? 'Excellent' : 
                           entry.score >= 80 ? 'Great' : 
                           entry.score >= 70 ? 'Good' : 'Needs Improvement'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-charcoal-900">
                        {entry.quizCount} quizzes
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-charcoal-500">
                        {new Date(entry.date).toLocaleDateString()}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 p-6 bg-sandstone-50 rounded-xl border border-sandstone-200">
              <h3 className="text-xl font-semibold text-charcoal-900 mb-4">How the Leaderboard Works</h3>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-700 flex items-center justify-center mr-2 mt-1">
                    <span className="text-white text-xs">1</span>
                  </div>
                  <p className="text-charcoal-700">Scores are calculated based on quiz performance</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-700 flex items-center justify-center mr-2 mt-1">
                    <span className="text-white text-xs">2</span>
                  </div>
                  <p className="text-charcoal-700">Higher scores appear higher on the leaderboard</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-700 flex items-center justify-center mr-2 mt-1">
                    <span className="text-white text-xs">3</span>
                  </div>
                  <p className="text-charcoal-700">Participation in more quizzes improves your ranking</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
