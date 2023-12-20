import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 18px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 20px;
    align-items: flex-end;
  }
`;

export const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledLabel = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  display: block;
`;

export const StyledInput = styled.label`
  padding: 14px 24px;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  display: inline-block;
  max-width: 160px;
`;
export const StyledInput2 = styled.label`
  padding: 14px 24px;
  border-radius: 0px 14px 14px 0px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  display: inline-block;
  max-width: 160px;
`;

export const StyledFromTo = styled.input`
  width: 63px;
  border: none;
  background-color: inherit;
`;

export const StyledWrapInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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

export const baseCustomStyles = {
  control: (provided, state) => ({
    ...provided,
    padding: '6px 10px 6px 18px',
    border: 'none',
    borderRadius: '14px',
    background: '#f7f7fb',
    color: '#121417',
    fontFamily: 'Manrope',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '1.11',
    cursor: 'pointer',
    svg: {
      color: '#121417',
      transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 0.3s ease',
    },
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    padding: 0,
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: '#121417',
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
};

export const customStyles = {
  ...baseCustomStyles,
  container: () => ({
    width: '224px',
  }),
  menu: provided => ({
    ...provided,
    top: 'auto',
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

export const custom2Styles = {
  ...baseCustomStyles,
  container: () => ({
    width: '130px',
  }),
  menu: provided => ({
    ...provided,
    top: 'auto',
    width: '130px',
    maxHeight: '188px',
    zIndex: 100,
    borderRadius: '14px',
  }),
  menuList: provided => ({
    ...provided,
    width: '130px',
    padding: '14px 8px 14px 18px',
    border: '1px solid rgba(18, 20, 23, 0.05)',
    borderRadius: '14px',
    background: '#FFFFFF',
    boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',
  }),
};
