import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: #b7e2df;
`;

export const StyledList = styled.ul`
  display: flex;
  list-style: none;
  gap: 15px;
  padding: 10px 0px;
  li {
    text-transform: uppercase;
  }
  a {
    transition: 0.3s color linear;
    font-weight: bold;
  }
  a:hover {
    color: violet;
  }
`;

export const StyledLink = styled(NavLink)`
  &.active {
    text-decoration: underline;
  }
`;
