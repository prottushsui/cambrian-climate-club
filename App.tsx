
import React, { memo } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from '@/context/AppContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import LeadershipPage from '@/pages/LeadershipPage';
import ExecutiveCommitteePage from '@/pages/ExecutiveCommitteePage';
import AdvisoryCommitteePage from '@/pages/AdvisoryCommitteePage';
import ProjectsPage from '@/pages/ProjectsPage';
import AchievementsPage from '@/pages/AchievementsPage';
import DemoPage from '@/pages/DemoPage';

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
      <AppProvider>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen" data-testid="app-container">
          <Navbar />
          <main className="flex-grow pt-20" role="main">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/leadership" element={<LeadershipPage />} />
              <Route path="/executive-committee" element={<ExecutiveCommitteePage />} />
              <Route path="/advisory-committee" element={<AdvisoryCommitteePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/achievements" element={<AchievementsPage />} />
              <Route path="/demo" element={<DemoPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AppProvider>
    </HashRouter>
  );
};

export default App;
