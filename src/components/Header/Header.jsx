import { NavLink } from 'react-router-dom';
import { StyledHeader, StyledList } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <nav className="container">
        <StyledList>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/catalog">Catalog</NavLink>
          </li>
          <li>
            <NavLink to="/favorite">Favorite</NavLink>
          </li>
        </StyledList>
      </nav>
    </StyledHeader>
  );
};
