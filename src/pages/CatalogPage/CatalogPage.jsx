import { CatalogItem } from 'components/CatalogItem/CatalogItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvertsThunk } from 'redux/contacts/operations';
import { selectAdverts } from 'redux/contacts/selectors';

export const CatalogPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdvertsThunk());
  }, [dispatch]);
  const adverts = useSelector(selectAdverts);

  return (
    <ul>
      {adverts.map(advert => (
        <CatalogItem key={advert.id} advert={advert} />
      ))}
    </ul>
  );
};
