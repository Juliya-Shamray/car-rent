import { useState } from 'react';

import makes from '../../data/makes';
import Select from 'react-select';
import { StyledButton, StyledForm, customStyles } from './FilterForm.styled';
export const FilterForm = () => {
  const options = [
    { value: '', label: 'Enter a car brand' },
    ...makes.map(make => {
      return { value: make, label: make };
    }),
  ];
  const [selectedOption, setSelectedOption] = useState('Enter a car brand');

  return (
    <StyledForm>
      <Select
        value={selectedOption}
        onChange={setSelectedOption}
        options={options}
        placeholder="Enter a car brand"
        styles={customStyles}
      />
      <StyledButton>Search</StyledButton>
    </StyledForm>
  );
};
