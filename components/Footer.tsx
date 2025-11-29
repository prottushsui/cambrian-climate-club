
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SocialLink: React.FC<{ href: string; label: string; path: string }> = ({ href, label, path }) => (
    <motion.a 
        href={href} 
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-400 hover:text-primary-600 transition-colors block"
        aria-label={label}
        whileHover={{ scale: 1.2, rotate: 5, color: '#059669' }}
        whileTap={{ scale: 0.9 }}
    >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d={path} clipRule="evenodd" />
        </svg>
    </motion.a>
);

const FooterLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
    <motion.li 
        whileHover={{ x: 5 }} 
        transition={{ type: "spring", stiffness: 300 }}
    >
        <Link to={to} className="hover:text-primary-600 transition-colors flex items-center">
            <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>
            {children}
        </Link>
    </motion.li>
);

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse" aria-label="Cambrian Climate Club Home">
              <img src="https://images.weserv.nl/?url=i.imgur.com/RUb1nRX.png" className="h-10 w-auto" alt="Cambrian Climate Club Logo" />
              <span className="self-center text-xl font-bold whitespace-nowrap text-primary-900">Cambrian Climate Club</span>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed">
              Empowering students to take action for a sustainable future through education, innovation, and community service at Cambrian School & College, Campus 2.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-primary-800 font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/projects">Our Projects</FooterLink>
              <FooterLink to="/achievements">Achievements</FooterLink>
              <FooterLink to="/leadership">Leadership Team</FooterLink>
              <FooterLink to="/advisory-committee">Advisory Committee</FooterLink>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-primary-800 font-bold mb-4 uppercase text-sm tracking-wider">Contact Us</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start space-x-3">
                 <svg className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                 <span>Cambrian School & College, Campus 2<br/>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center space-x-3">
                 <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                 <a href="mailto:info@cambrianclimateclub.com" className="hover:text-primary-600 transition-colors">info@cambrianclimateclub.com</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-primary-800 font-bold mb-4 uppercase text-sm tracking-wider">Follow Us</h3>
            <p className="text-slate-600 text-sm mb-4">Stay connected with our latest updates, events, and environmental tips.</p>
            <div className="flex space-x-4">
              <SocialLink href="#" label="Facebook" path="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              <SocialLink href="#" label="Instagram" path="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2z" />
              <SocialLink href="#" label="Twitter" path="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </div>
          </div>

        </div>
        
        <hr className="my-8 border-slate-200" />
        
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-slate-500 sm:text-center">© {currentYear} Cambrian Climate Club. All Rights Reserved.</span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
             <Link to="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Privacy Policy</Link>
             <Link to="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
