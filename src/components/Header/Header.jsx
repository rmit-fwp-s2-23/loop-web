import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
import { useAuth } from "../../AuthGlobal";
import movie from '../../assets/movie.svg'


function Header() {
  const { isLoggedIn } = useAuth();
  const { setIsLoggedIn } = useAuth();

  const handleLogout = () => {
    setIsLoggedIn('');
  }

  return (
    <header>
      <nav>
        <div className="left-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {isLoggedIn === '' && (
              <>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                  <Link to="/signin">Sign In</Link>
                </li>
              </>
            )}
            {isLoggedIn !== '' && (
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
        </div>
        <div className="right-menu">
          <div className="logo">
            <img src={movie} alt="Logo" />
          </div>
          <div className="slogan">
            Entertainment For Everyone
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
