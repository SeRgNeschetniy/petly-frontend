import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, Loader } from '../components';

import { Container, Main } from 'styles';
export default function SharedLayout() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <Main>
          <Container>
            <Outlet />
          </Container>
        </Main>
      </Suspense>
    </>
  );
}
