import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
const NoticesPage = lazy(() => import('pages/NoticesPage'));


export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<SharedLayout />}></Route>
        <Route path="/notices/:categoryName" element={<NoticesPage/>}></Route>
      </Routes>
  );
};
