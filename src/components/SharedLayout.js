import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from './Loader/Loader';

import Header from './Header';
import { Container } from 'styles';
export default function SharedLayout() {
  return (
    <Container>
      <Suspense fallback={<Loader />}>
        <Header />
        <Outlet />
      </Suspense>
    </Container>
  );
}
