import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BackLink } from '../../components/BackLink/BackLink';
import { GetMoviesById } from '../../services/ApiTMDB';
import { Loader } from '../../components/Loader/Loader';
import { Spinner } from './MovieDetails.styled';
import DataMovie from 'components/DataMovie/DataMovie';

const MovieDetails = () => {
  const [moviesData, setMoviesData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieDetails() {
      setIsLoading(true);
      try {
        const data = await GetMoviesById(movieId);
        setMoviesData(data);
        //console.log(movies);
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
      <BackLink to={backLinkHref}>Go back</BackLink>
      {isLoading && (
        <Spinner>
          <Loader />
        </Spinner>
      )}
      {moviesData && (
        <DataMovie
          title={moviesData.title}
          vote_average={moviesData.vote_average}
          overview={moviesData.overview}
          poster_path={moviesData.poster_path}
          genres={moviesData.genres}
          release_date={moviesData.release_date}
        />
      )}
    </main>
  );
};

export default MovieDetails;
