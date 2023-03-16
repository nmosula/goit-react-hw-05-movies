import axios from "axios";

const movies = [
  { id: "h-1", name: "Hoodie 1" },
  { id: "h-2", name: "Hoodie 2" },
  { id: "h-3", name: "Hoodie 3" },
  { id: "s-1", name: "Sneakers 1" },
  { id: "s-2", name: "Sneakers 2" },
  { id: "s-3", name: "Sneakers 3" },
  { id: "s-4", name: "Sneakers 4" },
  { id: "p-1", name: "Pants 1" },
  { id: "p-2", name: "Pants 2" },
  { id: "p-3", name: "Pants 3" }
];

const BASE_URL = "https://api.themoviedb.org/3/";
const KEY = "bf90c64edd4fb3718c72a5077448d3a4";

export const getMovies = async () => {
    const response = await axios.get(`${BASE_URL}trending/all/day?api_key=${KEY}`);
    // console.log(response.data.results);
    const movies = response.data.results.map(
        ({ id, title }) => {
            return {
                id,
                title
            }
        }
    )
    return movies;
    
// https://api.themoviedb.org/3/trending/all/day?api_key=bf90c64edd4fb3718c72a5077448d3a4
};

export const getMovieById = (movieId) => {
  return movies.find((movie) => movie.id === movieId);
};
