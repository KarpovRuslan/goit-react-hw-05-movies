import { Outlet } from 'react-router-dom';
import { CastDetailsBlock, CastInfo } from './CastList.styled';
import PropTypes from 'prop-types';

const CastList = ({ cast }) => {
  return (
    <>
      {cast.map(el => {
        return (
          <div key={el.id}>
            <CastDetailsBlock key={el.id}>
              <img
                src={
                  el.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${el.profile_path}`
                    : `http://tinleychamber.org/wp-content/uploads/2019/01/no-image-available.png`
                }
                alt={el.name}
              />
              <CastInfo>
                <h3>{el.name}</h3>
                <p>Character: {el.character}</p>
              </CastInfo>
            </CastDetailsBlock>
            <Outlet />
          </div>
        );
      })}
    </>
  );
};
export default CastList;

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    }).isRequired
  ).isRequired,
};
