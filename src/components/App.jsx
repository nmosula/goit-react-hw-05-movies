import { Home } from "pages/Home";
import { MovieDetails } from "pages/MovieDetails";
import Movies from "pages/Movies";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { MovieCast } from "./MovieCast/MovieCast";
import { MovieReview } from "./MovieReview/MovieReview";

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
