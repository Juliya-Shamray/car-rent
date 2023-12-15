import styled from 'styled-components';

export const StyledImg = styled.img`
  border-radius: 24px;
  margin-bottom: 13px;
`;

export const StyledTitle = styled.h2`
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 8px;
`;

export const StyledWrap = styled.div`
  margin-bottom: 4px;
  color: rgba(18, 20, 23, 0.5);
  line-height: 1.5;
`;

export const StyledText = styled.p`
  margin-top: 14px;
  color: #121417;
  font-size: 14px;
  line-height: 1.43;
  margin-bottom: 24px;
`;

export const StyledSubTitle = styled.h3`
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  margin-bottom: 8px;
`;

export const StyledSpan = styled.span`
  color: rgba(18, 20, 23, 0.5);
  line-height: 1.5;
`;

export const StyledSubText = styled.div`
  margin-bottom: 24px;
`;

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

export const StyledLi = styled.li`
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
  color: #363535;
  line-height: 1.5;
  letter-spacing: -0.24px;
  & > span {
    color: blue;
    font-weight: 600;
  }
`;

export const StyledLink = styled.a`
  padding: 12px 50px;
  border-radius: 12px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  border: 2px solid #48e9db;
  background-color: #48e9db;
  cursor: pointer;
  transition: 300ms color linear, 300ms background-color linear;
  &:hover,
  &:focus {
    color: #48e9db;
    background-color: white;
  }
`;
