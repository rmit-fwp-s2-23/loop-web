// Retrive list of current users and add new user to list
export const registerUser = (userDetailsString) => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || {};
    const userDetails = JSON.parse(userDetailsString);

    userDetails.dateOfJoining = new Date().toISOString().split('T')[0];

    existingUsers[userDetails.email] = userDetails;
  
    localStorage.setItem('users', JSON.stringify(existingUsers));
};

export const submitReview = (userReviewString) => {
    const existingReviews = JSON.parse(localStorage.getItem('reviews')) || {};
    const userReview = JSON.parse(userReviewString);

    existingReviews[userReview.id] = userReview;

    localStorage.setItem('reviews', JSON.stringify(existingReviews));
}