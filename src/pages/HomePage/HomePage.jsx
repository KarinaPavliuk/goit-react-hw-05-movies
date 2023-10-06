import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'API/movies';

export const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setTrendingMovies(null);
        setIsLoading(true);
        setError('');
        const data = await getTrendingMovies();
        console.log(
          'data >>>>',
          data.results.map(item => item)
        );
        setTrendingMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      Trending today
      {isLoading && 'Loading...'}
      {error && <p>{error}</p>}
      {trendingMovies && (
        <ul>
          {trendingMovies.results.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      )}
    </>
  );
};
