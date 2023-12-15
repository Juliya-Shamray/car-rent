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
import { Modal } from 'components/Modal/Modal';

export const CatalogItem = ({ advert }) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = item => {
    setIsOpen(true);
  };
  const close = () => setIsOpen(false);
  const [isActive, setIsActive] = useState(false);

  const { address } = advert;
  const arr = address.split(',');
  arr.shift();
  const [town, country] = arr;

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
        <StyledButton onClick={open}>Learn more</StyledButton>
      </StyledContent>
      {isOpen && <Modal close={close} advert={advert} />}
    </StyledItem>
  );
};
