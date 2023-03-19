import { useState, useEffect } from 'react';
import { fetchTrandingMovies } from "Api";
import Loader from "components/Loader";
import { MoviesList } from "components/MoviesList";

export const Home = () => {

    const [movies, setMovies] = useState('[]');
    const [status, setStatus] = useState('idle');
    
    useEffect(() => {

    const getTrandingMovies = async () => {
      setStatus('pending');
      try {
        const { movies } = await fetchTrandingMovies();
    
        setMovies([...movies]);
        setStatus('resolved');

          
      }
      catch (error) {
        console.error(error);
      }   
    }

    getTrandingMovies();
    }, []);
    
    return (
        <main>
            {status === 'pending' && <Loader />}
            <h1>Tranding today</h1>
                {status === 'resolved' && <MoviesList movies={movies} />}
        </main>
    )
}

export default Home;