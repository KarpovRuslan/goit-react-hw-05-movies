import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayout.styled';
import { RiMovie2Fill } from 'react-icons/ri';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <span aria-label="film-icon">
          <RiMovie2Fill size={33} />
        </span>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
