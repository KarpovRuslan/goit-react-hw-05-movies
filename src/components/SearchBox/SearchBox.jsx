import { Wrapper, Icon, Input } from './SearchBox.styled';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const SearchBox = ({ onChange }) => {
  const [movieValue, setMovieValue] = useState('');
  const handleNameChange = event =>
    setMovieValue(event.currentTarget.value.toLowerCase());
  const handleSubmit = event => {
    event.preventDefault();
    onChange(movieValue);
    setMovieValue('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <Wrapper>
        <Icon />
        <Input
          type="text"
          value={movieValue}
          onChange={handleNameChange}
          placeholder="search movie by name..."
        />
      </Wrapper>
    </form>
  );
};

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,
};
