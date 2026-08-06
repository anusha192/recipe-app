import React from "react";
import { Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Cuasine = () => {
  const featureArea = [
    "American",
    "British",
    "Canadian",
    "Chinese",
    "Indian",
    "Italian",
    "Mexican",
    "Russian",
    "Thai",
  ];

  return (
    <div className="bg-gray-900/80 border-b border-gray-800 shadow-inner shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 overflow-x-auto scrollbar-hide">
        <div className="flex items-center space-x-4 py-3">
          <div className="flex items-center text-lg font-bold text-yellow-400 whitespace-nowrap pr-3">
            <Globe className="w-5 h-5 mr-2" />
            Global Cuisines:
          </div>

          {featureArea.map((area) => (
            <Link
              key={area}
              to={`/cuisine/${area}`}
              className="cursor-pointer text-gray-200 text-sm whitespace-nowrap font-medium bg-gray-700 hover:bg-blue-600 hover:text-white rounded-full px-4 py-1.5 transition duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-800/50"
            >
              {area}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cuasine;