
import React, { useState, memo } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * NavItem component - Individual navigation item with active state and premium styling
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
      `relative block px-4 py-2 text-sm font-medium transition-colors duration-300 ${
        isMobile
            ? isActive ? 'text-ocean font-semibold bg-sand/20' : 'text-charcoal hover:text-ocean'
            : isActive ? 'text-ocean font-semibold' : 'text-charcoal hover:text-teal'
      }`
    }
  >
    {({ isActive }) => (
        <motion.div
            className="relative flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
            {!isMobile && isActive && (
              <motion.div
                  className="absolute left-0 right-0 -bottom-2 h-1 bg-gradient-to-r from-ocean via-teal to-coral rounded-full"
                  layoutId="navbar-indicator"
                  transition={{ type: 'spring', stiffness: 380, damping: 40 }}
              />
            )}
        </motion.div>
    )}
  </NavLink>
);

/**
 * Navbar component - Premium navigation for Cambrian Climate Club
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
  ];

  return (
    <nav 
      className="fixed w-full z-50 top-0 start-0 border-b border-sand/30 backdrop-blur-xl bg-cloud/80" 
      style={{ boxShadow: '0 1px 3px rgba(15, 61, 92, 0.08)' }}
      aria-label="Main navigation"
    >
      <div className="container-premium flex flex-wrap items-center justify-between py-4">
        {/* Logo and Brand */}
        <Link 
          to="/" 
          className="flex items-center gap-3 z-50 relative" 
          onClick={closeMenu}
          aria-label="Cambrian Climate Club Home"
        >
          <motion.div 
            whileHover={{ rotate: 5, scale: 1.08 }} 
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="flex-shrink-0"
          >
             <img src="/images/Club logo.png" className="h-10 w-auto" alt="Cambrian Climate Club Logo" />
          </motion.div>
          <span className="text-lg font-bold text-ocean hidden sm:block">Cambrian Climate Club</span>
        </Link>
        
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-charcoal rounded-lg md:hidden hover:bg-sand/20 focus:outline-none focus:ring-2 focus:ring-ocean z-50 relative transition-colors duration-300"
          aria-controls="navbar-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close main menu" : "Open main menu"}
        >
          <span className="sr-only">Toggle menu</span>
          <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={{
                open: { rotate: 90 },
                closed: { rotate: 0 }
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
              {isOpen ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
              ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
              )}
          </motion.div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex w-full md:w-auto" id="navbar-menu">
          <ul className="font-medium flex flex-row gap-1">
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
                className="absolute top-full left-0 w-full bg-cloud/95 backdrop-blur-xl border-b border-sand/30 md:hidden overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <ul className="flex flex-col py-4 px-4 font-medium gap-2">
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
