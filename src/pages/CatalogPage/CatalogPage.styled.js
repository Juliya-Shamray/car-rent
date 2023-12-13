import styled from 'styled-components';

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  @media screen and (min-width: 768px) {
    gap: 50px;
  }
  @media screen and (min-width: 1214px) {
    gap: 29px;
  }
`;
