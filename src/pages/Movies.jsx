import { getMovies } from "Api";
import { MoviesList } from "components/MoviesList";

export const Movies = () => {
    const movies = getMovies();
    return (
        <main>
            <p>
                <MoviesList movies={movies} />
            </p>
        </main>
    )
}

export default Movies;