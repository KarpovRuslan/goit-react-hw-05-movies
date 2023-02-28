import PropTypes from 'prop-types';
import { ZeroReviews, Text } from './ReviewList.styled';
import { BsFillExclamationSquareFill } from 'react-icons/bs';

const noReviews = (
  <ZeroReviews>
    <BsFillExclamationSquareFill color="grey" />{' '}
    <Text>We don't have any reviews for this movie</Text>
    <BsFillExclamationSquareFill color="grey" />
  </ZeroReviews>
);

const ReviewsList = ({ results }) => {
  return (
    <>
      {results.length === 0
        ? noReviews
        : results.map(el => {
            return (
              <div key={el.id}>
                <h3>Author: {el.author}</h3>
                <p>{el.content}</p>
              </div>
            );
          })}
    </>
  );
};

export default ReviewsList;

ReviewsList.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired
  ),
};
