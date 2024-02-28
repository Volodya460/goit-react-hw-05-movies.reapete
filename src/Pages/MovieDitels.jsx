import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getByIdMovie } from '../Api/api';
import { MovieCard } from '../components/MovieCard';
import { Audio } from 'react-loader-spinner';
import { useLocation } from 'react-router-dom';

function MovieDitels() {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    if (id) {
      getByIdMovie(id.toString())
        .then(movie => {
          setState(movie);
        })
        .catch(err => setError(err))
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) {
    return (
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    );
  }
  if (error) {
    return (
      <>
        <Link to={location?.state?.from ?? '/'}>Back</Link>
        <h2>Sorry((</h2>
      </>
    );
  }

  return (
    <>
      {' '}
      <Link to={location?.state?.from ?? '/'}>Back</Link>
      <MovieCard arr={state} />
    </>
  );
}

export default MovieDitels;
