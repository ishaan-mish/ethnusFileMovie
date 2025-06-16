
import React, { useState } from 'react';
import { Heart } from 'lucide-react';

interface MovieCardProps {
  title: string;
  image: string;
  type?: string;
  isFavorite?: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, image, type, isFavorite = false }) => {
  const [favorite, setFavorite] = useState(isFavorite);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <div className="group relative bg-gray-900 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{title}</h3>
        {type && (
          <p className="text-sm text-gray-300 mb-3">Type: {type}</p>
        )}
        <button
          onClick={toggleFavorite}
          className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-200 ${
            favorite 
              ? 'bg-teal-500 text-white' 
              : 'bg-black/50 text-white hover:bg-teal-500'
          }`}
        >
          <Heart className={`w-5 h-5 ${favorite ? 'fill-current' : ''}`} />
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
