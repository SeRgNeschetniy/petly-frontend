import { lazy } from 'react';

const NoticesPage = lazy(() => import('pages/NoticesPage'));
const FriendsPage = lazy(() => import('pages/FriendsPage'));
const NewsPage = lazy(() => import('pages/NewsPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const UserPage = lazy(() => import('pages/UserPage'));

const lazyPages = {
  NoticesPage,
  FriendsPage,
  NewsPage,
  RegisterPage,
  LoginPage,
  UserPage,
};

export default lazyPages;