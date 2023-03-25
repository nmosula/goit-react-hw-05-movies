import { useState, useEffect } from 'react';
import { fetchMoviesByQuery } from "Api";
import Loader from "components/Loader";
import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import SearchForm from 'components/SearchForm';
import MoviesList from 'components/MoviesList';

export const Movies = () => {

    const [movies, setMovies] = useState('[]');
    const [status, setStatus] = useState('idle');
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get('query'));
    
    useEffect(() => {
        if (!query) return;

        const getMoviesByQuery = async () => {
        setStatus('pending');
            try {
                const { movies, totalResults } = await fetchMoviesByQuery(query);

                if (totalResults === 0) {
                    Notiflix.Notify.warning(`Нажаль, нічого не знайдено, повторіть пошук`);

                    setMovies([]);
                    setQuery(null);
                }

                setMovies(movies);
                setStatus('resolved');          
            }
            catch (error) {
                console.error(error);
            }   
        }

        getMoviesByQuery();
    }, [query]);


    const handleSearch = (searchValue) => {
        if (!searchValue) {
            Notiflix.Notify.warning(`Будь ласка, введіть пошуковий запит`);
            return;
        }

        if (query === searchValue) {
            Notiflix.Notify.warning(`Будь ласка, введіть інший пошуковий запит`);
            return;
        }

        setQuery(searchValue);
        setSearchParams({ query: searchValue });
        setStatus('idle');
    }
    
    return (
        <main>
            <SearchForm onSubmit={handleSearch} />
            {status === 'pending' && <Loader />}
            {status === 'resolved' && <MoviesList movies={movies} />}
        </main>
    )
}

export default Movies;