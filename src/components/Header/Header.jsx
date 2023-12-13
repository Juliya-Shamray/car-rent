import { StyledHeader, StyledLink, StyledList } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <nav className="container">
        <StyledList>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/catalog">Catalog</StyledLink>
          </li>
          <li>
            <StyledLink to="/favorite">Favorite</StyledLink>
          </li>
        </StyledList>
      </nav>
    </StyledHeader>
  );
};
