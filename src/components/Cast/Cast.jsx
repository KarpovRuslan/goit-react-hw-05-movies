import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GetMovieCredits } from '../../services/ApiTMDB';
import CastList from 'components/CastList/CastList';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [moviesData, setMoviesData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMovieDetails() {
      setIsLoading(true);
      try {
        const data = await GetMovieCredits(movieId);
        setMoviesData(data);
      } catch {
        console.log(Error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieDetails();
  }, [movieId]);

  return (
    <main>
      {isLoading && <Loader />}
      {moviesData && <CastList cast={moviesData.cast} />}
    </main>
  );
};

export default Cast;
