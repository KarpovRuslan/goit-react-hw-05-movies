import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 5px;
  padding: 0;
`;

export const Item = styled.li`
  display: inline-block;
  width: 100%;
`;

export const MovieLink = styled(NavLink)`
  display: inline-block;
  padding: 3px 16px;
  color: black;
  text-decoration: none;
  :hover,
  :focus {
    color: #00008b;
  }
`;

export const FilmYear = styled.span`
  color: #808080;
`;
