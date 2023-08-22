import React, {useState} from "react";
import { useAuth } from "../../AuthGlobal";
import './UserProfilePage.css'
import { useNavigate } from "react-router-dom";
import profile from '../../assets/profile.svg'
import bin from '../../assets/bin.svg'
import edit from '../../assets/edit.svg'

function UserProfilePage() {

  let navigate = useNavigate();

  const { isLoggedIn } = useAuth();
  const { setIsLoggedIn } = useAuth();
  const users = JSON.parse(localStorage.getItem("users"));
  const user = users[isLoggedIn];
  

  const [isEditing, setIsEditing] = useState(false);
  const [editedUsername, setEditedUsername] = useState(user.username);
  const [editedEmail, setEditedEmail] = useState(user.email);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  }

  const handleUsernameChange = (event) => {
    setEditedUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEditedEmail(event.target.value);
  };

  const handleSaveChanges = () => {
    // Update user data in the localStorage
    users[isLoggedIn].username = editedUsername;
    users[isLoggedIn].email = editedEmail;
    localStorage.setItem("users", JSON.stringify(users));

    setIsEditing(false); // Exit edit mode
  };

  const handleDeleteClick = () => {
    const popupConfirm = window.confirm("Are you sure?");
    if (popupConfirm) {
      setIsLoggedIn('');
      navigate('/');
      delete users[user.email];
      localStorage.setItem("users", JSON.stringify(users));
    }
  }

  return (
    <div className="container">
      <h2 className="PageTitle">User Profile</h2>
      {user ? (
        <div className="user-card">
          <img id="profileImage" src={profile}/>
          {isEditing ? (
            <>
              <input
                type="text"
                value={editedUsername}
                onChange={handleUsernameChange}
              />
              <input
                type="email"
                value={editedEmail}
                onChange={handleEmailChange}
              />
            </>
          ) : (
            <>
              <p>{user.username}</p>
              <p>{user.email}</p>
              <p id="joiningDate">Date of joining: {user.dateOfJoining}</p>
            </>
          )}
          <div className="user-profile-actions">
            {!isEditing ? (
              <>
                <img id="bin-image" onClick={handleDeleteClick} src={bin} />
                <img id="edit-image" onClick={handleEditToggle} src={edit} />
              </>
            ):(
              <>
                <button onClick={handleSaveChanges}>Save</button>
              </>
            )}
          </div>
          
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
}

export default UserProfilePage;
