import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '95775b42e188d6443a0bfb132dcec5e1';

export const GetMovies = async () => {
  const resp = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return resp.data.results;
};

export const GetMoviesById = async movieId => {
  const { data } = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
  return data;
};

export const FindMovies = async query => {
  const resp = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}`
  );
  return resp.data.results;
};

export const GetMovieCredits = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return data;
};

export const GetMovieReviews = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return data;
};
