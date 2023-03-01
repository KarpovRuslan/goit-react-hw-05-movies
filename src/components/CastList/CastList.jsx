import { Outlet } from 'react-router-dom';
import { CastDetailsBlock, CastInfo } from './CastList.styled';
import PropTypes from 'prop-types';
import noImg from '../../image/noImage.png';

const CastList = ({ cast }) => {
  return (
    <>
      {cast.map(el => {
        return (
          <CastDetailsBlock key={el.cast_id}>
            <img
              src={
                el.profile_path
                  ? `https://image.tmdb.org/t/p/w200/${el.profile_path}`
                  : noImg
              }
              alt={el.name}
            />
            <CastInfo>
              <h3>{el.name}</h3>
              <p>Character: {el.character}</p>
            </CastInfo>
            <Outlet />
          </CastDetailsBlock>
        );
      })}
    </>
  );
};
export default CastList;

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    }).isRequired
  ).isRequired,
};
