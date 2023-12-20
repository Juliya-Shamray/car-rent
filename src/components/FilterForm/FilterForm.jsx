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
import { selectFilterBrand, selectFilterPrice } from 'redux/catalog/selectors';
import {
  updateFilterBrand,
  updateFilterPrice,
} from 'redux/catalog/catalogSlice';
import { useState } from 'react';

export const FilterForm = () => {
  const [selectedBrandOption, setSelectedBrandOption] = useState('');
  const [selectedPriceOption, setSelectedPriceOption] = useState('');

  const filterBrand = useSelector(selectFilterBrand);
  const filterPrice = useSelector(selectFilterPrice);

  const dispatch = useDispatch();

  const options = [
    { value: '', label: 'All cars' },
    ...makes.map(make => {
      return { value: make, label: make };
    }),
  ];

  const numbersArray = [];
  for (let i = 30; i <= 300; i += 10) {
    numbersArray.push(i);
  }

  const optionsPrice = numbersArray.map(num => ({ value: num, label: num }));

  const onChangeSelect = selectedOption => {
    setSelectedBrandOption(selectedOption);
  };

  const onChangePrice = selectedOption => {
    setSelectedPriceOption(selectedOption);
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(updateFilterBrand(selectedBrandOption.value));
    dispatch(updateFilterPrice(selectedPriceOption.value));
  };

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
          defaultValue={filterPrice}
          onChange={onChangePrice}
          options={optionsPrice}
          placeholder="To  &#36;"
          styles={custom2Styles}
        />
      </StyledWrap>
      <StyledButton type="submit">Search</StyledButton>
    </StyledForm>
  );
};
