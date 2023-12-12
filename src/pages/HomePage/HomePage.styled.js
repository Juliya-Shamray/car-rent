import styled from 'styled-components';

export const StyledWrapper = styled.div`
  min-height: 85vh;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 30px;
  margin-top: 10px;
  font-style: italic;
  text-align: center;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    margin-top: 200px;
    width: 240px;
    line-height: 1.5;
  }
`;
export const StyledWrap = styled.div`
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    margin-top: 280px;
    width: 350px;
  }
  @media screen and (min-width: 1158px) {
    margin-top: 280px;
    width: 500px;
  }
`;

export const StyleSubTitle = styled.h2`
  font-size: 20px;
`;

export const StyleList = styled.ul`
  list-style: disc;
  padding-left: 15px;
  margin-top: 10px;
  li {
    margin-bottom: 5px;
  }
`;
export const StyledButton = styled.button`
  margin: 20px auto;
  background-color: #8bd18b;
  border: none;
  border-radius: 10px;
  color: inherit;
  text-transform: uppercase;
  padding: 5px 15px;
  display: block;
  cursor: pointer;
  transition: 0.3s background-color linear;
  font-weight: 600;
  &:hover {
    background-color: #70eb70;
  }
`;
