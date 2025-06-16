
import React from 'react';
import { Heart } from 'lucide-react';

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-teal-400">Flick</span>
            <span className="text-2xl font-bold text-white">Finder</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('movies')}
              className="text-white hover:text-teal-400 transition-colors duration-200 font-medium"
            >
              Movies
            </button>
            <button 
              onClick={() => scrollToSection('shows')}
              className="text-white hover:text-teal-400 transition-colors duration-200 font-medium"
            >
              Shows
            </button>
            <button 
              onClick={() => scrollToSection('upcoming')}
              className="text-white hover:text-teal-400 transition-colors duration-200 font-medium"
            >
              Upcoming
            </button>
            <button 
              onClick={() => scrollToSection('favorites')}
              className="text-white hover:text-teal-400 transition-colors duration-200 font-medium"
            >
              Favourites
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-white hover:text-teal-400 transition-colors duration-200 font-medium"
            >
              FAQ's
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              CW
            </div>
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-full transition-colors duration-200 flex items-center space-x-2">
              <Heart className="w-4 h-4" />
              <span>Favorite</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
