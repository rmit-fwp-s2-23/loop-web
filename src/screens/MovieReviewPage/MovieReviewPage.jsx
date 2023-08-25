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
  const { isLoggedIn } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const isEditing = queryParams.get('editing');

  const reviews = JSON.parse(localStorage.getItem("reviews")) || {}; //Get Stored Reviews
  const reviewId = movieId + '_' + isLoggedIn; //Unique ID for storing or retrieving Reviews
  
  const [rating, setRating] = useState(isEditing ? reviews[reviewId].rating : 0);
  const [review, setReview] = useState(isEditing ? reviews[reviewId].review : "");




  const handleChange = (e) => {
    setReview(e.target.value);
    
      if(review.length === 249){
        setErrorMessage("You cannot enter more than 250 characters");
      } else {
        setErrorMessage("");
      }
    
  };

  const deleteClick = () => {
    delete reviews[reviewId];
    localStorage.setItem("reviews", JSON.stringify(reviews));
    navigate('/movie-details?id=' + movieId)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(review === ''){
      setErrorMessage("Please provide a written review")
    } else if (rating < 1) {
      setErrorMessage("Please provide a Rating")
    } else {
    // Handle storing movie review in localStorage
    console.log(reviewId);
    reviews[reviewId] = {isLoggedIn, movieId, rating, review};
    localStorage.setItem("reviews", JSON.stringify(reviews));
    console.log("Movie review submitted", review);
    navigate('/movie-details?id=' + movieId)
    }
  };

  return (
    <div className="container">
      <h2 className="PageTitle">Movie Review</h2>
      
      <form onSubmit={handleSubmit}>

      <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating} />

        <div>
          <label>Written Review:</label>
          <textarea
            name="writtenReview"
            value={review}
            onChange={handleChange}
            rows={6}
            maxLength={250}
          />
        </div>
        <div className="errorMessage">
            <p>{errorMessage}</p>
        </div>
        {isEditing && <button type="button" id="delete-button" onClick={deleteClick}>Delete</button>}
        <button className="formButton" type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default MovieReviewPage;

