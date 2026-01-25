'use client';

import React, { useState, useEffect } from 'react';

interface LeaderboardEntry {
  name: string;
  score: number;
  timeTaken: number;
  timestamp: string;
  quizId: string;
}

const LeaderboardPage: React.FC = () => {
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedQuiz, setSelectedQuiz] = useState<string>('all');

  // Fetch leaderboard data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const url = selectedQuiz === 'all' 
          ? '/api/get-leaderboard' 
          : `/api/get-leaderboard?quizId=${selectedQuiz}`;
        
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch leaderboard data');
        }
        const data = await response.json();
        setLeaderboardData(data);
      } catch (err) {
        setError('Failed to load leaderboard data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Set up auto-refresh every 10 seconds
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, [selectedQuiz]);

  // Get unique quiz IDs for filter dropdown
  const uniqueQuizIds = Array.from(new Set(leaderboardData.map(item => item.quizId)));

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-4">Loading leaderboard...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Quiz Leaderboard</h1>
      
      {/* Quiz Filter */}
      <div className="mb-6">
        <label htmlFor="quiz-filter" className="block text-sm font-medium text-gray-700 mb-2">
          Filter by Quiz:
        </label>
        <select
          id="quiz-filter"
          value={selectedQuiz}
          onChange={(e) => setSelectedQuiz(e.target.value)}
          className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Quizzes</option>
          {uniqueQuizIds.map(quizId => (
            <option key={quizId} value={quizId}>
              {quizId}
            </option>
          ))}
        </select>
      </div>

      {/* Leaderboard Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rank
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Score
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time (sec)
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {leaderboardData.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                  No leaderboard data available
                </td>
              </tr>
            ) : (
              leaderboardData.map((entry, index) => (
                <tr key={index} className={index < 3 ? 'bg-yellow-50' : ''}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-white font-bold ${
                        index === 0 ? 'bg-yellow-500' : 
                        index === 1 ? 'bg-gray-400' : 
                        index === 2 ? 'bg-amber-800' : 'bg-gray-200 text-gray-800'
                      }`}>
                        {index + 1}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{entry.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm font-bold ${
                      entry.score >= 9 ? 'text-green-600' : 
                      entry.score >= 7 ? 'text-blue-600' : 
                      'text-red-600'
                    }`}>
                      {entry.score}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {entry.timeTaken}s
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(entry.timestamp).toLocaleDateString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-sm text-gray-500">
        <p>Leaderboard updates automatically every 10 seconds</p>
      </div>
    </div>
  );
};

export default LeaderboardPage;