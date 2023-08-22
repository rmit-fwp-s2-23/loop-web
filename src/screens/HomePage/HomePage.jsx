import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage() {

  let navigate = useNavigate() //Navigator to link to other pages

  // Retrieve upcomingMovies from local storage
  const storedUpcomingMovies = localStorage.getItem('upcomingMovies');
  const upcomingMovies = storedUpcomingMovies ? JSON.parse(storedUpcomingMovies) : [];

  const handleMovieClick = (movieId) => {
    navigate('/movie-details?id=' + movieId);
  }

  return (
    <div className="container">
      <div>
        <h1 className="PageTitle">Upcoming Movies</h1>
      </div>
      <ul id="MovieList">
        {upcomingMovies.map((movie) => (
          <li onClick={() => handleMovieClick(movie.id)} className="card-item" id="MovieCard" key={movie.id}>
            <img src={movie.image} />
            <strong>{movie.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
