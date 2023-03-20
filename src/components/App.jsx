import { Home } from "pages/Home";
import { MovieDetails } from "pages/MovieDetails";
import Movies from "pages/Movies";
import { NavLink, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { MovieCast } from "./MovieCast/MovieCast";

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<p>Page Reviews</p>} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
