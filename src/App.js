import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage/HomePage";
import SignUpPage from "./screens/SignUpPage/SignUpPage";
import SignInPage from "./screens/SignInPage/SignInPage";
import UserProfilePage from "./screens/UserProfilePage/UserProfilePage";
import MovieDetailsPage from "./screens/MovieDetailsPage/MovieDetailsPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/user-profile" element={<UserProfilePage />} />
        <Route path="/movie-details" element={<MovieDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;