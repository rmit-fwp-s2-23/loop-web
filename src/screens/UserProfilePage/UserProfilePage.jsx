import React from "react";
import { useAuth } from "../../AuthGlobal";

function UserProfilePage() {

  const { isLoggedIn } = useAuth();

  console.log(isLoggedIn);


  const users = JSON.parse(localStorage.getItem("users"));
  const user = users[isLoggedIn];


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
