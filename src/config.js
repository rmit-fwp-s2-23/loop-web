// Retrive list of current users and add new user to list
export const registerUser = (userDetailsString) => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || {};
    const userDetails = JSON.parse(userDetailsString);

    userDetails.dateOfJoining = new Date().toISOString().split('T')[0];

    existingUsers[userDetails.email] = userDetails;

    console.log(userDetails.dateOfJoining);
  
    localStorage.setItem('users', JSON.stringify(existingUsers));
};