import {
  StyleList,
  StyleSubTitle,
  StyledButton,
  StyledTitle,
  StyledWrap,
  StyledWrapper,
} from './HomePage.styled';

export const HomePage = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <StyledTitle>AutoHaven: Find, Rent, Go!!!</StyledTitle>
        <StyledWrap>
          <StyleSubTitle>Advantages:</StyleSubTitle>
          <StyleList>
            <li>Flexibility to travel at your own pace.</li>
            <li>Access to a wider range of destinations.</li>
            <li>Convenience for airport or city exploration.</li>
            <li>
              Ideal for business travelers, tourists, and those with temporary
              transportation needs.
            </li>
          </StyleList>

          <StyledButton to="/catalog">Get started</StyledButton>
        </StyledWrap>
      </div>
    </StyledWrapper>
  );
};
