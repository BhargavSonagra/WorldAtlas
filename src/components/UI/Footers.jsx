import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons

const Footers = () => {
  return (
    <footer>
      <div className="px-6 max-w-screen-xl mx-auto">
        <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white px-6 p-4 z-10">
          {/* Main content container */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
            
            {/* Left Section */}
            <div className="text-center md:text-left">
              <h2 className="text-l font-bold text-blue-400">WorldAtlas</h2>
              <p className="text-sm text-gray-400 mt-1">© 2025 All Rights Reserved</p>
            </div>

            {/* Center Section */}
            <div className="text-center md:text-left">
              <h2 className="text-l font-bold text-blue-400">Created By</h2>
              <p className="text-sm text-gray-400 mt-1">Bhargav</p>
            </div>

            {/* Right Section (Icons) */}
            <div className="flex justify-center space-x-6">
              {/* LinkedIn Icon */}
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
