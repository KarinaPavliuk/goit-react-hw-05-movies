import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org';

const API_KEY = 'd00c499c4b1f684e9020b4b6af86564e';

//https://api.themoviedb.org/3/movie/550?api_key=d00c499c4b1f684e9020b4b6af86564e

//const value = searchWords.trim().split(' ').join('+');
//?api_key=${API_KEY}

export const getTrendingMovies = async () => {
  // url: 'https://api.themoviedb.org/3/trending/movie/day?api_key=d00c499c4b1f684e9020b4b6af86564e',
  const { data } = await axios(
    `/3/trending/movie/day?api_key=${API_KEY}&page=1`
  );
  return data;
};

export const getSearchMovie = async query => {
  //url: 'https://api.themoviedb.org/3/search/movie?api_key=d00c499c4b1f684e9020b4b6af86564e&q=batman&include_adult=false&page=1',
  //  params: {include_adult: 'false', language: 'en-US', page: '1'},
  const { data } = await axios(
    `/3/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return data;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios(`/3/movie/${movieId}?api_key=${API_KEY}`);
  return data;
};

export const getMovieCredits = async movieId => {
  const { data } = await axios(
    `/3/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return data;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios(
    `/3/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return data;
};
