import { useState, useEffect } from 'react';
import { getSearchMovie } from 'API/movies';
import { Link, useSearchParams } from 'react-router-dom';

export const MoviesPage = () => {
  const [searchMovie, setSearchMovie] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    const fetchTrendingMovies = async () => {
      try {
        const response = await getSearchMovie(query);
        const normalisedQuery = response.results.map(({ id, title }) => ({
          id,
          title,
        }));
        console.log(normalisedQuery);
        console.log(query);
        setSearchMovie(normalisedQuery);
      } catch (error) {
        alert(error);
      }
    };

    fetchTrendingMovies();
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();

    const { value } = event.target.query;
    value && setSearchParams({ query: value });
  };

  // const handleInputChange = ({ target: { value } }) => {
  //   value && setSearchParams({ query: value });
  // };

  // const clearInput = event => {
  //   event.target.value = '';
  // };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          //onChange={handleInputChange}
          //onClick={clearInput}
          // value={}
        />
      </form>
      {searchMovie?.length ? (
        <ul>
          {searchMovie?.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Type something in the search field or change the value.</p>
      )}
    </>
  );
};
