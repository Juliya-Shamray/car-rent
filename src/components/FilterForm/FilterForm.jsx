import makes from '../../data/makes';
import Select from 'react-select';
import {
  StyledButton,
  StyledForm,
  StyledText,
  StyledWrap,
  custom2Styles,
  customStyles,
} from './FilterForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterBrand } from 'redux/catalog/selectors';
import { updateFilterBrand } from 'redux/catalog/catalogSlice';
import { useState } from 'react';
export const FilterForm = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const filterBrand = useSelector(selectFilterBrand);
  const dispatch = useDispatch();

  const options = [
    { value: '', label: 'All cars' },
    ...makes.map(make => {
      return { value: make, label: make };
    }),
  ];

  const numbersArray = [];
  for (let i = 20; i <= 220; i += 10) {
    numbersArray.push(i);
  }

  const optionsPrice = numbersArray.map(num => ({ value: num, label: num }));

  const onChangeSelect = selectedOption => {
    setSelectedOption(selectedOption);
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(updateFilterBrand(selectedOption.value));
  };

  const isButtonDisabled =
    !selectedOption ||
    (!selectedOption.value && selectedOption.label !== 'All cars');

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledWrap>
        <StyledText>Car brand </StyledText>
        <Select
          defaultValue={filterBrand}
          onChange={onChangeSelect}
          options={options}
          placeholder="Enter a text"
          styles={customStyles}
        />
      </StyledWrap>

      <StyledWrap>
        <StyledText>Price/ 1 hour </StyledText>
        <Select
          // defaultValue={filterBrand}
          // onChange={onChangeSelect}
          options={optionsPrice}
          placeholder="To  &#36;"
          styles={custom2Styles}
        />
      </StyledWrap>
      <StyledButton type="submit" disabled={isButtonDisabled}>
        Search
      </StyledButton>
    </StyledForm>
  );
};
