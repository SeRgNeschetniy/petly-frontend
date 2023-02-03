import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import UserPage from './../pages/UserPage/UserPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import { useDispatch } from 'react-redux';
import { current } from 'redux/auth/auth-operation';

const NoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/user" element={<UserPage />}></Route>
          <Route
            path="/notices/:categoryName"
            element={<NoticesPage />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
};
