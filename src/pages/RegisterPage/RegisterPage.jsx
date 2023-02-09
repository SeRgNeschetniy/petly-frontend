import { useState } from 'react';
import { BackgroundContainer } from '../../components/Auth/Auth.styled';
import FirstStep from '../../components/Auth/RegisterForm/FirstStep';
import SecondStep from '../../components/Auth/RegisterForm/SecondStep';
import { selectError, selectIsLogin } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { Container, Main } from 'styles';
import { Notify } from 'notiflix';

export default function RegisterPage() {
  const [secondPage, setSecondPage] = useState(false);
  const error = useSelector(selectError);
  const [registerState, setRegisterState] = useState({
    email: '',
    password: '',
    name: '',
    city: '',
    phone: '',
    confirmPassword: '',
  });

  let Child = undefined;
  if (!secondPage) {
    Child = (
      <FirstStep
        registerState={registerState}
        setRegisterState={setRegisterState}
        setSecondPage={setSecondPage}
      />
    );
  } else {
    Child = (
      <SecondStep
        registerState={registerState}
        setRegisterState={setRegisterState}
        setSecondPage={setSecondPage}
      />
    );
  }

  const notifyOptions = {
    showOnlyTheLastOne: true,
    timeout: 2000,
  };

  const isLogin = useSelector(selectIsLogin);

  if (isLogin) {
    return <Navigate to="/user" />;
  }

  return (
    <Main page="login">
      <Container>
        {error && Notify.failure(error.message, notifyOptions)}
        <BackgroundContainer>{Child}</BackgroundContainer>
      </Container>
    </Main>
  );
}
