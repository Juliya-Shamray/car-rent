export const selectAllAdverts = state => state.catalog.allAdverts;
export const selectAdverts = state => state.catalog.adverts;
export const selectLoading = state => state.catalog.isLoading;
export const selectError = state => state.catalog.error;
export const selectPage = state => state.catalog.page;

export const selectFilterBrand = state => state.catalog.filter.filterBrand;
export const selectFilterPrice = state => state.catalog.filter.filterPrice;
export const selectMileageFrom = state =>
  state.catalog.filter.filterMileageFrom;
export const selectMileageTo = state => state.catalog.filter.filterMileageTo;
