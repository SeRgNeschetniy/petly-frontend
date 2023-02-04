import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { token } = useAuth();
  return token ? <Navigate to={redirectTo} /> : <Component />;
};

export default RestrictedRoute;
