import { CatalogItem } from 'components/CatalogItem/CatalogItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvertsThunk, getAllAdvertsThunk } from 'redux/catalog/operations';
import {
  selectAdverts,
  selectAllAdverts,
  selectError,
  selectFilterBrand,
  selectFilterPrice,
  selectLoading,
  selectMileageFrom,
  selectMileageTo,
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
  const filterPrice = useSelector(selectFilterPrice);
  const filterMileageTo = useSelector(selectMileageTo);
  const filterMileageFrom = useSelector(selectMileageFrom);

  const dispatch = useDispatch();

  const isFilterOn =
    Boolean(filterBrand) ||
    Boolean(filterPrice) ||
    Boolean(filterMileageTo) ||
    Boolean(filterMileageFrom);

  useEffect(() => {
    if (allAdverts.length !== 0) {
      return;
    }
    dispatch(getAllAdvertsThunk());
  }, [allAdverts.length, dispatch]);

  const filterAllAdverts = () => {
    return allAdverts.filter(
      advert =>
        (filterBrand ? advert.make === filterBrand : true) &&
        (filterPrice
          ? Number(advert.rentalPrice.slice(1)) <= Number(filterPrice)
          : true) &&
        (filterMileageFrom && filterMileageTo
          ? advert.mileage >= Number(filterMileageFrom) &&
            advert.mileage <= Number(filterMileageTo)
          : true)
    );
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

  useEffect(() => {
    if (isFilterOn && filteredData.length > 0) {
      toast.success(`We found ${filteredData.length} advertisements`);
    }
  }, [isFilterOn, filteredData.length]);

  return (
    <StyledWrap className="container">
      <FilterForm />
      {filteredData.length === 0 && !loading && (
        <h2 style={{ textAlign: 'center', marginTop: '100px' }}>
          No matches found
        </h2>
      )}

      <StyledList>
        {(isFilterOn ? filteredData : adverts).map(advert => {
          return <CatalogItem key={advert.id} advert={advert} />;
        })}
      </StyledList>
      {!isFilterOn &&
        adverts.length &&
        adverts.length % 12 === 0 &&
        !loading && (
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
