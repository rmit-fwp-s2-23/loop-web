import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./screens/HomePage/HomePage";
import SignUpPage from "./screens/SignUpPage/SignUpPage";
import SignInPage from "./screens/SignInPage/SignInPage";
import UserProfilePage from "./screens/UserProfilePage/UserProfilePage";
import MovieReviewPage from "./screens/MovieReviewPage/MovieReviewPage";
import MovieDetailsPage from "./screens/MovieDetailsPage/MovieDetailsPage";
import { AuthProvider } from "./AuthGlobal";


function App() {
    // Hardcoded data
    const upcomingMovies = [
      { id: 1, title: "Oppenheimer", image: "https://i.etsystatic.com/10683147/r/il/d4a024/4900691314/il_1080xN.4900691314_fu21.jpg" },
      { id: 2, title: "Barbie", image: "https://i.ebayimg.com/images/g/2vwAAOSwT0RkveXI/s-l1200.webp" },
    ];

    // Storing upcomingMovies in local storage
    localStorage.setItem('upcomingMovies', JSON.stringify(upcomingMovies));




  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/user-profile" element={<UserProfilePage />} />
            <Route path = "/movie-details" element={< MovieDetailsPage/>} />
            <Route path="/movie-review" element={<MovieReviewPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;