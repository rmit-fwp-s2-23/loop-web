import React, { useState } from "react";
import { useAuth } from "../../AuthGlobal";
import './UserProfilePage.css'
import { useNavigate } from "react-router-dom";
import profile from '../../assets/profile.svg'
import bin from '../../assets/bin.svg'
import edit from '../../assets/edit.svg'
import { Popup } from "../../components/Popup/Popup";

function UserProfilePage() {

  let navigate = useNavigate();

  const { isLoggedIn } = useAuth();
  const { setIsLoggedIn } = useAuth();
  const users = JSON.parse(localStorage.getItem("users"));
  const user = users[isLoggedIn];
  const [open, setOpen] = useState(false); //State for showing Pop Up
  const [errorMessage, setErrorMessage] = useState("");



  const [isEditing, setIsEditing] = useState(false);
  const [editedname, setEditedname] = useState(user.name);
  const [editedEmail, setEditedEmail] = useState(user.email);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  }

  const handlenameChange = (event) => {
    setEditedname(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEditedEmail(event.target.value);
  };

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }


  const handleSaveChanges = (e) => {
    // Check if the edited email is valid
    if (!isValidEmail(editedEmail)) {
      setErrorMessage("Email address is not valid");
      return;
    }

    if (editedEmail !== isLoggedIn) //Change in Email
    {
      // Update user data in the localStorage
      const updatedUser = {
        ...users[isLoggedIn], // Copy existing user data
        name: editedname,
        email: editedEmail,
      };

      // Remove the old email key and update with the new email key
      const updatedUsers = {
        ...users,
        [editedEmail]: updatedUser,
      };
      delete updatedUsers[user.email];

      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }
    else if (editedname !== users[isLoggedIn].name && editedEmail === isLoggedIn) //Change in just name
    {
      users[isLoggedIn].name = editedname;
      localStorage.setItem("users", JSON.stringify(users));
    }



    setIsLoggedIn(editedEmail);
    setIsEditing(false); // Exit edit mode

    console.log(isLoggedIn);
  };



  //Function to handle delete click from popup
  const deletePopupFunction = () => {
    setIsLoggedIn('');
    navigate('/')
    delete users[user.email]
    localStorage.setItem("users", JSON.stringify(users));
  }

  const closePopupFunction = () => {
    setOpen(false);
  }


  const handleDeleteClick = () => {
    setOpen(true);
  }

  return (
    <div className="container">
      <h2 className="PageTitle">User Profile</h2>
      {user ? (
        <div>
          <div className="user-card">
            <img id="profileImage" src={profile} />
            {isEditing ? (
              <>
                <input
                  id="name-edit"
                  type="text"
                  value={editedname}
                  onChange={handlenameChange}
                />
                <input
                  id="email-edit"
                  type="email"
                  value={editedEmail}
                  onChange={handleEmailChange}
                  required
                />
              </>
            ) : (
              <>
                <div>{user.name}</div>
                <div>{user.email}</div>
              </>
            )}
            <div className="user-profile-actions">
              {!isEditing ? (
                <>
                  <img id="bin-image" onClick={handleDeleteClick} src={bin} />
                  <img id="edit-image" onClick={handleEditToggle} src={edit} />
                </>
              ) : (
                <>
                  <div className="errorMessage">
                    <p>{errorMessage}</p>
                  </div>
                  <button className="formButton" onClick={handleSaveChanges}>Save</button>
                </>
              )}
            </div>

            <div id="joiningDate">Date of joining: {user.dateOfJoining}</div>

          </div>
          <div className="user-card">

          </div>
        </div>

      ) : (
        <p>No user data found.</p>
      )
      }
      {open ? <Popup text="SignUp is Successful" closePopup={() => closePopupFunction()} isDeletePopup={true} deleteFunction={() => deletePopupFunction()} /> : null}
    </div>
  );
}

export default UserProfilePage;
