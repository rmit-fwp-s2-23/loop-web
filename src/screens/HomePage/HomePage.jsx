import React from "react";
import {useNavigate} from "react-router-dom";

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
    <div>
      <h1>Upcoming Movies</h1>
      <ul>
        {upcomingMovies.map((movie) => (
          <li key={movie.id}>
            <button onClick={() => handleMovieClick(movie.id)}><strong>{movie.title}</strong></button> - {movie.sessionTime}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
