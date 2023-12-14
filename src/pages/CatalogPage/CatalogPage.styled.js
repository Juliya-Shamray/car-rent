import styled from 'styled-components';

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 25px;
  @media screen and (min-width: 768px) {
    gap: 50px;
    margin-bottom: 50px;
  }
  @media screen and (min-width: 1214px) {
    gap: 29px;
    margin-bottom: 100px;
  }
`;
export const StyledButton = styled.button`
  display: block;
  margin: auto;
  padding: 20px 0;
  color: violet;
  border: none;
  background-color: transparent;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  cursor: pointer;
  transition: 300ms color linear;
  &:hover,
  &:focus {
    color: #48e9db;
  }
`;
