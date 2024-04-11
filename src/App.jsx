// App.js
import React, { useState } from 'react';
import MovieCard from './components/MovieCard';
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief who enters the dreams of others to steal secrets",
      posterURL: "./poster/inceptionposter.jpg",
      trailerURL: "https://www.youtube.com/watch?v=Jvurpf91omw",
      rating: 8.8,
    },
    // Add more initial movies as needed

    {
        title: "Coming to America",
        description: "Coming to America is a classic comedy film that follows the story of an African prince who travels to New York City undercover to find a wife who will love him for his character, not his wealth and royal status.",
        posterURL: "./poster/america.jpg",
        trailerURL: "https://www.youtube.com/watch?v=ZDme5Y5E-bI",
        rating: 8.5,
    },

   
    {
        title: "Black Panther",
        description: "Black Panther follows T'Challa, the newly crowned king of the technologically advanced African nation of Wakanda, as he grapples with the responsibilities of leadership and confronts a formidable adversary threatening to challenge his kingdom's future.",
        posterURL: "./poster/BlackPanther.jpeg",
        trailerURL: "https://www.youtube.com/watch?v=xjDjIWPwcPU",
        rating: 9.5,
    },

  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilter = (name, value) => {
    if (name === 'title') {
      const filtered = movies.filter(movie => movie.title.toLowerCase().includes(value.toLowerCase()));
      setFilteredMovies(filtered);
    } else if (name === 'rating') {
      const filtered = movies.filter(movie => movie.rating >= parseFloat(value));
      setFilteredMovies(filtered);
    }
  };

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
    setFilteredMovies([...movies, movie]);
  };

  return (
    <div className="app">
      <h1>Movie App</h1>
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
      {/* Add a form or button to add new movies */}
          </div>
  );
};

export default App;
