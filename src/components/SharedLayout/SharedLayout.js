import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, Loader } from '../components';

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
