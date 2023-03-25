import { fetchMovieById } from "Api";
import { useState, useEffect } from 'react';
import Loader from "components/Loader";
import { useParams } from "react-router-dom";
import Movie from "components/Movie/Movie";

export const MovieDetails = () => {

    const [movieDetails, setMovieDetails] = useState('');
    const [status, setStatus] = useState('idle');

    const { movieId } = useParams();

    useEffect(() => {

        if (!movieId) return;
        
        const getMovieById = async () => {
            setStatus('pending');
            try {
                const movie = await fetchMovieById(movieId);
                setMovieDetails(movie);
                setStatus('resolved');
            }
            catch (error) {
                console.error(error);
            }
        }

        getMovieById();
    }, [movieId]);
        
    return (
        <>
        {status === 'pending' && <Loader />}
        {status === 'resolved' && <Movie movie={movieDetails} />}
        </>
    )
}


export default MovieDetails;