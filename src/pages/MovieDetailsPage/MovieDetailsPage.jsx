import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

import { getMovieDetails } from 'API/movies';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await getMovieDetails(movieId);

        setMovie(response);
      } catch (error) {
        alert(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const { genres, id, overview, poster_path, title, vote_average } =
    movie || {};

  return (
    <>
      <div key={id}>
        {poster_path && (
          <img
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`}
            alt={title}
          />
        )}
        <div>
          <h2>{title}</h2>
          <p>User score: {(vote_average * 10).toFixed(0)}%</p>
          <div>
            <h3>Overview</h3>
            <p>{overview}</p>
          </div>
          <div>
            <h3>Genres</h3>
            <ul>
              {genres?.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to={`/movies/${id}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${id}/reviews`}>Review</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};
