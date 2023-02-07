import { useState } from 'react';
import { BackgroundContainer } from '../../components/Auth/Auth.styled';
import FirstStep from '../../components/Auth/RegisterForm/FirstStep';
import SecondStep from '../../components/Auth/RegisterForm/SecondStep';
import MobileBgImage from '../../components/MainPageImages/MobileBgImage';
import TabletBgImage from '../../components/MainPageImages/TabletBgImage';
import DesktopBgImage from '../../components/MainPageImages/DesktopBgImage';
import { selectIsLogin } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

export default function RegisterPage() {
  const [secondPage, setSecondPage] = useState(false);

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

  const isLogin = useSelector(selectIsLogin);

  if (isLogin) {
    return <Navigate to="/user" />;
  }

  return (
    <>
      <BackgroundContainer>
        {Child}
        <MobileBgImage />
      </BackgroundContainer>
      <TabletBgImage />
      <DesktopBgImage />
    </>
  );
}
