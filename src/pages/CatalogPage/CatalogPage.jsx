import { CatalogItem } from 'components/CatalogItem/CatalogItem';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvertsThunk } from 'redux/adverts/operations';
import {
  selectAdverts,
  selectError,
  selectLoading,
} from 'redux/adverts/selectors';
import { StyledButton, StyledList, StyledWrap } from './CatalogPage.styled';
import { Link as ScrollLink } from 'react-scroll';

export const CatalogPage = () => {
  const [page, setPage] = useState(1);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const adverts = useSelector(selectAdverts);
  const onClickLoadMore = () => {
    setPage(prev => prev + 1);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdvertsThunk(page));
  }, [dispatch, page]);

  return (
    <StyledWrap className="container">
      <StyledList>
        {loading && <h2>Loading...</h2>}
        {error && <h2>Something went wrong</h2>}
        {adverts.map((advert, index) => (
          <CatalogItem key={advert.id} advert={advert} />
        ))}
      </StyledList>
      {adverts.length && !loading && adverts.length % 12 === 0 && (
        <ScrollLink
          to="scroll"
          smooth={true}
          duration={500}
          offset={50}
          delay={1000}
        >
          <StyledButton id="scroll" onClick={onClickLoadMore}>
            Load more
          </StyledButton>
        </ScrollLink>
      )}
    </StyledWrap>
  );
};
