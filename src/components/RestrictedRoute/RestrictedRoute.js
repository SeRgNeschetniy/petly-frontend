// import useAuth from 'hooks/useAuth';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUser } from 'redux/auth/auth-selectors';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  //   const shouldRedirect = !isRefrashing && !isLogin;
  const isLogin = useSelector(selectUser);

  return isLogin ? <Navigate to={redirectTo} /> : <Component />;
};

export default PrivateRoute;
