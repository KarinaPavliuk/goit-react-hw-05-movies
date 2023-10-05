import { Route, Routes } from 'react-router-dom';

//import { HomePage } from 'pages/HomePage/HomePage';
import { MoviesPage } from 'pages/MoviesPage/MoviesPage';
import { MovieDetailsPage } from 'pages/MovieDetailsPage/MovieDetailsPage';
import { CastPage } from 'pages/CastPage/CastPage';
import { ReviewsPage } from 'pages/ReviewsPages/ReviewsPage';
import { LayOut } from 'Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="movies/:movieId/cast" element={<CastPage />} />
        <Route path="movies/:movieId/reviews" element={<ReviewsPage />} />
      </Route>
    </Routes>
  );
};
