import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Header from './Header';
export default function SharedLayout() {
  return (
    <>
      <Suspense fallback={null}>
        <Header />
        <Outlet />
      </Suspense>
    </>
  );
}
