import { useState, useEffect } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';

import { getMovieDetails } from 'API/movies';
import css from './MovieDetailsPage.module.css';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleClickBackBtn = () => {
    navigate(location.state);
  };

  const { genres, id, overview, poster_path, title, vote_average } =
    movie || {};

  return (
    <div className={css.container}>
      <button onClick={handleClickBackBtn}>&#8592; Go back</button>
      <div className={css.mainDetails} key={id}>
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
            <ul className={css.genresList}>
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
            <Link to={`/movies/${id}/cast`} state={location.state}>
              Cast
            </Link>
          </li>
          <li>
            <Link to={`/movies/${id}/reviews`} state={location.state}>
              Review
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
