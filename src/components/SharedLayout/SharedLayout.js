import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, Loader } from '../components';

export default function SharedLayout() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <Outlet />
      </Suspense>
    </>
  );
}
