import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, Item, MovieLink, FilmYear } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <List>
        {movies.map(movie => (
          <Item key={movie.id}>
            <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
              <FilmYear> ({Number.parseInt(movie.release_date)})</FilmYear>
            </MovieLink>
          </Item>
        ))}
      </List>
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string,
    }).isRequired
  ).isRequired,
};
