import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: #b7e2df;
`;

export const StyledList = styled.ul`
  display: flex;
  list-style: none;
  gap: 15px;
  padding: 15px 0px;
  li {
    text-transform: uppercase;
  }
  a {
    transition: 0.3s color linear;
    font-weight: bold;
    font-size: 16px;
  }
  a:hover,
  a:focus {
    color: violet;
  }
`;

export const StyledLink = styled(NavLink)`
  &.active {
    text-decoration: underline;
  }
`;
