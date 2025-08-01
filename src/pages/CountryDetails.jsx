import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';
import data from '../api/countrydetails_api.json';

const CountryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await axios.get(
          `https://restcountries.com/v3.1/name/${encodeURIComponent(id)}?fullText=true`
        );
        const apiCountry = res.data[0];

        const normalize = (str) => str?.toLowerCase().trim();

        const localData = data.find((item) => {
          const localName = normalize(item.name);
          const commonName = normalize(apiCountry.name?.common);
          const officialName = normalize(apiCountry.name?.official);
          return localName === commonName || localName === officialName;
        });

        setCountry({ ...apiCountry, ...localData });
      } catch (err) {
        setError('Country not found. Please check your spelling.');
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [id]);

// convert to Wikipedia name format

  const formatForWikipedia = (name) => {
    if (!name) return 'Unknown_Country';
    return encodeURIComponent(name.trim().replace(/\s+/g, '_'));
  };


  if (loading)
    return <div className="text-center text-white m-10">Loading...</div>;

  if (error)
    return <div className="text-center text-red-500 m-10">{error}</div>;

  return (
    <div className="text-white border border-white rounded-md shadow-md flex flex-col md:flex-row gap-5 my-10 p-8 pt-10 pb-50 justify-start items-start ">

      {/* Flag and Map Section */}

      <div className="mt-30 w-full md:w-1/2 flex flex-col items-start">
        <div className="relative w-2/3 h-auto overflow-hidden rounded-md flag-wave shadow-md">
          <img
            src={country.flags?.png}
            alt={`Flag of ${country.name?.common || country.name || 'Unknown Country'}`}
            className="w-full h-auto rounded shadow-md"
          />
          <div className="flag-shimmer absolute top-0 left-0 w-full h-full "></div>

        </div>
        {/* Uncomment below to enable country map */}

        {/* <div className="w-full">
          <h2 className="text-xl font-semibold mb-2 text-center">Country Map</h2>
          <div className="w-full aspect-video">
            <iframe
              title="Country Map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                country.name?.common || country.name?.official || 'Unknown Country'
              )}&output=embed`}
              className="w-full h-full border-0 rounded"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div> */}

      </div>

      {/* Details Section */}

      <div className="w-full md:w-1/2 flex flex-col gap-4 mt-8">

        <h1 className="text-2xl mb-4 text-blue-500 font-semibold">
          Official Name: {country.name?.official || country.name || 'N/A'}
        </h1>

        <p><strong>Domain:</strong> {country.topLevelDomain?.join(', ') || 'N/A'}</p>
        <p><strong>Capital:</strong> {Array.isArray(country.capital) ? country.capital.join(', ') : country.capital || 'N/A'}</p>
        <p><strong>Calling Codes:</strong> {country.idd?.root && country.idd?.suffixes ?
          `${country.idd.root}${country.idd.suffixes[0]}` : 'N/A'}</p>
        <p><strong>Subregion:</strong> {country.subregion || 'N/A'}</p>
        <p><strong>Region:</strong> {country.region || 'N/A'}</p>
        <p><strong>Continents:</strong> {country.continents?.join(', ') || 'N/A'}</p>

        <p>
          <strong>Currencies:</strong>{' '}
          {country.currencies
            ? Object.values(country.currencies)
              .map((c) => `${c.name} (${c.symbol})`)
              .join(', ')
            : 'N/A'}
        </p>

        <p><strong>Independent:</strong> {country.independent ? 'Yes' : 'No'}</p>

        <p><strong>Borders:</strong> {country.borders?.length ? country.borders.join(', ') : 'None'}</p>

        <p><strong>Population:</strong> {country.population?.toLocaleString() || 'N/A'}</p>
        <p><strong>Area:</strong> {country.area?.toLocaleString()} km²</p>

        <p>
          <strong>Languages:</strong>{' '}
          {country.languages
            ? Array.isArray(country.languages)
              ? country.languages.map((lang) => lang.name).join(', ')
              : Object.values(country.languages).join(', ')
            : 'N/A'}
        </p>

        <p>
          <strong>Members of:</strong>{' '}
          {country.regionalBlocs && country.regionalBlocs.length
            ? country.regionalBlocs
              .map((bloc) => `${bloc.acronym} (${bloc.name})`)
              .join(', ')
            : 'N/A'}
        </p>

        <p><strong>Timezones:</strong> {country.timezones?.join(', ') || 'N/A'}</p>

        {/* Wikipedia & Map Buttons */}
        <div className=" flex flex-row btn-flex-custom gap-6 mt-9 p-5 overflow-auto">

          {/* ✅ Wikipedia Link  country page START*/}
          <button
            onClick={() =>
              window.open(
                `https://en.wikipedia.org/wiki/${formatForWikipedia(
                  country.name || country.official || 'Unknown_Country'
                )}`,
                '_blank',
                'noopener,noreferrer'
              )
            }
            className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            View on Wikipedia
          </button>
          {/* ////// wikipedia Link country page END //// */}

          {/*////// wikipedia HISTORY page START /////*/}
          <button
            onClick={() =>
              window.open(
                `https://en.wikipedia.org/w/index.php?title=${formatForWikipedia(
                  country.name || country.official
                )}&action=history`,
                '_blank',
                'noopener,noreferrer'
              )
            }
            className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            See History on Wikipedia
          </button>

          {/* wikipedia HISTORY page END */}


          {/* showing on MAP START*/}
          <button
            onClick={() =>
              window.open(
                country.maps?.googleMaps || '#',
                '_blank',
                'noopener,noreferrer'
              )
            }
            className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            View on Google Maps
          </button>
          {/* showing on MAP END */}

          {/* wikipedia & map link ENDS */}

        </div>

        <button
          onClick={() => navigate('/country')}
          className="m-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Go To Country Page
        </button>

      </div>
    </div>
  );
};

export default CountryDetails;
