import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { getCastMovie } from '../Api/api';

function Cast() {
  const [state, setState] = useState([]);
  const { id } = useParams();
  const baseURL = 'https://image.tmdb.org/t/p/w500/';
  const baseImg =
    'https://cdn.vectorstock.com/i/preview-1x/82/99/no-image-available-like-missing-picture-vector-43938299.jpg';
  useEffect(() => {
    getCastMovie(id)
      .then(movie => {
        setState(movie);
      })
      .catch(er => console.log(er.message));
  }, [id]);

  return (
    <>
      {state.length !== 0 ? (
        state.map(el => {
          return (
            <li key={el.id}>
              <img
                src={el.profile_path ? baseURL + el.profile_path : baseImg}
                alt="{el.name}"
                width="120"
              />
              <p>{el.name}</p>
              <p>Character:{el.character}</p>
            </li>
          );
        })
      ) : (
        <p>There is no information</p>
      )}
    </>
  );
}

export default Cast;
