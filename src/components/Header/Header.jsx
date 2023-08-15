import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Header.css'

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(isUserLoggedIn === 'true');
  }, []);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {!isLoggedIn && (
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
          )}
          {!isLoggedIn && (
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
          )}
          {isLoggedIn && (
              <li>
                <Link to="/">Log Out</Link>
              </li>
          )}
          {isLoggedIn && (
              <li>
                <Link to="/user-profile">User Profile</Link>
              </li>
          )}
        </ul>
      </nav>
    </header>
  );
}


export default Header;
