
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SocialLink: React.FC<{ href: string; label: string; path: string }> = ({ href, label, path }) => (
    <motion.a 
        href={href} 
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-muted hover:text-ocean transition-colors"
        aria-label={label}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
    >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d={path} clipRule="evenodd" />
        </svg>
    </motion.a>
);

const FooterLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
    <motion.li 
        whileHover={{ x: 4 }}
    >
        <Link to={to} className="text-text-muted hover:text-ocean transition-colors text-sm">
            {children}
        </Link>
    </motion.li>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-sand/40 mt-20">
      <div className="container-premium py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & About */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center gap-3" aria-label="Cambrian Climate Club Home">
              <img src="/images/Club logo.png" className="h-8 w-auto" alt="Cambrian Climate Club Logo" />
              <span className="font-bold text-ocean hidden sm:block">Climate Club</span>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed">
              Empowering students to create a sustainable future through education, innovation, and environmental action.
            </p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-charcoal font-bold mb-4 text-sm uppercase tracking-wide">Navigation</h3>
            <ul className="space-y-2">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/projects">Projects</FooterLink>
              <FooterLink to="/achievements">Achievements</FooterLink>
              <FooterLink to="/leadership">Leadership</FooterLink>
            </ul>
          </motion.div>

          {/* Column 3: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-charcoal font-bold mb-4 text-sm uppercase tracking-wide">Contact</h3>
            <ul className="space-y-3 text-sm text-text-muted">
              <li className="flex gap-3">
                <svg className="w-4 h-4 text-ocean flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span>Cambrian School, Campus 2<br/>Dhaka, Bangladesh</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-4 h-4 text-ocean flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
                </svg>
                <a href="mailto:climate@cambrian.edu.bd" className="hover:text-ocean transition-colors">climate@cambrian.edu.bd</a>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-charcoal font-bold mb-4 text-sm uppercase tracking-wide">Connect</h3>
            <p className="text-text-muted text-sm mb-4">Follow our latest updates and news.</p>
            <div className="flex gap-4">
              <SocialLink href="https://facebook.com" label="Facebook" path="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              <SocialLink href="https://instagram.com" label="Instagram" path="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2z" />
              <SocialLink href="https://twitter.com" label="Twitter" path="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </div>
          </motion.div>

        </div>
        
        <div className="border-t border-sand/30 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-text-muted text-sm">© {currentYear} Cambrian Climate Club. All Rights Reserved.</p>
            <div className="flex gap-6">
              <Link to="#" className="text-text-muted hover:text-ocean text-sm transition-colors">Privacy</Link>
              <Link to="#" className="text-text-muted hover:text-ocean text-sm transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
