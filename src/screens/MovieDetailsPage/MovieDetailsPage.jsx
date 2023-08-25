import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import profile from '../../assets/profile.svg'
import './MovieDetailsPage.css'
import { useAuth } from "../../AuthGlobal";

function MovieDetailsPage() {
    const location = useLocation();
    let navigate = useNavigate() //Navigator to link to other pages
    const queryParams = new URLSearchParams(location.search);
    const SelectedMovieId = queryParams.get('id');

    const upcomingMovies = JSON.parse(localStorage.getItem('upcomingMovies')) || [];

    const { isLoggedIn } = useAuth();

    const selectedMovie = upcomingMovies.find(movie => movie.id === Number(SelectedMovieId));    


    //Hard coded movie show times
    const movieShowTimes = [
        { MovieId: 1, cinema: "CBD", sessionTimes: ["11:00 AM", "12:00 PM", "02:00 PM"] },
        { MovieId: 1, cinema: "Chadstone", sessionTimes: ["5:00 PM", "10:00 PM"] },
        { MovieId: 1, cinema: "Forest Hill", sessionTimes: ["2:00 PM", "08:00 PM"] },
        { MovieId: 1, cinema: "Frankston", sessionTimes: ["8:20 AM"] },
        { MovieId: 1, cinema: "Docklands", sessionTimes: ["04:30 PM", "07:40 PM", "11:10 PM"] },
        { MovieId: 1, cinema: "Sunshine", sessionTimes: ["11:30 AM", "03:10 PM", "10:15 PM"] },

        { MovieId: 2, cinema: "CBD", sessionTimes: ["11:00 AM", "12:00 PM", "02:00 PM"] },
        { MovieId: 2, cinema: "Victoria Gardens", sessionTimes: ["07:00 PM", "09:20 PM"] },
        { MovieId: 2, cinema: "Highpoint", sessionTimes: ["11:00 AM"] },
        { MovieId: 2, cinema: "Greensborough", sessionTimes: ["02:40 PM", "04:30 PM", "07:15 PM"] },
        { MovieId: 2, cinema: "Watergardens", sessionTimes: ["10:00 AM", "10:55 AM", "02:00 PM"] },
        { MovieId: 2, cinema: "Broadmedows", sessionTimes: ["11:00 AM", "12:00 PM", "02:00 PM"] },

        { MovieId: 3, cinema: "CBD", sessionTimes: ["11:00 AM", "12:00 PM", "02:00 PM"] },
        { MovieId: 3, cinema: "Chadstone", sessionTimes: ["5:00 PM", "10:00 PM"] },
        { MovieId: 3, cinema: "Forest Hill", sessionTimes: ["2:00 PM", "08:00 PM"] },
        { MovieId: 3, cinema: "Frankston", sessionTimes: ["8:20 AM"] },
        { MovieId: 3, cinema: "Docklands", sessionTimes: ["04:30 PM", "07:40 PM", "11:10 PM"] },
        { MovieId: 3, cinema: "Sunshine", sessionTimes: ["11:30 AM", "03:10 PM", "10:15 PM"] },

        { MovieId: 4, cinema: "CBD", sessionTimes: ["11:00 AM", "12:00 PM", "02:00 PM"] },
        { MovieId: 4, cinema: "Victoria Gardens", sessionTimes: ["07:00 PM", "09:20 PM"] },
        { MovieId: 4, cinema: "Highpoint", sessionTimes: ["11:00 AM"] },
        { MovieId: 4, cinema: "Greensborough", sessionTimes: ["02:40 PM", "04:30 PM", "07:15 PM"] },
        { MovieId: 4, cinema: "Watergardens", sessionTimes: ["10:00 AM", "10:55 AM", "02:00 PM"] },
        { MovieId: 4, cinema: "Broadmedows", sessionTimes: ["11:00 AM", "12:00 PM", "02:00 PM"] },

        { MovieId: 5, cinema: "CBD", sessionTimes: ["11:00 AM", "12:00 PM", "02:00 PM"] },
        { MovieId: 5, cinema: "Chadstone", sessionTimes: ["5:00 PM", "10:00 PM"] },
        { MovieId: 5, cinema: "Forest Hill", sessionTimes: ["2:00 PM", "08:00 PM"] },
        { MovieId: 5, cinema: "Frankston", sessionTimes: ["8:20 AM"] },
        { MovieId: 5, cinema: "Docklands", sessionTimes: ["04:30 PM", "07:40 PM", "11:10 PM"] },
        { MovieId: 5, cinema: "Sunshine", sessionTimes: ["11:30 AM", "03:10 PM", "10:15 PM"] },

        { MovieId: 6, cinema: "CBD", sessionTimes: ["11:00 AM", "12:00 PM", "02:00 PM"] },
        { MovieId: 6, cinema: "Victoria Gardens", sessionTimes: ["07:00 PM", "09:20 PM"] },
        { MovieId: 6, cinema: "Highpoint", sessionTimes: ["11:00 AM"] },
        { MovieId: 6, cinema: "Greensborough", sessionTimes: ["02:40 PM", "04:30 PM", "07:15 PM"] },
        { MovieId: 6, cinema: "Watergardens", sessionTimes: ["10:00 AM", "10:55 AM", "02:00 PM"] },
        { MovieId: 6, cinema: "Broadmedows", sessionTimes: ["11:00 AM", "12:00 PM", "02:00 PM"] },

        { MovieId: 7, cinema: "CBD", sessionTimes: ["11:00 AM", "12:00 PM", "02:00 PM"] },
        { MovieId: 7, cinema: "Chadstone", sessionTimes: ["5:00 PM", "10:00 PM"] },
        { MovieId: 7, cinema: "Forest Hill", sessionTimes: ["2:00 PM", "08:00 PM"] },
        { MovieId: 7, cinema: "Frankston", sessionTimes: ["8:20 AM"] },
        { MovieId: 7, cinema: "Docklands", sessionTimes: ["04:30 PM", "07:40 PM", "11:10 PM"] },
        { MovieId: 7, cinema: "Sunshine", sessionTimes: ["11:30 AM", "03:10 PM", "10:15 PM"] },

        { MovieId: 8, cinema: "CBD", sessionTimes: ["11:00 AM", "12:00 PM", "02:00 PM"] },
        { MovieId: 8, cinema: "Victoria Gardens", sessionTimes: ["07:00 PM", "09:20 PM"] },
        { MovieId: 8, cinema: "Highpoint", sessionTimes: ["11:00 AM"] },
        { MovieId: 8, cinema: "Greensborough", sessionTimes: ["02:40 PM", "04:30 PM", "07:15 PM"] },
        { MovieId: 8, cinema: "Watergardens", sessionTimes: ["10:00 AM", "10:55 AM", "02:00 PM"] },
        { MovieId: 8, cinema: "Broadmedows", sessionTimes: ["11:00 AM", "12:00 PM", "02:00 PM"] },
    ];

    const reviews = JSON.parse(localStorage.getItem('reviews')) || {};

    let totalRating = 0; //Total Rating updated to calculate average
    let reviewCount = 0;
    let reviewSubmitted = false; //Boolean for checking whether user has already submitted a review

    for (const reviewId in reviews) {
        const review = reviews[reviewId];
        if (reviewId.startsWith(SelectedMovieId)) {
            totalRating += parseInt(review.rating, 10);
            reviewCount++;

            if(isLoggedIn === review.isLoggedIn){
                reviewSubmitted = true;
            }
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
                        if (SelectedMovieId === location.MovieId.toString()) {
                            return (
                                <div key={location.MovieId}>
                                    <h4 id="cinema-location">{location.cinema}</h4>
                                    {location.sessionTimes.map((showTime, index) => (
                                        <div className="cinema-showtime" key={index}>{showTime}</div>
                                    ))}
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>

                <div className="card-item" id="movie-reviews">
                    <div id="average-rating">{averageRating} ★</div>
                    <div id="review-link-container">
                        {isLoggedIn !== '' && !reviewSubmitted && <a id="review-link" onClick={() => navigate('/movie-review?id=' + SelectedMovieId)}>Leave a review</a>}
                        {isLoggedIn !== '' && reviewSubmitted && <a id="review-link" onClick={() => navigate('/movie-review?id=' + SelectedMovieId+'&editing=true')}>Edit or Delete Your Review</a>}
                        {isLoggedIn === '' && <a id="review-link" onClick={() => navigate('/signin')}>Sign in to leave a review</a>}
                    </div>
                    <div id="reviews">
                        {Object.entries(reviews).map(([reviewId, review]) => {
                            if (reviewId.startsWith(SelectedMovieId)) {
                                return (
                                    <div key={reviewId} className="user-review" id={review.isLoggedIn === isLoggedIn && 'user-review-editable'}>
                                        <div className="rating">{review.rating}★ </div>
                                        <div className="review-text">{review.review}</div>
                                        <div className="review-profile"><img src={profile} onClick={console.log("hi")}></img></div>
                                    </div>
                                    
                                );
                            }
                            return null;
                        })}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetailsPage;
