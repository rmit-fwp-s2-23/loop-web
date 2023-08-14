import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import "./MovieDetailsPage.css"
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

function MovieDetailsPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const movieId = queryParams.get('id'); // Save Movie Id from the main page
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");



  const handleChange = (e) => {
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
    <div className="container">
      <h2 className="PageTitle">Movie Details</h2>
      {/* Add Movie Card and other Movie Details*/}

      {/*Review Form*/ }
      <form onSubmit={handleSubmit}>

      <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating} />

        <div>
          <label>Written Review:</label>
          <textarea
            name="writtenReview"
            value={review.writtenReview}
            onChange={handleChange}
            rows={6}
          />
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default MovieDetailsPage;

