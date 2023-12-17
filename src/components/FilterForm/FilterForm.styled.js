import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 20px;
  }
`;

export const StyledButton = styled.button`
  padding: 14px 44px;
  background-color: #c772b9;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  text-transform: uppercase;
  cursor: pointer;
  transition: 300ms background-color cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover,
  &:focus {
    background-color: #8e5985;
  }
`;

export const customStyles = {
  container: () => ({
    width: '224px',
  }),
  control: (provided, state) => ({
    ...provided,
    padding: '14px 18px',
    display: 'flex',
    border: 'none',
    borderRadius: '14px',
    background: '#f7f7fb',
    color: '#121417',
    fontFamily: 'Manrope',
    fontSize: '18px',
    fontWeight: '500',
    lineHeight: '1.11',
    cursor: 'pointer',
    svg: {
      color: '#121417',
    },
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#121417' : 'rgba(18, 20, 23, 0.20)',
    backgroundColor: 'transparent',
    transition: '100ms color linear',
    fontSize: '16px',
    '&:hover': {
      color: '#121417',
      backgroundColor: 'transparent',
    },
    cursor: 'pointer',
  }),
  menu: provided => ({
    ...provided,
    top: '121px',
    height: '272px',
    width: '224px',
    zIndex: 100,
    borderRadius: '14px',
  }),
  menuList: provided => ({
    ...provided,
    width: '224px',
    padding: '14px 8px 14px 18px',
    border: '1px solid rgba(18, 20, 23, 0.05)',
    borderRadius: '14px',
    background: '#FFFFFF',
    boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',
  }),
};
