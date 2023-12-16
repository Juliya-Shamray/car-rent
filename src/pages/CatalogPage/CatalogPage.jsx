import { CatalogItem } from 'components/CatalogItem/CatalogItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvertsThunk } from 'redux/catalog/operations';
import {
  selectAdverts,
  selectError,
  selectLoading,
  selectPage,
} from 'redux/catalog/selectors';
import { StyledButton, StyledList, StyledWrap } from './CatalogPage.styled';
import { Link as ScrollLink } from 'react-scroll';
import { Loader } from '../../components/Loader/Loader';
import { onLoadMore } from 'redux/catalog/catalogSlice';

export const CatalogPage = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const adverts = useSelector(selectAdverts);
  const page = useSelector(selectPage);

  const dispatch = useDispatch();

  const onClickLoadMore = () => {
    dispatch(onLoadMore());
    dispatch(getAdvertsThunk(page + 1));
  };

  useEffect(() => {
    if (adverts.length === 0) {
      dispatch(getAdvertsThunk(page));
    }
  }, [adverts.length, dispatch, page]);

  return (
    <StyledWrap className="container">
      <StyledList>
        {adverts.map((advert, index) => (
          <CatalogItem key={advert.id} advert={advert} />
        ))}
      </StyledList>
      {adverts.length && !loading && adverts.length % 12 === 0 && (
        <ScrollLink
          to="scroll"
          smooth={true}
          duration={500}
          offset={20}
          delay={500}
        >
          <StyledButton id="scroll" onClick={onClickLoadMore}>
            Load more
          </StyledButton>
        </ScrollLink>
      )}
      {loading && <Loader />}
      {error && <h2>Something went wrong</h2>}
    </StyledWrap>
  );
};
