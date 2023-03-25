import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const MovieCast = lazy(() => import('components/MovieCast'));
const MovieReview = lazy(() => import('components/MovieReview'));


export const App = () => {
  return (
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReview />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>

  );
};
