import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieDetailsBlock = styled.div`
  display: flex;
  justify-content: start;
`;

export const MovieDetailsInfo = styled.div`
  margin-left: 15px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  padding: 4px 10px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;

  border-radius: 10px;

  color: #00008b;
  background-color: #d3d3d3;

  :hover {
    color: white;
    background-color: #00008b;
  }
`;

export const AdditionalButtonBlock = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 200px;
`;
