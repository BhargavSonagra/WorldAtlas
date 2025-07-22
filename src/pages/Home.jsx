import { FaArrowRight } from 'react-icons/fa';
import React from 'react';
import Country from './Country';
import AboutUs from './AboutUs'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='my-10 pt-5'>
      <h2 className="text-7xl md:text-5xl font-extrabold text-blue-200 text-center mt-12 mb-10 relative">
        Welcome To <span className="text-blue-400">WorldAtlas</span>
        {/* Underline for the title */}
        <span className="block w-16 h-1 bg-blue-300 rounded-full mx-auto mt-4"></span>
      </h2>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-7 h-full p-6 m-5 my-5">
        {/* Column 1 */}

        <div className="bg-gray-800 text-white p-6 rounded-md shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
          <h2 className="text-4xl font-bold mb-4">
            Explore the World, One country at a time
          </h2>
          <p className="text-white text-base leading-relaxed mb-6">
            Discover the history, culture and beauty of every nation. Sort, search and filter through countries to find the details you want.
          </p>

          <button
            onClick={() => navigate('/country')}
            className="flex items-center shadow-md shadow-blue-500/50 gap-2 bg-gray-500 hover:bg-blue-200 text-gray-900 font-semibold py-2 px-4 rounded transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md group"
          >
            Start Exploring
            <FaArrowRight className="transition-transform duration-300 transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Column 2 */}
        <div className="bg-gray-800 text-white rounded-md shadow-[0_4px_12px_rgba(0,0,0,0.6)] flex justify-center items-center p-6">
          <img
            src="/images/world_image.jpg"
            alt="World Globe"
            className="w-84 h-74 object-cover rounded-full shadow-md"
          />
        </div>
      </main>
      <AboutUs />
      <Country />
    </div>
  );
};

export default Home;
