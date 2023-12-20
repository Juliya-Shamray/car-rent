import makes from '../../data/makes';
import Select from 'react-select';
import {
  StyledButton,
  StyledForm,
  StyledFromTo,
  StyledInput,
  StyledInput2,
  StyledLabel,
  StyledWrap,
  StyledWrapInputs,
  custom2Styles,
  customStyles,
} from './FilterForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterBrand, selectFilterPrice } from 'redux/catalog/selectors';
import {
  updateFilterBrand,
  updateFilterPrice,
  updateMileageFrom,
  updateMileageTo,
} from 'redux/catalog/catalogSlice';
import { useState } from 'react';
import { toast } from 'react-toastify';

export const FilterForm = () => {
  const [selectedBrandOption, setSelectedBrandOption] = useState('');
  const [selectedPriceOption, setSelectedPriceOption] = useState('');
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');
  const [mileageToRequired, setMileageToRequired] = useState(false);
  const [mileageFrRequired, setMileageFrRequired] = useState(false);
  const [, setMileageRangeError] = useState(false);

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

  const onChangeMileageFrom = e => {
    console.log(e.target.value);
    setMileageFrom(e.target.value);
  };

  const onChangeMileageTo = e => {
    setMileageTo(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const isMileageFromFilled = Boolean(mileageFrom);
    const isMileageToFilled = Boolean(mileageTo);
    if (isMileageFromFilled && !isMileageToFilled) {
      setMileageToRequired(true);
      toast.error('Mileage To is required');
      return;
    }
    if (!isMileageFromFilled && isMileageToFilled) {
      setMileageFrRequired(true);
      toast.error('Mileage From is required');
      return;
    }
    if (Number(mileageFrom) >= Number(mileageTo)) {
      setMileageRangeError(true);
      toast.error('Invalid mileage range');
      return;
    }
    dispatch(updateFilterBrand(selectedBrandOption.value));
    dispatch(updateFilterPrice(selectedPriceOption.value));
    dispatch(updateMileageFrom(mileageFrom));
    dispatch(updateMileageTo(mileageTo));
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledWrap>
        <StyledLabel>Car brand </StyledLabel>
        <Select
          defaultValue={filterBrand}
          onChange={onChangeSelect}
          options={options}
          placeholder="Enter a text"
          styles={customStyles}
        />
      </StyledWrap>
      <StyledWrap>
        <StyledLabel>Price/ 1 hour </StyledLabel>
        <Select
          defaultValue={filterPrice}
          onChange={onChangePrice}
          options={optionsPrice}
          placeholder="To  &#36;"
          styles={custom2Styles}
        />
      </StyledWrap>

      <StyledWrapInputs>
        <StyledLabel> Сar mileage / km</StyledLabel>
        <div>
          <StyledInput>
            From&nbsp;
            <StyledFromTo
              type="number"
              name="inputFrom"
              step={100}
              min={3000}
              max={9000}
              value={mileageFrom}
              onChange={onChangeMileageFrom}
              required={mileageFrRequired}
              title="This field is required"
            />
          </StyledInput>

          <StyledInput2>
            To&nbsp;
            <StyledFromTo
              type="number"
              name="inputTo"
              step={100}
              min={3000}
              max={9000}
              value={mileageTo}
              onChange={onChangeMileageTo}
              required={mileageToRequired}
              title="This field is required"
            />
          </StyledInput2>
        </div>
      </StyledWrapInputs>

      <StyledButton type="submit">Search</StyledButton>
    </StyledForm>
  );
};
