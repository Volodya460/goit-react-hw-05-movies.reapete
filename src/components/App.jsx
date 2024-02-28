import { Routes, Route } from 'react-router-dom';

import HomePage from '../Pages/Home';
import Movies from '../Pages/Movies';
import MovieDitels from '../Pages/MovieDitels';
import Cast from './Cast';
import Reviews from './Reviews';
import SharedLayout from './SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDitels />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
