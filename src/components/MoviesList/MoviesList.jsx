import { useLocation } from "react-router-dom"
import { List, ListItem, ListItemA } from "./MoviesList.styled";

const MoviesList = ({ movies }) => {

    const location = useLocation();
    
    return (
        <List>
            {
                movies.map((movie) => (
                    <ListItem key={movie.id}>
                        <ListItemA to={`/movies/${movie.id}`} state={{ from: location }}>
                            {movie.title}
                        </ListItemA>
                    </ListItem>
                ))
            }
        </List>
    )
}

export default MoviesList;