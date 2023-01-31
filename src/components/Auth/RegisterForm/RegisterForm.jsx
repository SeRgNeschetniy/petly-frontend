// import { useState } from 'react';
// import { Container, LinkText, StyledLink } from '../Auth.styled';
// import FirstStep from './FirstStep';
// import SecondStep from './SecondStep';
// import { useRef } from 'react';

// export default function RegisterForm() {
//   const [secondPage, setSecondPage] = useState(false);
//   const [registerState, setRegisterState] = useState({
//     email: '',
//     password: '',
//     name: '',
//     city: '',
//     phone: '',
//     confirmPassword: '',
//   });

//   const ConditionalComponent = () => {
//   switch (secondPage) {
//     case false:
//       return <FirstStep registerState={registerState} setRegisterState={setRegisterState} setSecondPage={setSecondPage}/>;
//     case true:
//       return <SecondStep registerState={registerState} setRegisterState={setRegisterState} setSecondPage={setSecondPage}/>;
//     default:
//       return <FirstStep registerState={registerState} setRegisterState={setRegisterState} setSecondPage={setSecondPage}/>;
//   }
//   };
//   return (
//     <>
//       <Container>
//           <ConditionalComponent />
//         <div>
//           <LinkText>Already have an account?<StyledLink to="/login">Login</StyledLink></LinkText>
//         </div>
//       </Container>
//     </>
//   )
// };
