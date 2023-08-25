import React from "react";
import { useNavigate } from "react-router-dom";
import "./Carousel.css"; 

//Carousel for movie list
function Carousel({ upcomingMovies }) {
  let navigate = useNavigate();

  const handleMovieClick = (movieId) => {
    navigate('/movie-details?id=' + movieId);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {upcomingMovies.map((movie) => (
          <div
            className="carousel-item"
            id="movie-card"
            key={movie.id}
            onClick={() => handleMovieClick(movie.id)}
          >
            <img src={movie.image} alt={movie.title} />
            <strong>{movie.title}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
