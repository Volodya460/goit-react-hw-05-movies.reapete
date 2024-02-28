import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/all/day',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzkxZDllYjY1N2Q3Y2U2OTA3M2M4MDAwNDE1MGU0MCIsInN1YiI6IjY0MjMwZjY1NTM0NjYxMDExMzA4ODY3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._cCJjrj0s8dyxW-RkJ54maY58WJCVieK14EAenpYBQU',
  },
};

export async function getTrending() {
  let response = await axios(options);

  return response.data.results;
}

export async function getByIdMovie(id) {
  let response = await axios({
    ...options,
    url: `https://api.themoviedb.org/3/movie/${id}`,
  });

  return response.data;
}

export async function getReviewsMovie(id) {
  let response = await axios({
    ...options,
    url: `https://api.themoviedb.org/3/movie/${id}/reviews`,
  });

  return response.data.results;
}

export async function getCastMovie(id) {
  let response = await axios({
    ...options,
    url: `https://api.themoviedb.org/3/movie/${id}/credits`,
  });
  return response.data.cast;
}

export async function getByMovieName(value) {
  let response = await axios({
    ...options,
    params: { query: value, language: 'en-US' },
    url: `https://api.themoviedb.org/3/search/movie`,
  });
  return response.data.results;
}
