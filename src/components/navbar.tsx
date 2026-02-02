import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <span className="text-2xl md:text-3xl font-bold text-white tracking-wide">Portfolio</span>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-12 ml-auto">
            <li>
              <Link
                to="/"
                className={`transition-all duration-300 font-semibold text-lg pb-2 ${
                  isActive('/')
                    ? 'text-blue-400 border-b-2 border-blue-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`transition-all duration-300 font-semibold text-lg pb-2 ${
                  isActive('/about')
                    ? 'text-blue-400 border-b-2 border-blue-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/experience"
                className={`transition-all duration-300 font-semibold text-lg pb-2 ${
                  isActive('/experience')
                    ? 'text-blue-400 border-b-2 border-blue-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Experience
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block transition-all duration-300 font-semibold text-lg py-2 ${
                    isActive('/')
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block transition-all duration-300 font-semibold text-lg py-2 ${
                    isActive('/about')
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/experience"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block transition-all duration-300 font-semibold text-lg py-2 ${
                    isActive('/experience')
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Experience
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
