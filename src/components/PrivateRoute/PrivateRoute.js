// import useAuth from 'hooks/useAuth';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { selectUser, selectIsLoading } from 'redux/auth/auth-selectors';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(({ auth }) => auth.isLogin);
  const isLoading = useSelector(({ auth }) => auth.loading);

  const shouldRedirect = !isLoading && !isLogin;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

export default PrivateRoute;
