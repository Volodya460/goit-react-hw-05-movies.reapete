import { NavLink, Outlet } from 'react-router-dom';

export function MovieCard({ arr }) {
  const baseURL = 'https://image.tmdb.org/t/p/w500/';
  const baseImg =
    'https://cdn.vectorstock.com/i/preview-1x/82/99/no-image-available-like-missing-picture-vector-43938299.jpg';
  return (
    <div>
      <img
        src={arr.poster_path ? baseURL + arr.poster_path : baseImg}
        alt=""
        height="450px"
      />
      <h2>{arr.title}</h2>

      <p>User Score: {Number(arr.vote_average).toFixed(1)}</p>
      <p>{arr.overview}</p>
      <h3>Genres</h3>
      <p>{arr.genres?.map(el => el.name)}</p>
      <div>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
      <Outlet />
    </div>
  );
}
