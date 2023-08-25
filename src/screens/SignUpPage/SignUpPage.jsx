import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import { registerUser } from "../../config";
import './SignUpPage.css';
import { Popup } from "../../components/Popup/Popup";
import { useAuth } from "../../AuthGlobal";

function SignUpPage() {

  const { setIsLoggedIn } = useAuth(); //Global State for signing user in

  let navigate = useNavigate() //Navigator to link to other pages

  const [errorMessage, setErrorMessage] = useState("");

  const [open, setOpen] = useState(false); //State for showing Pop Up

  const users = JSON.parse(localStorage.getItem("users")) || {}; //Existing Users

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //This method validates the password entered by the user and sets specific error messages
  const validate = (password) => {
    if(password.length < 8){
      setErrorMessage("Please enter a password that is atleast 8 characters long")
      return false;
    } 
    
    const upper = /[A-Z]/.test(password);
    const lower = /[a-z]/.test(password);

    if(!upper || !lower){
      setErrorMessage("Password must contain an Upper case and a lower case character")
      return false;
    }

    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  
    if(!specialChars.test(password)){
      setErrorMessage("Password must contain atleast one special character")
      return false;
    }

    const numbers = /\d/g;

    if(!numbers.test(password)){
      setErrorMessage("Password must contain atleast one numeric character")
      return false
    }

    return true;

  }
  
  //If validated, Log user in
  const successfulSignup = () => {
    setIsLoggedIn(formData.email);
    navigate('/');
  }
  
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      setErrorMessage("Email address is not valid");
      return;
    }

    if (users[formData.email]) {
      setErrorMessage("Email address already registered");
      return;
    }

    if(validate(formData.password))
    {
      // Handle form submission and store data in localStorage
      registerUser(JSON.stringify(formData));
      console.log("Sign up form submitted", formData);

      //Pop Up Message
      setOpen(true);
    }
  };

  return (
    <div>
      <h2 className="PageTitle">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="errorMessage">
            <p>{errorMessage}</p>
        </div>
        <button className="formButton" type="submit">Sign Up</button>
      </form>
      {open ? <Popup text="SignUp is Successful" closePopup={() => successfulSignup()} /> : null}
    </div>
  );
}

export default SignUpPage;
