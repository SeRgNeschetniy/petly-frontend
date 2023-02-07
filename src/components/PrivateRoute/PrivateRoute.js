import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const redirect = !isLoggedIn && !isRefreshing;
  return redirect ? <Navigate to={redirectTo} replace /> : <Component />;
};

export default PrivateRoute;
