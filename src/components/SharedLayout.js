import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Header from './Header';
import UserPage from './UserPage/UserPage';
export default function SharedLayout() {
  return (
    <>
      <Suspense fallback={null}>
        <Header />
        <UserPage/>
        <Outlet />
      </Suspense>
    </>
  );
}
