import { Link, Outlet } from 'react-router-dom';

export const LayOut = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="movies">Movies</Link>
      <Outlet />
    </div>
  );
};
