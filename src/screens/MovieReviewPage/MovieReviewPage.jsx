import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import "./MovieReviewPage.css"
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useAuth } from "../../AuthGlobal";

function MovieReviewPage() {
  const location = useLocation();
  let navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const movieId = queryParams.get('id'); // Save Movie Id from the main page
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const { isLoggedIn } = useAuth();



  const handleChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle storing movie review in localStorage
    const reviewId = movieId + '_' + isLoggedIn;
    const reviews = JSON.parse(localStorage.getItem("reviews")) || {};
    reviews[reviewId] = {rating, review};
    localStorage.setItem("reviews", JSON.stringify(reviews));
    console.log("Movie review submitted", review);
    navigate('/movie-details?id=' + movieId)
  };

  return (
    <div className="container">
      <h2 className="PageTitle">Movie Review</h2>
      {/* Add Movie Card and other Movie Details*/}

      {/*Review Form*/ }
      <form onSubmit={handleSubmit}>

      <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating} />

        <div>
          <label>Written Review:</label>
          <textarea
            name="writtenReview"
            value={review}
            onChange={handleChange}
            rows={6}
          />
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default MovieReviewPage;

