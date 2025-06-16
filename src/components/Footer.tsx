
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold text-teal-400">Flick</span>
              <span className="text-2xl font-bold text-white">Finder</span>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400 hover:text-white cursor-pointer transition-colors">Home</p>
              <p className="text-gray-400 hover:text-white cursor-pointer transition-colors">About us</p>
              <p className="text-gray-400 hover:text-white cursor-pointer transition-colors">Contact us</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-teal-400 font-bold text-lg mb-6">Products</h3>
            <div className="space-y-2">
              <p className="text-gray-400 hover:text-white cursor-pointer transition-colors">TV Show</p>
              <p className="text-gray-400 hover:text-white cursor-pointer transition-colors">Web Series</p>
              <p className="text-gray-400 hover:text-white cursor-pointer transition-colors">Hollywood</p>
              <p className="text-gray-400 hover:text-white cursor-pointer transition-colors">Bollywood</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-teal-400 font-bold text-lg mb-6">Resources</h3>
            <div className="space-y-2">
              <p className="text-gray-400 hover:text-white cursor-pointer transition-colors">FAQs</p>
              <p className="text-gray-400 hover:text-white cursor-pointer transition-colors">Search Movie</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-teal-400 font-bold text-lg mb-6">Newsletter</h3>
            <input
              type="email"
              placeholder="mail@pageone.com"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded mb-4 text-white"
            />
            <div className="flex items-center space-x-2 mb-4">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm text-gray-400">
                I agree with <span className="text-teal-400">Privacy Policy</span> and <span className="text-teal-400">Terms of Condition</span>
              </span>
            </div>
            <button className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded transition-colors duration-200">
              Send
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>©FlickFinder 2024, All rights reserved. Developed by Shubham Mishra</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
