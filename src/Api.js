import axios from "axios";
import { isAvailableImage } from "utils/isAvailableImage";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "bf90c64edd4fb3718c72a5077448d3a4";

export async function fetchTrandingMovies () {
    const response = await axios.get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
    const movies = response.data.results.map(
        ({ id, title }) => {
            return {
                id,
                title,
            }
        }
  )
  return { movies };
};

export async function fetchMovieById(movieId) {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
  const { title, poster_path, overview, genres, vote_average, release_date } = response.data;

  console.log("poster_path=", poster_path);

  return {
    title,
    posterPath: isAvailableImage(poster_path),
    overview,
    genres: genres.map(genre => genre.name).join(', '),
    vote: vote_average.toFixed(1),
    year: release_date.slice(0, 4),
  };

};
