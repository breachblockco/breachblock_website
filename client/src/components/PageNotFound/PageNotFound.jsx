import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 text-white bg-gradient-to-r from-[#0a6ed9] to-[#064281]">
      <h1 className="text-7xl sm:text-9xl font-extrabold mb-6 drop-shadow-md animate-pulse">
        404
      </h1>
      <p className="text-xl sm:text-2xl font-semibold mb-4 text-center">
        Oops! The page you're looking for doesn't exist.
      </p>
      <p className="text-sm sm:text-lg text-gray-200 mb-8 text-center">
        It seems you’ve hit a dead end. Let’s get you back on track!
      </p>
      <Link
        to="/"
        className="px-6 py-2 sm:px-8 sm:py-3 bg-white text-[#064281] rounded-lg shadow-lg font-bold hover:bg-gray-200 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default PageNotFound;
