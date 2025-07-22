import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import 


const navItems = ['Home', 'About', 'Country', 'Contact'];

const Headers = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-gray-800 text-white fixed top-0 left-0 w-full z-50 shadow-md shadow-gray-900/100">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-3xl font-bold hover:text-blue-400 transition-colors"
          >
            WorldAtlas
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <a
              href="https://www.linkedin.com/in/bhargav-sonagra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
            >
              <FaLinkedin className="text-2xl" />
            </a>

            {/* GitHub Icon */}
            <a
              href="https://github.com/BhargavSonagra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600"
            >
              <FaGithub className="text-2xl" />
            </a>
            {navItems.map((text) => {
              const path = text.toLowerCase() === 'home' ? '/' : `/${text.toLowerCase()}`;
              return (
                <NavLink
                  key={text}
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-yellow-400 font-semibold'
                      : 'hover:text-blue-400 transition-colors'
                  }
                >
                  {text}
                </NavLink>
              );
            })}
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Toggle menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-3 pb-4">
            {navItems.map((text) => {
              const path = text.toLowerCase() === 'home' ? '/' : `/${text.toLowerCase()}`;
              return (
                <NavLink
                  key={text}
                  to={path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive
                      ? 'block text-yellow-400 font-semibold'
                      : 'block hover:text-blue-400 transition-colors'
                  }
                >
                  {text}
                </NavLink>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};

export default Headers;
