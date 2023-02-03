// import useAuth from 'hooks/useAuth';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUser, selectIsLoading } from 'redux/auth/auth-selectors';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);

  const shouldRedirect = !isLoading && !isLogin;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

export default PrivateRoute;
