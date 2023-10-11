import { getMovieCredits } from 'API/movies';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CastPage = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        const response = await getMovieCredits(movieId);
        const normalisedCast = response.cast.map(
          ({ character, id, name, profile_path }) => ({
            character,
            id,
            name,
            profile_path,
          })
        );
        setCast(normalisedCast);
      } catch (error) {
        alert(error);
      }
    };

    fetchMovieCredits();
  }, [movieId]);

  return (
    <>
      <ul>
        {cast?.map(({ character, id, name, profile_path }) => (
          <li key={id}>
            {profile_path && (
              <img
                src={`https://www.themoviedb.org/t/p/w150_and_h225_bestv2/${profile_path}`}
                alt={name}
              />
            )}
            <p>{name}</p>
            <p>Charecter: {character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CastPage;
