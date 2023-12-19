import { CatalogItem } from 'components/CatalogItem/CatalogItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvertsThunk, getAllAdvertsThunk } from 'redux/catalog/operations';
import {
  selectAdverts,
  selectAllAdverts,
  selectError,
  selectFilterBrand,
  selectLoading,
  selectPage,
} from 'redux/catalog/selectors';
import { StyledButton, StyledList, StyledWrap } from './CatalogPage.styled';
import { Link as ScrollLink } from 'react-scroll';
import { Loader } from '../../components/Loader/Loader';
import { onLoadMore } from 'redux/catalog/catalogSlice';
import { FilterForm } from 'components/FilterForm/FilterForm';
import { toast } from 'react-toastify';

export const CatalogPage = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const adverts = useSelector(selectAdverts);
  const page = useSelector(selectPage);
  const allAdverts = useSelector(selectAllAdverts);
  const filterBrand = useSelector(selectFilterBrand);

  const dispatch = useDispatch();

  const isFilterOn = Boolean(filterBrand);

  useEffect(() => {
    if (allAdverts.length !== 0) {
      return;
    }
    dispatch(getAllAdvertsThunk());
  }, [allAdverts.length, dispatch]);

  const filterAllAdverts = () => {
    return allAdverts.filter(advert => advert.make === filterBrand);
  };

  const filteredData = filterAllAdverts();

  const onClickLoadMore = () => {
    dispatch(onLoadMore());
    dispatch(getAdvertsThunk(page + 1));
  };

  useEffect(() => {
    if (adverts.length === 0) {
      dispatch(getAdvertsThunk(page))
        .unwrap()
        .then(() => {
          toast.success('32 advertisements found');
        });
    }
  }, [adverts.length, dispatch, page]);

  return (
    <StyledWrap className="container">
      <FilterForm />
      {filteredData.length !== 0
        ? toast.success(`We found ${filteredData.length} advertisements`)
        : null}
      <StyledList>
        {isFilterOn
          ? filteredData.map(advert => (
              <CatalogItem key={advert.id} advert={advert} />
            ))
          : adverts.map(advert => (
              <CatalogItem key={advert.id} advert={advert} />
            ))}
      </StyledList>
      {filteredData.length % 12 === 0 &&
        adverts.length &&
        !loading &&
        adverts.length % 12 === 0 && (
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
