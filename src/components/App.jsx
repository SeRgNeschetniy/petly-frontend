import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import { useDispatch } from 'react-redux';
import { current } from 'redux/auth/auth-operation';
import { useAuth } from 'hooks/useAuth';
import PasswordRecoveryForm from './Auth/PasswordRecoveryForm/PasswordRecoveryForm';

const NoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));
const FriendsPage = lazy(() => import('pages/FriendsPage/FriendsPage'));
const NewsPage = lazy(() => import('pages/NewsPage/NewsPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const UserPage = lazy(() => import('pages/UserPage/UserPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const { token } = useAuth();

  useEffect(() => {
    if (token) {
    dispatch(current());
  };
  }, [token]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/news" />
            }
          />

          <Route
            path="/register"
            element={
              <RestrictedRoute component={RegisterPage} redirectTo="/news" />
            }
          />

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
    )
  );
};
