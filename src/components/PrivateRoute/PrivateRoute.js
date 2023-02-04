import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { token } = useAuth();
  return token ? <Component /> : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
