// Retrive list of current users and add new user to list
export const registerUser = (userDetailsString) => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || {};
    const userDetails = JSON.parse(userDetailsString);
    
    existingUsers[userDetails.email] = userDetails;
  
    localStorage.setItem('users', JSON.stringify(existingUsers));
};