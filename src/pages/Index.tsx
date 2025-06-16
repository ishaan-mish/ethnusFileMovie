
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SearchSection from '../components/SearchSection';
import MovieGrid from '../components/MovieGrid';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Index = () => {
  const movies = [
    {
      id: 1,
      title: "CKY 4 Latest & Greatest",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isFavorite: true
    },
    {
      id: 2,
      title: "The Latest Buzz",
      image: "https://images.unsplash.com/photo-1489599043532-1108b9c3cf1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      type: "series",
      isFavorite: true
    },
    {
      id: 3,
      title: "River's End: California's Latest",
      image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isFavorite: false
    },
    {
      id: 4,
      title: "Avengers: Endgame and the Latest Captain Marvel Outrage!!",
      image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      isFavorite: true
    }
  ];

  const shows = [
    {
      id: 5,
      title: "Breaking Bad",
      image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      type: "Drama Series"
    },
    {
      id: 6,
      title: "Stranger Things",
      image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      type: "Sci-Fi Series"
    },
    {
      id: 7,
      title: "The Crown",
      image: "https://images.unsplash.com/photo-1489599043532-1108b9c3cf1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      type: "Historical Drama"
    },
    {
      id: 8,
      title: "The Mandalorian",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      type: "Space Opera"
    }
  ];

  const upcoming = [
    {
      id: 9,
      title: "Dune: Part Two",
      image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      type: "Sci-Fi Epic"
    },
    {
      id: 10,
      title: "Avatar 3",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      type: "Fantasy Adventure"
    },
    {
      id: 11,
      title: "Marvel's Fantastic Four",
      image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MH89waG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      type: "Superhero"
    },
    {
      id: 12,
      title: "The Batman 2",
      image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      type: "Action Thriller"
    }
  ];

  const favorites = movies.filter(movie => movie.isFavorite);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      
      <div className="container mx-auto px-6">
        <SearchSection />
        
        <section id="movies" className="py-20">
          <MovieGrid movies={movies} title="FEATURED MOVIES" />
        </section>
        
        <section id="shows" className="py-20">
          <MovieGrid movies={shows} title="POPULAR TV SHOWS" />
        </section>
        
        <section id="upcoming" className="py-20">
          <MovieGrid movies={upcoming} title="UPCOMING RELEASES" />
        </section>
        
        <section id="favorites" className="py-20">
          <MovieGrid movies={favorites} title="YOUR FAVORITES" />
        </section>
      </div>
      
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
