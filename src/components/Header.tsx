import { useState } from 'react';
import LCUP from '../assets/LCUP.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full bg-background dark:bg-black/30 dark:backdrop-blur-md shadow-md z-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src={LCUP} alt="LCUP logo" className="mr-2 w-8 h-8" />
            <span className="text-2xl font-bold text-primary">JPSSITE</span>            
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-text hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </a>
            <a href="#about" className="text-text hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </a>
            <a href="#events" className="text-text hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Events
            </a>
            <a href="#members" className="text-text hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Members
            </a>
            <a href="#contact" className="text-text hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text hover:text-primary hover:bg-background/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="text-text hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Home
            </a>
            <a href="#about" className="text-text hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors">
              About
            </a>
            <a href="#events" className="text-text hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Events
            </a>
            <a href="#members" className="text-text hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Members
            </a>
            <a href="#contact" className="text-text hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
