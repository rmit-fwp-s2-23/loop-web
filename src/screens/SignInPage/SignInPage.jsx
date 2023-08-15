import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SignInPage.css'
import { useAuth } from "../../AuthGlobal";

function SignInPage() {

  let navigate = useNavigate();

  const { setIsLoggedIn } = useAuth();

  const [failedInfo, setFailedInfo] = useState('');
  const [isIncorrectDetails, setIsIncorrectDetails] = useState(false);


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login validation against localStorage data
    const user = JSON.parse(localStorage.getItem("user"));

    if(user){
      if (user.email != formData.email){
        setIsIncorrectDetails(true);
        setFailedInfo('Email not found');
        console.log("incorrect email");
      } else {
        if (user.password != formData.password){
          setIsIncorrectDetails(true);
          setFailedInfo('Incorrect Password entered');
          console.log("incorrect password");
        } else {
          //All details entered correctly
          setIsIncorrectDetails(false);
          setIsLoggedIn(true);
          navigate('/');
          
        }
      }
    } else {
      //No registered user
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="incorrectDetails">
        {
          isIncorrectDetails && <p>{failedInfo}</p>
        }
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignInPage;
