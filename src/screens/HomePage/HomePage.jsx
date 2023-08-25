import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import Carousel from "../../components/Carousel/Carousel";

function HomePage() {
  let navigate = useNavigate() //Navigator to link to other pages

  // Retrieve upcomingMovies from local storage
  const storedUpcomingMovies = localStorage.getItem('upcomingMovies');
  const upcomingMovies = storedUpcomingMovies ? JSON.parse(storedUpcomingMovies) : [];

  return (
    <div className="container">
      <div>
        <h1 className="PageTitle">Upcoming Movies</h1>
      </div>
      <Carousel upcomingMovies={upcomingMovies} />

      <div className="information-section">
        <h2>About Loop Web</h2>
        <p>Loop Web is s a long running cinema chain operator known for its exceptional movie experiences</p>
        <h3>Cinema Locations</h3>
        <p>We have cinemas all throughout Melbourne and are constantly growing</p>
        <h3>What Sets Us Apart</h3>
        <p>We are commited to your entertainment with state-of-the-art technology, affordable rates, comfortable seating, and a diverse selection of films from all around the world</p>
      </div>
    </div>
  );
}

export default HomePage;