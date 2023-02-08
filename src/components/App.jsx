import React from 'react';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
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
  NoticesLayoutPage,
  NoticesFavorites,
  NoticesCategory,
  NoticesOwn,
  FriendsPage,
  NewsPage,
  RegisterPage,
  LoginPage,
  UserPage,
  MainPage,
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
          <Route index element={<MainPage />} />

          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/user" />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={RegisterPage} redirectTo="/user" />
            }
          />
          <Route path="/restore" element={<PasswordRecoveryForm />} />
          <Route
            path="/user"
            element={<PrivateRoute component={UserPage} redirectTo="/login" />}
          />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/friends" element={<FriendsPage />} />

          <Route path="/notices" element={<NoticesLayoutPage />}>
            <Route path="favorites" element={<NoticesFavorites />} />
            <Route path="own" element={<NoticesOwn />} />
            <Route path=":categoryName" element={<NoticesCategory />} />
            <Route path="" element={<Navigate to="sell" />} />
          </Route>

          <Route path="*" element={<Navigate to={'/login'} />} />
        </Route>
      </Routes>
    )
  );
};
