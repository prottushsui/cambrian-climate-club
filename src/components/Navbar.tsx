
import React, { useState, memo } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { buttonHoverVariants } from '@/constants/animation';

/**
 * NavItem component - Individual navigation item with active state and animations
 * 
 * @component
 * @param {string} to - The route path
 * @param {React.ReactNode} children - The content to display in the nav item
 * @param {function} onClick - Function to call when clicked
 * @param {boolean} [isMobile=false] - Whether this is for mobile navigation
 */

const NavItem: React.FC<{ to: string; children: React.ReactNode; onClick: () => void; isMobile?: boolean }> = ({ to, children, onClick, isMobile }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `relative px-4 py-2 rounded-lg transition-all duration-300 ${
        isMobile
            ? `block text-lg ${isActive ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-muted'}`
            : `${isActive ? 'text-primary font-semibold' : 'text-foreground hover:text-primary'}`
      }`
    }
  >
    {({ isActive }) => (
        <motion.div
            className="relative flex items-center"
            variants={buttonHoverVariants}
            whileHover="hover"
            whileTap={{ scale: 0.97 }}
        >
            {children}
            {!isMobile && (
              <motion.div
                  className="absolute left-0 right-0 -bottom-1 h-0.5 bg-primary rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={isActive ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.3 }}
              />
            )}
        </motion.div>
    )}
  </NavLink>
);

/**
 * Navbar component - Main navigation for the application
 * 
 * @component
 * @example
 * return (
 *   <Navbar />
 * )
 */
const Navbar: React.FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/leadership', label: 'Leadership' },
    { to: '/executive-committee', label: 'Committee' },
    { to: '/advisory-committee', label: 'Advisors' },
    { to: '/projects', label: 'Projects' },
    { to: '/achievements', label: 'Achievements' },
    { to: '/leaderboard', label: 'Leaderboard' },
    { to: '/quiz', label: 'Quiz' },
  ];

  return (
    <nav className="navbar sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border" aria-label="Main navigation">
      <div className="container flex flex-wrap items-center justify-between py-4">
        <Link 
          to="/" 
          className="navbar-brand" 
          onClick={closeMenu}
          aria-label="Cambrian Climate Club Home"
        >
          <img src="/images/Club logo.png" className="h-12 w-auto" alt="Cambrian Climate Club Logo" />
          <span className="text-xl font-bold">Cambrian Climate Club</span>
        </Link>
        
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-foreground rounded-lg md:hidden hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close main menu" : "Open main menu"}
        >
          <span className="sr-only">Open main menu</span>
          <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 }
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
              {isOpen ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
              ) : (
                  <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                  </svg>
              )}
          </motion.div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:space-x-1" id="navbar-default">
          <ul className="flex flex-row space-x-1 p-0 mt-0">
            {navLinks.map((link) => (
                <li key={link.to}>
                    <NavItem to={link.to} onClick={closeMenu}>{link.label}</NavItem>
                </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
            <motion.div
                className="md:hidden bg-background border-t border-border"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <ul className="py-4 space-y-2">
                    {navLinks.map((link) => (
                        <li key={link.to}>
                            <NavItem to={link.to} onClick={closeMenu} isMobile={true}>{link.label}</NavItem>
                        </li>
                    ))}
                </ul>
            </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
});

export default Navbar;
