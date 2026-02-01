
import React from 'react';
import { Link } from 'react-router-dom';

const SocialLink: React.FC<{ href: string; label: string; path: string }> = ({ href, label, path }) => (
  <a 
    href={href} 
    target="_blank"
    rel="noopener noreferrer"
    className="text-text-secondary hover:text-primary-600 transition-colors"
    aria-label={label}
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d={path} />
    </svg>
  </a>
);

const FooterLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <li>
    <Link to={to} className="text-text-secondary hover:text-primary-600 transition-colors text-sm">
      {children}
    </Link>
  </li>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-600 text-text-light border-t border-primary-700 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Column 1: Organization Info */}
          <div>
            <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide">About</h3>
            <p className="text-sm text-text-light/80 leading-relaxed">
              Cambrian Climate Club is a student-led initiative dedicated to promoting sustainability and climate awareness at Cambrian School & College, Campus 2.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/projects">Projects</FooterLink>
              <FooterLink to="/achievements">Achievements</FooterLink>
              <FooterLink to="/leadership">Leadership</FooterLink>
            </ul>
          </div>

          {/* Column 3: Contact & Social */}
          <div>
            <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <SocialLink href="#" label="Facebook" path="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              <SocialLink href="#" label="Instagram" path="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.666c-.788.334-1.559.923-2.3 1.624-.74.8-1.456 1.68-1.89 2.566C.333 5.43.131 6.3.069 7.575.012 8.856 0 9.263 0 12s.015 3.148.072 4.428c.06 1.274.26 2.145.593 2.932a5.648 5.648 0 001.624 2.3c.8.656 1.68 1.273 2.566 1.707.787.333 1.658.532 2.932.591C8.856 23.988 9.263 24 12 24s3.148-.015 4.428-.072c1.274-.059 2.145-.259 2.932-.591.9-.434 1.766-1.051 2.466-1.707a5.648 5.648 0 001.624-2.3c.333-.787.532-1.658.591-2.932.058-1.28.072-1.687.072-4.428s-.015-3.148-.072-4.428c-.059-1.274-.259-2.145-.591-2.932a5.52 5.52 0 00-1.624-2.3C19.884 1.288 18.956.611 18.056.25c-.787-.333-1.658-.532-2.932-.591C15.144.012 14.737 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.070 1.171.054 1.805.25 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.228.061 1.264.07 1.646.07 4.849s-.009 3.585-.07 4.849c-.054 1.171-.25 1.805-.415 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.228.413-1.264.061-1.646.07-4.849.07s-3.585-.009-4.849-.07c-1.171-.054-1.805-.25-2.227-.415-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.228-.061-1.264-.07-1.646-.07-4.849s.009-3.585.07-4.849c.054-1.171.25-1.805.415-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.228-.413 1.264-.061 1.646-.07 4.849-.07z" />
              <SocialLink href="#" label="Twitter" path="M23.953 4.57a10 10 0 002.856-3.4c-1.3.73-2.8 1.25-4.4 1.6 1.25-1.645 2.193-3.12 2.544-4.77-1.922 1.29-4.15 2.16-6.53 2.48-1.51-1.61-3.66-2.62-6.044-2.62-4.577 0-8.294 3.717-8.294 8.294 0 .65.073 1.285.206 1.9-6.04-.3-11.38-3.196-14.97-7.6-.63 1.08-1.01 2.33-1.01 3.68 0 2.876 1.464 5.411 3.686 6.9-1.36-.046-2.64-.417-3.76-1.088.026.057.026.114.026.17 0 4.02 2.858 7.37 6.66 8.13-.696.188-1.432.288-2.19.288-.537 0-1.063-.05-1.579-.15 1.067 3.33 4.15 5.76 7.8 5.83-2.84 2.23-6.42 3.56-10.3 3.56-.67 0-1.33-.04-1.98-.11 3.68 2.36 8.05 3.74 12.73 3.74 15.28 0 23.6-12.67 23.6-23.62 0-.36-.01-.72-.02-1.06 1.62-1.17 3.02-2.64 4.13-4.32z" />
            </div>
            <p className="text-xs text-text-light/70">
              Cambrian School & College, Campus 2<br/>Dhaka, Bangladesh
            </p>
          </div>
        </div>

        <div className="border-t border-primary-700 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-text-light/70">
          <span>© {currentYear} Cambrian Climate Club. All rights reserved.</span>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <Link to="#" className="hover:text-text-light transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-text-light transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
