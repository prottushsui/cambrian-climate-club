import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LeadershipPage from './pages/LeadershipPage';
import ExecutiveCommitteePage from './pages/ExecutiveCommitteePage';
import AdvisoryCommitteePage from './pages/AdvisoryCommitteePage';
import ProjectsPage from './pages/ProjectsPage';
import AchievementsPage from './pages/AchievementsPage';
import './styles/globals.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-grow pt-20"
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/leadership" element={<LeadershipPage />} />
            <Route path="/executive-committee" element={<ExecutiveCommitteePage />} />
            <Route path="/advisory-committee" element={<AdvisoryCommitteePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;