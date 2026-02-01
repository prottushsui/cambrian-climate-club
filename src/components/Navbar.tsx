
import React, { useState, memo } from 'react';
import { NavLink, Link } from 'react-router-dom';

/**
 * NavItem component - Individual navigation item with active state
 */
const NavItem: React.FC<{ to: string; children: React.ReactNode; onClick: () => void; isMobile?: boolean }> = ({ to, children, onClick, isMobile }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `relative block px-4 py-2 text-sm font-medium transition-colors duration-200 ${
        isMobile
            ? isActive ? 'bg-primary-600 text-text-light' : 'text-text-primary hover:bg-sand-200'
            : isActive ? 'text-primary-600 border-b-2 border-primary-600' : 'text-text-primary hover:text-primary-600'
      }`
    }
  >
    {children}
  </NavLink>
);

/**
 * Navbar component - Main navigation for the application
 */
const Navbar: React.FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/leadership', label: 'Leadership' },
    { to: '/projects', label: 'Projects' },
    { to: '/achievements', label: 'Achievements' },
  ];

  return (
    <nav className="bg-sand-100 border-b border-sand-300 fixed w-full z-50 top-0 start-0 shadow-md" aria-label="Main navigation">
      <div className="max-w-6xl flex items-center justify-between mx-auto px-4 py-3">
        <Link 
          to="/" 
          className="flex items-center space-x-2" 
          onClick={closeMenu}
          aria-label="Cambrian Climate Club Home"
        >
          <img src="/images/Club logo.png" className="h-9 w-auto" alt="Cambrian Climate Club Logo" />
          <span className="text-lg font-semibold text-primary-600 hidden sm:block">Climate Club</span>
        </Link>
        
        <button
          onClick={toggleMenu}
          type="button"
          className="md:hidden inline-flex items-center p-2 text-text-primary hover:bg-sand-200 rounded-md transition-colors"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close main menu" : "Open main menu"}
        >
          {isOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-1">
          <ul className="flex flex-row space-x-0">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavItem to={link.to} onClick={closeMenu}>{link.label}</NavItem>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-sand-100 border-t border-sand-300 shadow-md">
          <ul className="flex flex-col px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavItem to={link.to} onClick={closeMenu} isMobile={true}>{link.label}</NavItem>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
});

export default Navbar;
