import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Header from './Header';
import { Container } from 'styles';
export default function SharedLayout() {
  return (
    <Container>
      <Suspense fallback={null}>
        <Header />
        <Outlet />
      </Suspense>
    </Container>
  );
}
