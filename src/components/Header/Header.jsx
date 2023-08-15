import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
import { useAuth } from "../../AuthGlobal";

function Header() {


  const { isLoggedIn } = useAuth();

  const { setIsLoggedIn } = useAuth();

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {!isLoggedIn && (
            <>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
            </>
          )}
          {isLoggedIn && (
            <>
              <li>
                <Link to="/" onClick={handleLogout}>Log Out</Link>
              </li>
              <li>
                <Link to="/user-profile">User Profile</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}


export default Header;
