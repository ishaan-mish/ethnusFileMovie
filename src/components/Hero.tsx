
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1489599043532-1108b9c3cf1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')"
        }}
      />
      
      <button className="absolute left-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-200 z-10">
        <ChevronLeft className="w-8 h-8 text-white" />
      </button>
      
      <button className="absolute right-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-200 z-10">
        <ChevronRight className="w-8 h-8 text-white" />
      </button>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Bringing the Big Screen to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
            Your Screen
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-2xl mx-auto">
          Discover, critique, and celebrate movies
        </p>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          with honest reviews and fresh takes on every film
        </p>
        
        <button className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105">
          Discover More
        </button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
        <div className="w-3 h-3 bg-white/50 rounded-full"></div>
        <div className="w-3 h-3 bg-white/50 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
