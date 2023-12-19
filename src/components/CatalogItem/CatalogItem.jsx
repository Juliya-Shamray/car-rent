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
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorite,
  removeFromFavorite,
} from 'redux/favorite/favoriteSlice';
import { selectFavorite } from 'redux/favorite/selectors';

export const CatalogItem = ({ advert }) => {
  const favorites = useSelector(selectFavorite);

  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const open = item => {
    setIsOpen(true);
  };
  const close = () => setIsOpen(false);

  const isFavorite = favorites.some(favorite => favorite.id === advert.id);

  const { address } = advert;
  const arr = address.split(',');

  const [, town, country] = arr;

  const handleIconClick = data => {
    if (isFavorite) {
      dispatch(removeFromFavorite(data));
    } else {
      dispatch(addToFavorite(data));
    }
  };

  return (
    <StyledItem>
      <StyledImg src={advert.img} alt="car" />
      <StyledImgIcon
        alt="heart"
        $isActive={isFavorite}
        onClick={() => handleIconClick(advert)}
        aria-label="heart"
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
