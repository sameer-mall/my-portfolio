import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <span className="text-3xl font-bold text-white tracking-wide">Portfolio</span>
          </div>
          <ul className="flex items-center gap-12 ml-auto">
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
      </div>
    </nav>
  );
};

export default Navbar;
