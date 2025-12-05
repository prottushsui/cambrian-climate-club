
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { buttonHoverVariants } from '../constants/animation';

const NavItem: React.FC<{ to: string; children: React.ReactNode; onClick: () => void; isMobile?: boolean }> = ({ to, children, onClick, isMobile }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `relative block py-3 px-4 rounded-full transition-all duration-300 ${
        isMobile
            ? isActive ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-slate-700 hover:bg-gray-50'
            : isActive ? 'text-blue-600 font-semibold' : 'text-slate-700 hover:text-blue-600'
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
                  className="absolute left-0 right-0 -bottom-1 h-0.5 bg-blue-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={isActive ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.3 }}
              />
            )}
        </motion.div>
    )}
  </NavLink>
);

const Navbar: React.FC = () => {
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
    <nav className="bg-white/80 backdrop-blur-xl border-b border-gray-200/60 fixed w-full z-50 top-0 start-0 transition-all duration-300 apple-navbar" aria-label="Main navigation">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link 
          to="/" 
          className="flex items-center space-x-3 rtl:space-x-reverse z-50 relative" 
          onClick={closeMenu}
          aria-label="Cambrian Climate Club Home"
        >
          <motion.div 
            whileHover={{ rotate: 5, scale: 1.05 }} 
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
             <img src="https://images.weserv.nl/?url=i.imgur.com/RUb1nRX.png" className="h-10 w-auto" alt="Cambrian Climate Club Logo" />
          </motion.div>
          <span className="self-center text-xl font-semibold whitespace-nowrap text-slate-900 hidden sm:block apple-title">Cambrian Climate Club</span>
        </Link>
        
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-full md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200 z-50 relative transition-all duration-200"
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
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
              ) : (
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                  </svg>
              )}
          </motion.div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:block w-full md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-row space-x-2 p-0 mt-0 border-0 bg-transparent">
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
                className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-200/60 shadow-xl md:hidden overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <ul className="flex flex-col p-4 font-medium">
                    {navLinks.map((link) => (
                        <li key={link.to} className="mb-1 last:mb-0">
                            <NavItem to={link.to} onClick={closeMenu} isMobile={true}>{link.label}</NavItem>
                        </li>
                    ))}
                </ul>
            </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
