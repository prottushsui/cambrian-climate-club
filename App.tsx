
import React, { memo } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import { AppProvider } from '@/context/AppContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import CombinedLeadershipPage from '@/pages/CombinedLeadershipPage';
import ProjectsPage from '@/pages/ProjectsPage';
import AchievementsPage from '@/pages/AchievementsPage';
import DemoPage from '@/pages/DemoPage';
import LeaderboardPage from '@/pages/LeaderboardPage';
import QuizPage from '@/pages/QuizPage';

/**
 * Main App component - Root component that handles routing and global context
 * 
 * @component
 * @example
 * return (
 *   <App />
 * )
 */
const App = () => {
  return (
    <HashRouter>
      <MotionConfig reducedMotion="user">
        <AppProvider>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen" data-testid="app-container">
            <Navbar />
            <main className="flex-grow pt-20" role="main">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/leadership" element={<CombinedLeadershipPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/achievements" element={<AchievementsPage />} />
                <Route path="/demo" element={<DemoPage />} />
                <Route path="/leaderboard" element={<LeaderboardPage />} />
                <Route path="/quiz" element={<QuizPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
          <Analytics />
        </AppProvider>
      </MotionConfig>
    </HashRouter>
  );
};

export default App;
