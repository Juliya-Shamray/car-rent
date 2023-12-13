import React, { useState } from 'react';
import {
  StyledButton,
  StyledContent,
  StyledImg,
  StyledImgIcon,
  StyledItem,
  StyledSubText,
  StyledSubTitle,
  StyledWrap,
  StyledWrapper,
} from './CatalogItem.styled';

export const CatalogItem = ({ advert }) => {
  const [isActive, setIsActive] = useState(false);
  const { address } = advert;
  const [street, town, country] = address.split(',');
  console.log(street);
  const handleIconClick = () => {
    setIsActive(!isActive);
  };
  return (
    <StyledItem>
      <StyledImg src={advert.img} alt="car" />
      <StyledImgIcon
        alt="heart"
        $isActive={isActive}
        onClick={handleIconClick}
      />

      <StyledContent>
        <StyledWrapper>
          <StyledSubTitle>
            {advert.make}, {advert.year}
          </StyledSubTitle>
          <StyledSubText>{advert.rentalPrice}</StyledSubText>
        </StyledWrapper>
        <StyledWrap>
          {town}&ensp;|&ensp;{country}&ensp;|&ensp;{advert.rentalCompany}
        </StyledWrap>
        <StyledWrap>
          {advert.type}&ensp;|&ensp;{advert.model}
          &ensp;|&ensp;{Number(advert.mileage).toLocaleString('en')}
          &ensp;|&ensp;{advert.accessories[0]}
        </StyledWrap>
        <StyledButton>Learn more</StyledButton>
      </StyledContent>
    </StyledItem>
  );
};
