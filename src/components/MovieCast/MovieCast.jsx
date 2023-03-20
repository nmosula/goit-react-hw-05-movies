import { fetchMovieCast } from "Api";
import { useState, useEffect } from 'react';
import Loader from "components/Loader";
import { useParams } from "react-router-dom";
import CastGallery from "components/CastGallery";

export const MovieCast = () => {

    const [movieCast, setMovieCast] = useState('');
    const [status, setStatus] = useState('idle');

    const { movieId } = useParams();

    useEffect(() => {

        if (!movieId) return;
        
        const getMovieCast = async () => {
            setStatus('pending');
            try {
                const Cast = await fetchMovieCast(movieId);
                setMovieCast(Cast);
                setStatus('resolved');
            }
            catch (error) {
                console.error(error);
            }
        }

        getMovieCast(movieId);
    }, [movieId]);
        
    return (
        <>
        {status === 'pending' && <Loader />}
        {status === 'resolved' && <CastGallery cast={movieCast} />}
        </>
    )
}