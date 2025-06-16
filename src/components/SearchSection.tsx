
import React, { useState } from 'react';

const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'Marvel Movie',
    'Funny Movie', 
    'Animation Movie',
    'Web Series Movie'
  ];

  return (
    <div className="py-16 text-center">
      <h2 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
        MOVIE LIST
      </h2>
      
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className="px-6 py-3 border-2 border-teal-500 text-teal-400 rounded-full hover:bg-teal-500 hover:text-white transition-all duration-200 font-medium"
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="max-w-2xl mx-auto relative">
        <input
          type="text"
          placeholder="Search here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-6 py-4 bg-gray-800 text-white rounded-full border border-gray-700 focus:border-teal-500 focus:outline-none text-lg"
        />
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <div className="w-6 h-6 bg-teal-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
