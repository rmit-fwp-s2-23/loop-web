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
    { id: 2, title: "Star Wars V", image: "https://i.ebayimg.com/images/g/VrsAAOSwv0tU6lGA/s-l1600.jpg" },
    { id: 3, title: "Barbie", image: "https://i.ebayimg.com/images/g/2vwAAOSwT0RkveXI/s-l1200.webp" },
    { id: 4, title: "Grand Turismo", image: "https://m.media-amazon.com/images/M/MV5BMTI1YjFmN2UtOWZhOC00MjkwLTg2ZjgtNDQ5NDQ3YWNmNGRkXkEyXkFqcGdeQXVyMTAxNzQ1NzI@._V1_.jpg" },
    { id: 5, title: "Pushpa 2", image: "https://m.media-amazon.com/images/M/MV5BNGZlNTFlOWMtMzUwNC00ZDdhLTk0MWUtOGZjYzFlOTBmNDdhXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_.jpg" },
    { id: 6, title: "Dune", image: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg" },
    { id: 7, title: "The Batman", image: "https://cdn.eventcinemas.com.au/cdn/resources/movies/15230/images/largeposter.jpg" },
    { id: 8, title: "Swades", image: "https://m.media-amazon.com/images/M/MV5BODY2NGYxZTEtMzBiOS00Zjg2LWEyZjYtNjQ5Mjg1MzQ5N2FlXkEyXkFqcGdeQXVyNTE0MDc0NTM@._V1_FMjpg_UX1000_.jpg" }];

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
            <Route path="/movie-details" element={< MovieDetailsPage />} />
            <Route path="/movie-review" element={<MovieReviewPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;