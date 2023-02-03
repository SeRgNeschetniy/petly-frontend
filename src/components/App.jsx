import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SharedLayout from './SharedLayout';
import UserPage from './../pages/UserPage/UserPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import PrivateRoute from './PrivateRoute';
// import RestrictedRoute from './RestrictedRoute';
import { useDispatch } from 'react-redux';
import { current } from 'redux/auth/auth-operation';
import PasswordRecoveryForm from './Auth/PasswordRecoveryForm/PasswordRecoveryForm';

const NoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));
const FriendsPage = lazy(() => import('pages/FriendsPage/FriendsPage'));
const NewsPage = lazy(() => import('pages/NewsPage/NewsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(({ auth }) => auth.loading);
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return isLoading ? (
    <p>Loading....</p>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/login" element={<LoginPage />} />
        {/*  <RestrictedRoute component={LoginPage} redirectTo="/news" /> */}
        <Route path="/register" element={<RegisterPage />} />
        {/*  <RestrictedRoute component={RegisterPage} redirectTo="/news" /> */}

        <Route path="/restore" element={<PasswordRecoveryForm />} />

        <Route
          path="/user"
          element={<PrivateRoute redirectTo="/login" component={UserPage} />}
        />

        <Route path="/news" element={<NewsPage />} />

        <Route path="/friends" element={<FriendsPage />} />

        <Route path="/notices/:categoryName" element={<NoticesPage />} />
      </Route>
    </Routes>

  

  );
};
