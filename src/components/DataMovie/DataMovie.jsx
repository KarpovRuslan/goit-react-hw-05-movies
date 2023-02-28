import {
  MovieDetailsBlock,
  MovieDetailsInfo,
  StyledLink,
  AdditionalButtonBlock,
} from './DataMovie.styled';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

const DataMovie = ({
  title,
  vote_average,
  overview,
  poster_path,
  genres,
  release_date,
}) => {
  return (
    <>
      <MovieDetailsBlock>
        <img
          src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
          alt={title}
        />
        <MovieDetailsInfo>
          <h2>
            {title}
            <span> ({Number.parseInt(release_date)})</span>
          </h2>
          <p>User Score:{Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <div>{genres.map(genre => genre.name).join(', ')}</div>
        </MovieDetailsInfo>
      </MovieDetailsBlock>
      <div>
        <h3>Additional information</h3>
        <Suspense fallback={<Loader />}>
          <AdditionalButtonBlock>
            <StyledLink to="cast">Cast</StyledLink>
            <StyledLink to="reviews">Reviews</StyledLink>
          </AdditionalButtonBlock>
        </Suspense>
      </div>
      <Outlet />
    </>
  );
};
export default DataMovie;

DataMovie.propTypes = {
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};
