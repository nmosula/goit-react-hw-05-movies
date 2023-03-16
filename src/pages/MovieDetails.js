import { getMovieById } from "Api";
import { useParams } from "react-router-dom";

export const MovieDetails = () => {
    const { movieId } = useParams();
    const movie = getMovieById(movieId);
    
    return (
        <main>
            <h2>
                Movie - {movie.name}
            </h2>
        </main>
    )
}