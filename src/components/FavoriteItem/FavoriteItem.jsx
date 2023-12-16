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
} from '../CatalogItem/CatalogItem.styled';
import { Modal } from 'components/Modal/Modal';
import { useDispatch } from 'react-redux';
import { removeFromFavorite } from 'redux/favorite/favoriteSlice';

export const FavoriteItem = ({ advert }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const open = item => {
    setIsOpen(true);
  };
  const close = () => setIsOpen(false);

  const { address } = advert;
  const arr = address.split(',');
  arr.shift();
  const [town, country] = arr;

  const [isActive, setIsActive] = useState(true);

  const handleIconClick = data => {
    setIsActive(false);
    dispatch(removeFromFavorite(data));
  };

  return (
    <StyledItem>
      <StyledImg src={advert.img} alt="car" />{' '}
      <StyledImgIcon
        alt="heart"
        $isActive={isActive}
        onClick={() => handleIconClick(advert)}
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
