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
import placeHolder from '../../images/placeHolder.png';
import { useModal } from 'hooks/useModal';

export const CatalogItem = ({ advert, showDeleteButton }) => {
  const favorites = useSelector(selectFavorite);
  const dispatch = useDispatch();
  const { isOpen, open, close } = useModal();

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
      <StyledImg
        src={advert.img || placeHolder}
        alt="car"
        onError={e => {
          e.target.src = placeHolder;
        }}
      />
      <StyledImgIcon
        alt="heart"
        $isActive={isFavorite}
        onClick={() => handleIconClick(advert)}
        aria-label="heart"
      />
      <StyledContent>
        <div>
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
        </div>
        <div>
          <StyledButton onClick={open}>Learn more</StyledButton>
          {showDeleteButton && (
            <StyledButton
              onClick={() => dispatch(removeFromFavorite(advert))}
              style={{ marginTop: '10px' }}
            >
              Delete
            </StyledButton>
          )}
        </div>
      </StyledContent>
      {isOpen && <Modal close={close} advert={advert} />}
    </StyledItem>
  );
};
