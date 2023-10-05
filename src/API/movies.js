import axios from 'axios';
axios.defaults.baseURL = 'https://https://www.themoviedb.org';

//https://api.themoviedb.org/3/movie/550?api_key=d00c499c4b1f684e9020b4b6af86564e

export const getAllImages = async () => {
  const API_KEY = 'd00c499c4b1f684e9020b4b6af86564e';
  //const value = searchWords.trim().split(' ').join('+');

  const { data } = await axios(`/3/movie/550?api_key=${API_KEY}`);
  return data;
};
