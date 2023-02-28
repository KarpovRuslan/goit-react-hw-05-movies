import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FindMovies } from 'services/ApiTMDB';
import { MovieList } from 'components/MovieList/MovieList';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { Loader } from 'components/Loader/Loader';
import { Spinner } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchName = searchParams.get('query') ?? '';

  const handleSearch = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const data = await FindMovies(searchName);
        setMovies(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies(searchName);
  }, [searchName]);

  return (
    <main>
      <SearchBox value={searchName} onChange={handleSearch} />
      {isLoading && (
        <Spinner>
          <Loader />
        </Spinner>
      )}
      {movies !== null && <MovieList movies={movies} />}
      {/* {movies === null ? (
        <div>There is no data for view</div>
      ) : (
        <MovieList movies={movies} />
      )} */}
    </main>
  );
};

export default Movies;
