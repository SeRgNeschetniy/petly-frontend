import { lazy } from 'react';

const FriendsPage = lazy(() => import('pages/FriendsPage'));
const NewsPage = lazy(() => import('pages/NewsPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const UserPage = lazy(() => import('pages/UserPage'));

const NoticesLayoutPage = lazy(() =>
  import('pages/NoticesPage/NoticesLayoutPage')
);
const NoticesFavorites = lazy(() =>
  import('pages/NoticesPage/NoticesFavorites')
);
const NoticesCategory = lazy(() => import('pages/NoticesPage/NoticesCategory'));
const NoticesOwn = lazy(() => import('pages/NoticesPage/NoticesOwn'));

const MainPage = lazy(() => import('pages/MainPage'));

const lazyPages = {
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
};

export default lazyPages;
