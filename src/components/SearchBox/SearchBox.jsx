import { Wrapper, Input, Icon } from './SearchBox.styled';
import PropTypes from 'prop-types';

export const SearchBox = ({ value, onChange }) => {
  return (
    <Wrapper>
      <Icon />
      <Input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="search movie by name..."
      />
    </Wrapper>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
