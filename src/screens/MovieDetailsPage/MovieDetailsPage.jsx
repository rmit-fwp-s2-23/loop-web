import React from "react";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import movieImage from '../../assets/profile.svg'
import './MovieDetailsPage.css'

function MovieDetailsPage() {
    const location = useLocation();
    let navigate = useNavigate() //Navigator to link to other pages
    const queryParams = new URLSearchParams(location.search);
    const SelectedMovieId = queryParams.get('id');

    const upcomingMovies = JSON.parse(localStorage.getItem('upcomingMovies')) || [];

    const selectedMovie = upcomingMovies.find(movie => movie.id === Number(SelectedMovieId));



    const movieShowTimes = [
        { MovieId: 1, cinema: "CBD", sessionTimes: ["11:00 AM", "12:00 PM", "02:00 PM"] },
        { MovieId: 1, cinema: "Chadstone", sessionTimes: ["5:00 PM", "10:00 PM"] },
        { MovieId: 2, cinema: "CBD", sessionTimes: ["11:00 AM", "12:00 PM", "02:00 PM"] },
        { MovieId: 2, cinema: "Clayton", sessionTimes: ["11:00 AM", "12:00 PM", "02:00 PM"] },

    ];

    const reviews = JSON.parse(localStorage.getItem('reviews')) || {};

    let totalRating = 0;
    let reviewCount = 0;

    for (const reviewId in reviews) {
        const review = reviews[reviewId];
        if (reviewId.startsWith(SelectedMovieId)) {
            totalRating += parseInt(review.rating, 10);
            reviewCount++;
        }
    }

    const averageRating = reviewCount > 0 ? (totalRating / reviewCount).toFixed(1) : 0;



    return (
        <div className="container" id="movie-details">
            <h2 className="PageTitle">{selectedMovie.title}</h2>

            <div className="card-container">
                <div className="card-item" id="movie-image">
                    <img alt="Movie" src={selectedMovie ? selectedMovie.image : ""} />
                </div>

                

                <div className="card-item" id="movie-timings">
                    {movieShowTimes.map((location) => {
                        if (SelectedMovieId === location.MovieId.toString()) { // Convert location.Movie to a string for comparison
                            return (
                                <div key={location.MovieId}> {/* Use location.Movie as the key */}
                                    <h4>{location.cinema}</h4>
                                    {location.sessionTimes.map((showTime, index) => (
                                        <div key={index}>{showTime}</div>
                                    ))}
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>

                <div className="card-item" id="movie-reviews">
                    <div id="average-rating">{averageRating} ★</div>
                    <div id="reviews">
                        {Object.entries(reviews).map(([reviewId, review]) => {
                            if (reviewId.startsWith(SelectedMovieId)) {
                                return (
                                    <div key={reviewId} className="user-review">
                                        <div className="rating">{review.rating}★ </div>
                                        <div className="review-text">{review.review}</div>
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>
                    <div id="review-link-container">
                        <a id="review-link" onClick={() => navigate('/movie-review?id=' + SelectedMovieId)}>Leave a review</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetailsPage;
