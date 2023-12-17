import makes from '../../data/makes';
import Select from 'react-select';
import { StyledButton, StyledForm, customStyles } from './FilterForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/catalog/selectors';
import { updateFilterBrand } from 'redux/catalog/catalogSlice';
import { useState } from 'react';
export const FilterForm = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const options = [
    { value: '', label: 'Enter a car brand' },
    ...makes.map(make => {
      return { value: make, label: make };
    }),
  ];

  const onChangeSelect = selectedOption => {
    setSelectedOption(selectedOption);
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(updateFilterBrand(selectedOption.value));
  };

  const isButtonDisabled =
    !selectedOption ||
    (!selectedOption.value && selectedOption.label !== 'Enter a car brand');

  return (
    <StyledForm onSubmit={onSubmit}>
      <Select
        defaultValue={filter}
        onChange={onChangeSelect}
        options={options}
        placeholder="Enter a car brand"
        styles={customStyles}
      />
      <StyledButton type="submit" disabled={isButtonDisabled}>
        Search
      </StyledButton>
    </StyledForm>
  );
};
