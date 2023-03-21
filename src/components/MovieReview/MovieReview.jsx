import { fetchMovieReview } from "Api";
import { useState, useEffect } from 'react';
import Loader from "components/Loader";
import { useParams } from "react-router-dom";
import ReviewGallery from "components/ReviewGallery";

export const MovieReview = () => {

    const [movieReview, setMovieReview] = useState('');
    const [status, setStatus] = useState('idle');

    const { movieId } = useParams();

    useEffect(() => {

        if (!movieId) return;
        
        const getMovieReview = async () => {
            setStatus('pending');
            try {
                const Review = await fetchMovieReview(movieId);
                setMovieReview(Review);
                setStatus('resolved');
            }
            catch (error) {
                console.error(error);
            }
        }

        getMovieReview(movieId);
    }, [movieId]);
        
    return (
        <>
        {status === 'pending' && <Loader />}
        {status === 'resolved' && movieReview.length !== 0 ? (<ReviewGallery items={movieReview} />) : (<p>We don't have any reviews for this movies</p>)}
        </>
    )
}