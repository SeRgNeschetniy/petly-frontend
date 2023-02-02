import { useState } from 'react';
import { BackgroundContainer } from '../Auth.styled';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import { selectIsLogin } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

export default function RegisterForm() {
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
    Child = <FirstStep registerState={registerState} setRegisterState={setRegisterState} setSecondPage={setSecondPage}/>
  } else {
    Child = <SecondStep registerState={registerState} setRegisterState={setRegisterState} setSecondPage={setSecondPage}/>
  }

  const isLogin = useSelector(selectIsLogin);

  if (isLogin) {
    return <Navigate to="/user" />
  }

  // const ConditionalComponent = () => {
  // switch (secondPage) {
  //   case false:
  //     return <FirstStep registerState={registerState} setRegisterState={setRegisterState} setSecondPage={setSecondPage}/>;
  //   case true:
  //     return <SecondStep registerState={registerState} setRegisterState={setRegisterState} setSecondPage={setSecondPage}/>;
  //   default:
  //     return <FirstStep registerState={registerState} setRegisterState={setRegisterState} setSecondPage={setSecondPage}/>;
  // }
  // };

  return (
    <>
      <BackgroundContainer>
              {Child}
      </BackgroundContainer>
    </>
  )
};
