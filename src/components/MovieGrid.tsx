
import React from 'react';
import MovieCard from './MovieCard';

interface Movie {
  id: number;
  title: string;
  image: string;
  type?: string;
  isFavorite?: boolean;
}

interface MovieGridProps {
  movies: Movie[];
  title: string;
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies, title }) => {
  return (
    <div className="mb-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            image={movie.image}
            type={movie.type}
            isFavorite={movie.isFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;
