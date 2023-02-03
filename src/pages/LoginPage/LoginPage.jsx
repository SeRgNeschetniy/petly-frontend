import { Title, LinkText, StyledLink, BackgroundContainer } from '../../components/Auth/Auth.styled';
import GoogleIcon from '../../components/Auth/GoogleSignIn/GoogleIcon';
import { selectIsLogin } from 'redux/auth/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import LoginForm from 'components/Auth/LoginForm/LoginForm';

export default function LoginPage() {
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLogin);

  if (isLogin) {
    return <Navigate to="/user" />;
  }



  return (
    <>
      <BackgroundContainer>
        <Title>Login</Title>
        <LoginForm />
        <GoogleIcon  />
        <LinkText>Don't have an account? <StyledLink to="/register">Register</StyledLink></LinkText>
        <LinkText>Forgot your password? <StyledLink to="/restore">Password recovery</StyledLink></LinkText>
      </BackgroundContainer>
      </>
  )
};
