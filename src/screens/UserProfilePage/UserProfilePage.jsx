import React from "react";

function UserProfilePage() {
  // Sample user data (assuming it's fetched from localStorage)
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <h2>User Profile</h2>
      {user ? (
        <>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
}

export default UserProfilePage;
