import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { current } from 'redux/auth/auth-operation';
import { useAuth } from 'hooks/useAuth';

import {
  RestrictedRoute,
  PrivateRoute,
  SharedLayout,
  PasswordRecoveryForm,
} from './components';
import lazyPages from 'utils/lazyPages';

const {
  NoticesPage,
  FriendsPage,
  NewsPage,
  RegisterPage,
  LoginPage,
  UserPage,
} = lazyPages;

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, token } = useAuth();

  useEffect(() => {
    if (token) {
      dispatch(current());
    }
  }, [dispatch, token]);

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
