import React, { useRef } from 'react';
import { FaGlobe, FaSearch, FaMapMarkedAlt, FaInfoCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

const AboutUs = () => {
  const WorldAtlas = "WorldAtlas";
  const navigate = useNavigate();

  const refTitle = useRef(null);
  const refIntro = useRef(null);
  const isTitleInView = useInView(refTitle, { threshold: 0.5 });
  const isIntroInView = useInView(refIntro, { threshold: 0.3 });
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5 });


  const features = [
    {
      icon: <FaGlobe />,
      title: 'Data at Your Fingertips',
      description: `When you visit ${WorldAtlas}, we fetch up-to-date data from the REST Countries API to provide you with the most accurate information.`,
    },
    {
      icon: <FaMapMarkedAlt />,
      title: 'Explore All Countries',
      description: `Browse a complete list of countries with key details like their flag, capital, and population at a glance.`,
    },
    {
      icon: <FaSearch />,
      title: 'Powerful Search and Filtering',
      description: `Find countries by name or filter by region (e.g., Africa, Europe, Asia) for a focused discovery.`,
    },
    {
      icon: <FaInfoCircle />,
      title: 'Detailed Country Profiles',
      description: `Get in-depth information including flag, capital, population, currencies, languages, maps, and more.`,
    },
  ];

  const featureCardStyle = "flex items-start bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500 transition duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02] hover:border-blue-400 hover:bg-gray-700 shadow-md shadow-blue-500/40";
  const iconStyle = "flex-shrink-0 text-blue-400 text-3xl mr-4 flex items-center justify-center min-w-[48px]";

  
  return (
    <div className="max-w-4xl mx-auto my-10 p-5 font-sans leading-relaxed text-white rounded-lg md:px-8 lg:px-10">
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-7xl md:text-5xl font-extrabold text-blue-200 mb-8 mt-8">
          About <span className="text-blue-400">{WorldAtlas}</span>
          <span className="block w-26 h-1 bg-blue-300 rounded-full mx-auto mt-4"></span>
        </h1>
      </div>

      {/* Intro */}
      <p 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5,}}

      className="text-lg mb-6 text-gray-200">
        Welcome to <span className="font-bold text-blue-400">{WorldAtlas}</span>! We built this platform to help curious travelers, students, researchers, and geography lovers explore global country data easily and intuitively.
      </p>

      {/* Mission */}
      <section>
        <h3 
        ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5,}}

        className="text-3xl font-bold text-blue-400 mt-8 mb-4 pb-2 border-b-2 border-gray-700">Our Mission
        </h3>
        <p
        ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5,}}

        className="text-lg mb-6 text-gray-200">
          We aim to democratize access to country-level data. With the{' '}
          <a
            href="https://restcountries.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline font-semibold"
          >
            REST Countries API
          </a>
          , you can easily learn about the world and its diverse nations.
        </p>
      </section>

      {/* How It Works */}
      <section>
        <h3
        ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5,}}

        className="text-3xl font-bold text-blue-400 mt-8 mb-4 pb-2 border-b-2 border-gray-700">How It Works</h3>
        <p
        ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5,}}

        className="text-lg mb-6 text-gray-200">
          <span 
          ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5,}}

          className="font-bold text-blue-400">{WorldAtlas}</span> leverages the robust REST Countries API to provide comprehensive and up-to-date data about every country.
        </p>

        <ul
        ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5,}}

        className="space-y-6 mb-10">
          {features.map(({ icon, title, description }, index) => (
            <li key={index} className={featureCardStyle}>
              <div className={iconStyle}>{icon}</div>
              <div>
                <h4 className="text-2xl font-semibold text-white mb-2">{title}</h4>
                <p className="text-lg text-gray-200">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Technology */}
      <section>
        <h3 
        ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5,}}

        className="text-3xl font-bold text-blue-400 mt-8 mb-4 pb-2 border-b-2 border-gray-700">Our Technology</h3>
        <p
      
        className="text-lg mb-8 text-gray-200">
          We've built <span className="font-bold text-blue-400">{WorldAtlas}</span> using modern web tech to ensure speed and responsiveness. The backend uses REST Countries API, while the frontend is clean and easy to navigate.
        </p>
      </section>

      {/* CTA */}
      <div className="text-center bg-blue-950 p-8 rounded-lg border border-dashed border-blue-700 shadow-md shadow-blue-500/40">
        <p
       
        className="text-2xl md:text-3xl font-semibold text-blue-200 mb-6">
          Ready to explore? Start your journey of discovery now!
        </p>
        <button

          onClick={() => navigate('/country')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-md shadow-blue-500/40"
        >
          Explore Countries
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
