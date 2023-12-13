import { CatalogItem } from 'components/CatalogItem/CatalogItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvertsThunk } from 'redux/adverts/operations';
import {
  selectAdverts,
  selectError,
  selectLoading,
} from 'redux/adverts/selectors';
import { StyledList } from './CatalogPage.styled';

export const CatalogPage = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const adverts = useSelector(selectAdverts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdvertsThunk());
  }, [dispatch]);

  return (
    <div className="container">
      <StyledList>
        {loading && <h2>Loading...</h2>}
        {error && <h2>Something went wrong</h2>}
        {adverts.map(advert => (
          <CatalogItem key={advert.id} advert={advert} />
        ))}
      </StyledList>
      <button>Load more</button>
    </div>
  );
};
