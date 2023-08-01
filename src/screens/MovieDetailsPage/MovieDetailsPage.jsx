import React, { useState } from "react";
import { useLocation } from 'react-router-dom';

function MovieDetailsPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const movieId = queryParams.get('id'); // Save Movie Id from the main page

  const [review, setReview] = useState({
    stars: 0,
    writtenReview: "",
  });

  const handleChange = (e) => {
    setReview({
      ...review,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle storing movie review in localStorage
    const reviews = JSON.parse(localStorage.getItem("reviews")) || {};
    reviews[movieId] = review;
    localStorage.setItem("reviews", JSON.stringify(reviews));
    console.log("Movie review submitted", review);
  };

  return (
    <div>
      <h2>Movie Details</h2>
      {/* Add Movie Card and other Movie Details*/}

      {/*Review Form*/ }
      <form onSubmit={handleSubmit}>
        <div>
          <label>Stars:</label>
          <input
            type="number"
            name="stars"
            min="0"
            max="5"
            value={review.stars}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Written Review:</label>
          <textarea
            name="writtenReview"
            value={review.writtenReview}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default MovieDetailsPage;

