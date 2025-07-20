import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error= useRouteError()
    console.log(error)
return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Oops! Page not found.</h2>
        <p className="mb-6 text-gray-300">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <NavLink to='/'><button className="px-6 py-2 bg-blue-600 rounded hover:bg-blue-700 transition">Go to Home</button></NavLink>
      
      </div>
    </div>
  );
}

export default ErrorPage
