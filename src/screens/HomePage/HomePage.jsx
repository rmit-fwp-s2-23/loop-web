import React from "react";
import {useNavigate} from "react-router-dom";
import "./HomePage.css";

function HomePage() {

  let navigate = useNavigate() //Navigator to link to other pages

  // Sample data
  const upcomingMovies = [
    { id: 1, title: "Oppenheimer", sessionTime: "11:00 AM" },
    { id: 2, title: "Barbie", sessionTime: "1:00 PM" },
  ];

  const handleMovieClick = (movieId) => {
    navigate('/movie-details?id='+movieId);
  }

  return (
    <div className="container">
      <div>
      <h1 className="PageTitle">Upcoming Movies</h1>
      </div>
      <ul id="MovieList">
        {upcomingMovies.map((movie) => (
          <li onClick={() => handleMovieClick(movie.id)} id="MovieCard" key={movie.id}>
            <strong>{movie.title}</strong> - {movie.sessionTime}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
