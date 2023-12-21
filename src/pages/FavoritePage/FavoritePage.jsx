import { CatalogItem } from 'components/CatalogItem/CatalogItem';
import {
  StyledButton,
  StyledList,
  StyledWrap,
} from 'pages/CatalogPage/CatalogPage.styled';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeAllFromFavorite } from 'redux/favorite/favoriteSlice';
import { selectFavorite } from 'redux/favorite/selectors';

export const FavoritePage = () => {
  const favorites = useSelector(selectFavorite);
  const dispatch = useDispatch();

  return (
    <>
      <StyledWrap className="container">
        {favorites.length === 0 ? (
          <h2>You haven't chosen anything yet)</h2>
        ) : (
          <StyledList>
            {favorites.map(favorite => (
              <CatalogItem
                showDeleteButton
                key={favorite.id}
                advert={favorite}
              />
            ))}
          </StyledList>
        )}
        {favorites.length >= 2 && (
          <StyledButton onClick={() => dispatch(removeAllFromFavorite())}>
            Delete all
          </StyledButton>
        )}
      </StyledWrap>
    </>
  );
};
