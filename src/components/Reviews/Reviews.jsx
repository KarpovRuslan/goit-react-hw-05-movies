import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GetMovieReviews } from '../../services/ApiTMDB';
import ReviewsList from 'components/ReviewsList/ReviewList';

const Reviews = () => {
  const { movieId } = useParams();
  const [moviesData, setMoviesData] = useState(null);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const data = await GetMovieReviews(movieId);
        setMoviesData(data);
      } catch {
        console.log(Error);
      }
    }
    fetchReviews();
  }, [movieId]);

  return (
    <main>{moviesData && <ReviewsList results={moviesData.results} />}</main>
  );
};

export default Reviews;
