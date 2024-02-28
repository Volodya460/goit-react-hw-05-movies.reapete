import { useEffect, useState } from 'react';
import { getTrending } from '../Api/api';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function HomePage() {
  const [stateList, setStateList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrending()
      .then(res => setStateList(res))
      .catch(err => console.log(err.message));
  }, []);

  const createList = state => {
    return state.map(movie => (
      <Link to={`movies/${movie.id}`} key={movie.id} state={{ from: location }}>
        {movie.name}
      </Link>
    ));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {createList(stateList)}
    </div>
  );
}

export default HomePage;
