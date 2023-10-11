import { NavLink, Outlet } from 'react-router-dom';
import css from '../Layout/Layout.module.css';
import styled from 'styled-components';
import { Suspense } from 'react';

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active {
    color: #f52654;
  }
`;

export const Layout = () => {
  return (
    <div>
      <div className={css.header}>
        <StyledLink to="/" className={css.link}>
          Home
        </StyledLink>
        <StyledLink to="movies" className={css.link}>
          Movies
        </StyledLink>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
