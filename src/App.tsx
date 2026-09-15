import { HashRouter, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import ScrollToTop from '@/components/ScrollToTop';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ErrorBoundary from '@/components/ErrorBoundary';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import CombinedLeadershipPage from '@/pages/CombinedLeadershipPage';
import ProjectsPage from '@/pages/ProjectsPage';
import AchievementsPage from '@/pages/AchievementsPage';
import NotFoundPage from '@/pages/NotFoundPage';

const App = () => (
  <HashRouter>
    <MotionConfig reducedMotion="user">
      <ScrollToTop />
      <div className="flex flex-col min-h-screen" data-testid="app-container">
        <Navbar />
        <main id="main-content" className="flex-grow pt-20" role="main" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/leadership" element={<CombinedLeadershipPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Analytics />
    </MotionConfig>
  </HashRouter>
);

export default App;