import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  min-height: 94vh;
  @media screen and (min-width: 768px) {
    background-image: url('https://driveforce.ua/assets/uploads/images/content/83626-rent-car.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  & > div {
    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const StyledTitle = styled.h1`
  font-size: 35px;
  padding-top: 50px;
  font-style: italic;
  text-align: center;
  font-weight: bold;
  @media screen and (min-width: 768px) {
    margin-top: 150px;
    width: 280px;
    line-height: 1.5;
  }
`;
export const StyledWrap = styled.div`
  margin-top: 80px;
  @media screen and (min-width: 768px) {
    margin-top: 300px;
    width: 350px;
  }
  @media screen and (min-width: 1158px) {
    margin-top: 400px;
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
    font-size: 18px;
    margin-bottom: 5px;
  }
`;
export const StyledButton = styled(Link)`
  @media screen and (max-width: 767px) {
    display: flex;
    width: max-content;
  }
  margin: 30px auto;
  background-color: black;
  border: none;
  border-radius: 10px;
  color: white;
  text-transform: uppercase;
  padding: 12px 20px;
  display: inline-block;
  cursor: pointer;
  transition: 0.3s background-color linear, 0.3s color linear;
  font-weight: 600;
  &:hover,
  &:focus {
    background-color: white;
    color: black;
  }
`;
