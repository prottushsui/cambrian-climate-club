import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import CombinedLeadershipPage from '@/pages/CombinedLeadershipPage';
import ProjectsPage from '@/pages/ProjectsPage';
import AchievementsPage from '@/pages/AchievementsPage';

/**
 * Main App component - Root component that handles routing and shared layout
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
            </Routes>
          </main>
          <Footer />
        </div>
        <Analytics />
      </MotionConfig>
    </HashRouter>
  );
};

export default App;
