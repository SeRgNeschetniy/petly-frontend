import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import RegisterForm from './Auth/RegisterForm/RegisterForm';
import UserPage from './../pages/UserPage/UserPage';
import LoginForm from './Auth/LoginForm/LoginForm';

const NoticesPage = lazy(() => import('pages/NoticiesPage/NoticesPage'));


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
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