import { useEffect, useState } from 'react';
import { Form } from '../components/Form';
import { getByMovieName } from '../Api/api';
import { Link } from 'react-router-dom';
import { Audio } from 'react-loader-spinner';
import { useLocation } from 'react-router-dom';

function Movies() {
  const [value, setValue] = useState('');
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!value) return;
    setLoading(true);
    getByMovieName(value)
      .then(req => {
        if (req.length === 0) {
          return alert(`Try something else`);
        }

        setState(req);
      })
      .catch(er => console.log(er.message))
      .finally(() => setLoading(false));
  }, [value]);
  const handleFormSubmit = value => {
    setValue(value);
  };
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

  return (
    <>
      <Form handleFormSubmit={handleFormSubmit} />

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {state?.map(el => {
          return (
            <Link to={`${el.id}`} key={el.id} state={{ from: location }}>
              {el.title}
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Movies;
