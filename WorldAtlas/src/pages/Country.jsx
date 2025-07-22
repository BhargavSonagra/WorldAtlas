import { useEffect, useState, useRef, useCallback } from 'react';
import axios from 'axios';
import Loader from '../loader';
import { motion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

import data from '../api/countrydetails_api.json';

const Country = () => {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [visibleIndexes, setVisibleIndexes] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  /////////////////
  const [selectedRegion, setSelectedRegion] = useState('');
  //////////////////////

  const containerRef = useRef(null);
  const location = useLocation();

  // Filter countries based on search term
  const filteredCountries = countries.filter(country =>
    country.name?.common.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );
  // Filter countries based on selected region
  const regions = [...new Set(countries.map(c => c.region).filter(Boolean))].sort();

  const filteredCountriesByREgion = countries.filter(country => {
    const matchesSearch = country.name?.common
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase());

    const matchesRegion = selectedRegion ? country.region === selectedRegion : true;

    return matchesSearch && matchesRegion;
  });

  /////

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Fetch countries and merge local data
  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'https://restcountries.com/v3.1/all?fields=name,capital,region,flags'
        );

        const sorted = response.data.sort((a, b) =>
          (a.name?.common).localeCompare(b.name?.common)
        );
        // console.log("sorted ", sorted)

        // Merge with local data
        const mergedCountries = sorted.map(apiCountry => {
          const local = data.find(
            localItem => localItem.name?.toLowerCase() === apiCountry.name?.common?.toLowerCase()
          );

          if (!local) return apiCountry;

          // Remove `name` from local before merging to avoid overwriting API's name object
          const { name, ...localWithoutName } = local;

          return {
            ...apiCountry,
            ...localWithoutName, // merge local data except name
            localName: name,     // keep local name as separate field if needed
          };
        });

        setCountries(mergedCountries);

      } catch (error) {
        console.error('Error fetching countries:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  // Intersection Observer setup
  const observerCallback = useCallback((entries) => {
    entries.forEach((entry) => {
      const index = parseInt(entry.target.getAttribute('data-index'));
      setVisibleIndexes((prev) => {
        const updated = new Set(prev);
        entry.isIntersecting ? updated.add(index) : updated.delete(index);
        return updated;
      });
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, { threshold: 0.5 });
    const cards = containerRef.current?.querySelectorAll('.country-card');
    cards?.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [observerCallback, countries]);

  if (loading) return <Loader />;



  return (
    <div className='my-10 pt-5 mb-50'>
      <h1 className="text-7xl md:text-5xl font-extrabold text-blue-200 text-center mt-12 mb-10">
        List of Countries
        <span className="block w-26 h-1 bg-blue-300 rounded-full mx-auto mt-4"></span>
      </h1>

      {/* ////////// */}

      {/* <div className="flex justify-center mb-8 px-4">
        <input
          type="text"
          placeholder="Search countries..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-600 rounded-md text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div> */}



      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 px-4">
        <input
          type="text"
          placeholder="Search countries..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-600 rounded-md text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="w-full md:w-1/4 px-4 py-2 border border-gray-600 rounded-md text-blue-500 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">All Regions</option>
          {regions.map(region => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>


      {/* //////////// */}
      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8 pb-12 text-white"
      >
        {
          filteredCountriesByREgion.length === 0 ? (
            <div className="col-span-full text-center text-red-400 text-xl mt-4">
              <p className="text-lg font-semibold">
                No country found. Kindly check your spelling or selected region.
              </p>
            </div>
          ) :
            filteredCountriesByREgion.map((country, index) => {
              const { name, capital, region, flags, regionalBlocs } = country;
              const isVisible = visibleIndexes.has(index);

              return (
                <motion.div
                  key={name?.common}
                  data-index={index}
                  className="country-card relative border border-gray-700 rounded-lg shadow-md p-4 flex flex-col items-center m-2 shadow-blue-200/40 hover:bg-gray-900 transition duration-100"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0.4, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05,boxShadow: '0 4px 10px rgba(228, 238, 244, 0.5)'}}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="relative flag-wave w-48 h-28">
                    <motion.img
                      className="w-full h-full object-cover border border-gray-700 rounded shadow shadow-blue-500/100"
                      src={flags?.png || flags?.svg}
                      alt={`${name?.common} flag`}
                      loading="lazy"
                    />
                    <div className="absolute flag-shimmer bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent h-full"></div>
                  </div>

                  <h2 className="text-xl font-bold text-blue-700 mb-1 mt-3">
                    {name?.common || 'N/A'}
                  </h2>
                  <p><strong className="text-blue-300">Capital:</strong> {capital || 'N/A'}</p>
                  <p><strong className="text-blue-300">Region:</strong> {region || 'N/A'}</p>

                  <NavLink
                    to={`/country/${name?.common || name?.official}`}
                    className="flex items-center mt-3 gap-2 bg-gray-600 hover:bg-blue-400 text-gray-900 py-1 px-4 rounded-full transition-transform hover:scale-105 shadow-md group"
                  >
                    Explore Country
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </NavLink>
                </motion.div>
              );
            })}
      </div>
    </div>
  );
};

export default Country;
