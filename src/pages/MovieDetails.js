import { getMovieById } from "Api";
import { Link, Outlet, useParams } from "react-router-dom";

export const MovieDetails = () => {
    const { movieId } = useParams();
    const movie = getMovieById(movieId);
    
    return (
        <main>
            <h2>
                Movie - {movie.name}
            </h2>

            <ul>
                <li>
                    <Link to="cast">cast</Link>
                </li>
                <li>
                    <Link to="reviews">reviews</Link>
                </li>
            </ul>
            <Outlet />
        </main>
    )
}