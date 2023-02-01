import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import RegisterForm from './Auth/RegisterForm/RegisterForm';
import UserPage from './UserPage/UserPage';
import LoginForm from './Auth/LoginForm/LoginForm';
import NewsPage from 'pages/NewsPage/NewsPage';

const NoticesPage = lazy(() => import('pages/NoticiesPage/NoticesPage'));


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route
            path="/News"
            element={<NewsPage />}
          ></Route>
          <Route path="/user" element={ <UserPage/>}></Route>
          <Route
            path="/notices/:categoryName"
            element={<NoticesPage />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
};