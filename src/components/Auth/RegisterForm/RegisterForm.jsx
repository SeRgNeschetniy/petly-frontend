import { useState } from 'react';
import { LinkText, StyledLink } from '../Auth.styled';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import Headline from 'components/Headline/Headline';

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
      <Headline title="Registration" />
      <div>
            {Child}
        <div>
          <LinkText>Already have an account? <StyledLink to="/login">Login</StyledLink></LinkText>
        </div>
      </div>
    </>
  )
};
