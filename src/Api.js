import axios from "axios";
import { isAvailableImage } from "utils/isAvailableImage";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "bf90c64edd4fb3718c72a5077448d3a4";

export async function fetchTrandingMovies () {
  const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
  
    const movies = response.data.results.map(({ id, title }) => {
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

  return {
      title,
      posterPath: isAvailableImage(poster_path),
      overview,
      genres: genres.map(genre => genre.name).join(', '),
      vote: vote_average.toFixed(1)*10,
      year: release_date.slice(0, 4),
  };
};

export async function fetchMovieCast(movieId) {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);

  const movieCast = response.data.cast.map(
    ({ id, name, profile_path, character }) => {
      return {
        id,
        name,
        profile_path: isAvailableImage(profile_path),
        character,
      }
    }
  );

  return movieCast;

};


export async function fetchMovieReview(movieId) {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);

  const movieReview = response.data.results.map(
    ({ id, author, content }) => {
      return {
        id,
        author,
        content,
      }
    }
  );

  return movieReview;
};


export async function fetchMoviesByQuery(query) {
  const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
  
    const movies = response.data.results.map(({ id, title }) => {
      return {
        id,
        title,
      }
    }
  )

  return { movies, totalResults: response.data.total_results };
};