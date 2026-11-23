import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
import ClimateChroniclesPage from '@/pages/ClimateChroniclesPage';
import NotFoundPage from '@/pages/NotFoundPage';

interface PageMetadata {
  title: string;
  description: string;
}

const PAGE_METADATA: Record<string, PageMetadata> = {
  '/': {
    title: 'Cambrian Climate Club | Climate Action & Environmental Leadership',
    description:
      'Cambrian Climate Club — student-led climate action, environmental education, projects, achievements, and leadership.',
  },
  '/about': {
    title: 'About Cambrian Climate Club | CCC',
    description:
      'Learn about Cambrian Climate Club at Cambrian School & College, Campus 2, its founding in 2023, and its student-led sustainability initiatives.',
  },
  '/leadership': {
    title: 'Club Leadership & Advisory Committee | Cambrian Climate Club',
    description:
      'Meet the executive committee, advisors, current members, alumni, and special-recognition members of Cambrian Climate Club.',
  },
  '/projects': {
    title: 'Environmental Projects | Cambrian Climate Club',
    description:
      'Explore the sustainability initiatives and environmental projects of Cambrian Climate Club at Cambrian School & College, Campus 2.',
  },
  '/achievements': {
    title: 'Achievements & Milestones | Cambrian Climate Club',
    description:
      'Explore Cambrian Climate Club’s accomplishments and progress since its founding, including milestones and gallery highlights.',
  },
  '/climate-chronicles': {
    title: 'Climate Chronicles 2025–2026 | Cambrian Climate Club',
    description:
      'Read the 2025–2026 edition of Climate Chronicles, the Cambrian Climate Club magazine featuring a year of ideas, stories, and climate action.',
  },
};

const RouteMetadata = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath = pathname.replace(/\/+$/, '') || '/';
    const metadata = PAGE_METADATA[normalizedPath];
    const title = metadata?.title ?? 'Page not found | Cambrian Climate Club';
    const description =
      metadata?.description ??
      'The requested page could not be found on the Cambrian Climate Club website.';

    document.title = title;

    const setMeta = (
      selector: string,
      attributes: Record<string, string>,
      content: string,
    ) => {
      let element = document.head.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement('meta');
        Object.entries(attributes).forEach(([name, value]) => {
          element?.setAttribute(name, value);
        });
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMeta('meta[name="description"]', { name: 'description' }, description);
    setMeta(
      'meta[name="robots"]',
      { name: 'robots' },
      metadata ? 'index, follow' : 'noindex, follow',
    );
    setMeta(
      'meta[property="og:type"]',
      { property: 'og:type' },
      'website',
    );
    setMeta(
      'meta[property="og:site_name"]',
      { property: 'og:site_name' },
      'Cambrian Climate Club',
    );
    setMeta('meta[property="og:title"]', { property: 'og:title' }, title);
    setMeta(
      'meta[property="og:description"]',
      { property: 'og:description' },
      description,
    );
    setMeta(
      'meta[property="og:url"]',
      { property: 'og:url' },
      new URL(normalizedPath, window.location.origin).href,
    );
    setMeta(
      'meta[name="twitter:card"]',
      { name: 'twitter:card' },
      'summary',
    );
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, title);
    setMeta(
      'meta[name="twitter:description"]',
      { name: 'twitter:description' },
      description,
    );

    let canonical =
      document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (metadata) {
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = new URL(normalizedPath, window.location.origin).href;
    } else {
      canonical?.remove();
    }
  }, [pathname]);

  return null;
};

const App = () => (
  <BrowserRouter>
    <RouteMetadata />
    <MotionConfig reducedMotion="user">
      <ScrollToTop />
      <div className="flex flex-col min-h-screen" data-testid="app-container">
        <Navbar />
        <main
          id="main-content"
          className="flex-grow pt-20"
          role="main"
          tabIndex={-1}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/leadership" element={<CombinedLeadershipPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route
              path="/climate-chronicles"
              element={<ClimateChroniclesPage />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Analytics />
    </MotionConfig>
  </BrowserRouter>
);

export default App;
