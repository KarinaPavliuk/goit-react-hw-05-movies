import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        const response = await getTrendingMovies();
        setTrendingMovies(response);
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
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};