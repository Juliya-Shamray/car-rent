import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { CatalogPage } from 'pages/CatalogPage/CatalogPage';
import { PageNotFound } from 'pages/PageNotFound/PageNotFound';
import { FavoritePage } from 'pages/FavoritePage/FavoritePage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
