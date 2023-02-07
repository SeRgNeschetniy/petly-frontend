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
  Loader,
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
          <Route
            index
            element={
              <React.Suspense fallback={<Loader />}>
                <MainPage />
              </React.Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/user" />
            }
          />
          <Route
            path="/register"
            element={
              <React.Suspense fallback={<Loader />}>
                <RestrictedRoute component={RegisterPage} redirectTo="/user" />
              </React.Suspense>
            }
          />
          <Route path="/restore" element={<PasswordRecoveryForm />} />
          <Route
            path="/user"
            element={<PrivateRoute component={UserPage} redirectTo="/login" />}
          />
          <Route
            path="/news"
            element={
              <React.Suspense fallback={<Loader />}>
                <NewsPage />
              </React.Suspense>
            }
          />
          <Route path="/friends" element={<FriendsPage />} />

          <Route path="/notices" element={<NoticesLayoutPage />}>
            <Route index path="favorites" element={<NoticesFavorites />} />
            <Route path="own" element={<NoticesOwn />} />
            <Route path=":categoryName" element={<NoticesCategory />} />

          <Route
            path="/notices"
            element={
              <React.Suspense fallback={<Loader />}>
                <NoticesLayoutPage />
              </React.Suspense>
            }
          >
            <Route
              path="favorites"
              element={
                <React.Suspense fallback={<Loader />}>
                  <NoticesFavorites />
                </React.Suspense>
              }
            />
            <Route
              path="own"
              element={
                <React.Suspense fallback={<Loader />}>
                  <NoticesOwn />
                </React.Suspense>
              }
            />
            <Route
              path=":categoryName"
              element={
                <React.Suspense fallback={<Loader />}>
                  <NoticesCategory />
                </React.Suspense>
              }
            />

          </Route>
          <Route path="*" element={<Navigate to={'/login'} />} />
        </Route>
      </Routes>
    )
  );
};
