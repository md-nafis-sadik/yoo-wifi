import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800 animate-bounce">404</h1>
        <p className="text-2xl font-semibold text-gray-600 mt-4">Page Not Found</p>
        <p className="text-gray-500 mt-2 px-4 md:px-0">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block bg-main-600 hover:bg-main-500 text-white px-6 py-3 rounded-md font-semibold transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
