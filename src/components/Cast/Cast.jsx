import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GetMovieCredits } from '../../services/ApiTMDB';
import CastList from 'components/CastList/CastList';

const Cast = () => {
  const { movieId } = useParams();
  const [moviesData, setMoviesData] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const data = await GetMovieCredits(movieId);
        setMoviesData(data);
      } catch {
        console.log(Error);
      }
    }
    fetchMovieDetails();
  }, [movieId]);

  return (
    <main>
      {moviesData && (
        <CastList
          cast={moviesData.cast}
          // name={moviesData.cast.name}
          // profile_path={moviesData.cast.profile_path}
          // character={moviesData.cast.character}
        />
      )}
    </main>
  );
};

export default Cast;
