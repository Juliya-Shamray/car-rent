import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';

export const StyledOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: grid;
  place-content: center;
  z-index: 5;
  & > div {
    background-color: white;
    max-width: 541px;
    padding: 40px;
    border-radius: 24px;
    position: relative;
    overflow-y: auto;
  }
`;

export const StyledButton = styled(IoMdClose)`
  position: absolute;
  width: 18px;
  height: 18px;
  top: 16px;
  right: 16px;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;
