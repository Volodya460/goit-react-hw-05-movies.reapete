import { useEffect, useState } from 'react';
import { getReviewsMovie } from '../Api/api';
import { useParams } from 'react-router-dom';

function Reviews() {
  const [state, setState] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getReviewsMovie(id)
      .then(movie => {
        setState(movie);
      })
      .catch(er => console.log(er.message));
  }, [id]);

  return (
    <>
      {' '}
      {state.length !== 0 ? (
        <ul>
          {state.map(el => {
            return (
              <li key={el.id}>
                <h3>Author:{el.author}</h3>
                <p>{el.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>There are no reviews</p>
      )}
    </>
  );
}

export default Reviews;
