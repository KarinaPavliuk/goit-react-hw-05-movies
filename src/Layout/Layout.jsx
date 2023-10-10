import { Link, Outlet } from 'react-router-dom';

export const LayOut = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <br />
      <Link to="movies">Movies</Link>
      <br />
      <Outlet />
    </>
  );
};
