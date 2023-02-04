import {
  Title,
  LinkText,
  StyledLink,
  BackgroundContainer,
} from '../../components/Auth/Auth.styled';
import GoogleIcon from '../../components/Auth/GoogleSignIn/GoogleIcon';
import { selectIsLogin } from 'redux/auth/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import LoginForm from 'components/Auth/LoginForm/LoginForm';
import { useSearchParams } from 'react-router-dom';
import { current } from 'redux/auth/auth-operation';

export default function LoginPage() {
  const isLogin = useSelector(selectIsLogin);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  if (token) {
    dispatch(current(token))
  }

  if (isLogin) {
    return <Navigate to="/user" />;
  }

  return (
    <>
      <BackgroundContainer>
        <Title>Login</Title>
        <LoginForm />
        <GoogleIcon />
        <LinkText>
          Don't have an account?{' '}
          <StyledLink to="/register">Register</StyledLink>
        </LinkText>
        <LinkText>
          Forgot your password?{' '}
          <StyledLink to="/restore">Password recovery</StyledLink>
        </LinkText>
      </BackgroundContainer>
    </>
  );
}
