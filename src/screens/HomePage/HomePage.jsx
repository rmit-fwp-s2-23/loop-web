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
            <img src={movie.image} alt={movie.title} />
            <strong>{movie.title}</strong>
          </li>
        ))}
      </ul>
      
      {/* Information Section */}
      <div className="information-section">
        <h2>About Loop Web</h2>
        <p>Loop Web is a leading cinema chain known for its exceptional movie experiences.</p>
        <h3>Cinema Locations</h3>
        <p>We have cinemas in major cities, providing convenient access to movie lovers.</p>
        <h3>What Sets Us Apart</h3>
        <p>We differentiate ourselves through state-of-the-art technology, comfortable seating, and a diverse selection of films.</p>
      </div>
    </div>
  );
}

export default HomePage;

// ...rest of your CSS styles
