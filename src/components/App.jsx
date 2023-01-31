import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import RegisterForm from './Auth/RegisterForm/RegisterForm';
import LoginForm from './Auth/LoginForm';
import UserPage from './UserPage/UserPage';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/user" element={ <UserPage/>}></Route>
        </Route>
      </Routes>
    </>
  );
};
