import { Link } from "react-router-dom"

export const MoviesList = ({ movies }) => {
    return (
        <>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <Link to={`${movie.id}`}>
                        name={movie.name}
                    </Link>
                </div>
            ))}
        </>
    )
}
        