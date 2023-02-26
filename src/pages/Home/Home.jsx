import { useState, useEffect } from 'react';
import { GetMovies } from '../../services/ApiTMDB';
import { MovieList } from '../../components/MovieList/MovieList';
import { Loader } from '../../components/Loader/Loader';
import { Spinner } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const data = await GetMovies();
        setMovies(data);
      } catch {
        console.log(Error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);
  return (
    <main>
      <h1>Trending today</h1>
      {isLoading ? (
        <Spinner>
          <Loader />
        </Spinner>
      ) : (
        <MovieList movies={movies} />
      )}
    </main>
  );
};

export default Home;
