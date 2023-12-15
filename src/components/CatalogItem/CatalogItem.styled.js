import styled from 'styled-components';
import { ReactComponent as Heart } from '../../images/icons/heart.svg';

export const StyledItem = styled.li`
  width: 274px;
  position: relative;
  box-shadow: 1px 2px 10px 0;
  border-radius: 14px;
  overflow: hidden;
`;

export const StyledImg = styled.img`
  height: 268px;
  border-radius: 14px;
`;

export const StyledImgIcon = styled(Heart)`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
  & * {
    stroke: ${props => (props.$isActive ? '#e23dc6' : 'green')};
    fill: ${props => (props.$isActive ? '#e23dc6' : 'none')};
  }
`;

export const StyledContent = styled.div`
  padding: 14px 5px 8px;
  display: flex;
  flex-direction: column;
  min-height: 180px;
`;
export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const StyledSubTitle = styled.h2`
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const StyledSubText = styled.p`
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;
export const StyledWrap = styled.div`
  color: rgba(18, 20, 23, 0.5);
  line-height: 1.5;
  margin-bottom: 4px;
`;

export const StyledButton = styled.button`
  margin-top: auto;
  width: 100%;
  padding: 12px 0;
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
