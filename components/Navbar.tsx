
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const NavItem: React.FC<{ to: string; children: React.ReactNode; onClick: () => void; isMobile?: boolean }> = ({ to, children, onClick, isMobile }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `relative block py-2 px-3 rounded transition-colors duration-300 ${
        isMobile
            ? isActive ? 'bg-primary-50 text-primary-700 font-semibold' : 'text-slate-600 hover:bg-gray-50'
            : isActive ? 'text-primary-700' : 'text-slate-600 hover:text-primary-600'
      }`
    }
  >
    {({ isActive }) => (
        <motion.div
            className="relative flex items-center"
            whileHover={!isMobile ? { scale: 1.05 } : { x: 5 }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
            {isActive && !isMobile && (
                <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 -bottom-1 h-0.5 bg-primary-600"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
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
    <nav className="bg-white/90 backdrop-blur-md border-b border-gray-200 fixed w-full z-50 top-0 start-0 transition-all duration-300" aria-label="Main navigation">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link 
          to="/" 
          className="flex items-center space-x-3 rtl:space-x-reverse z-50 relative" 
          onClick={closeMenu}
          aria-label="Cambrian Climate Club Home"
        >
          <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
             <img src="https://images.weserv.nl/?url=i.imgur.com/RUb1nRX.png" className="h-10 w-auto" alt="Cambrian Climate Club Logo" />
          </motion.div>
          <span className="self-center text-xl font-bold whitespace-nowrap text-primary-900 hidden sm:block">Cambrian Climate Club</span>
        </Link>
        
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-200 z-50 relative"
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
          <ul className="font-medium flex flex-row space-x-8 p-0 mt-0 border-0 bg-transparent">
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
                className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl md:hidden overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <ul className="flex flex-col p-4 font-medium">
                    {navLinks.map((link) => (
                        <li key={link.to} className="border-b border-gray-100 last:border-0">
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
