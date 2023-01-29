import { useState } from 'react';
import {
  Logo,
  AccentText,
  Container,
  ShowButton,
  NavBox,
  AuthNavBox,
  AuthLinks,
  ListLinks,
  Links,
} from './Header.styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import LinksData from 'utils/linksData';
// AiOutlineClose

export default function Header() {
  const [show, setShow] = useState(false);

  const showContent = () => {
    setShow(show => !show);
  };

  return (
    <Container>
      <Logo to={'/'}>
        pe<AccentText>t</AccentText>ly
      </Logo>
      <ShowButton onClick={showContent}>
        {!show && <GiHamburgerMenu />}
        {show && <AiOutlineClose />}
      </ShowButton>

      <NavBox active={show}>
        <AuthNavBox>
          <AuthLinks to={'/loggin'} accent={'true'}>
            Login
          </AuthLinks>
          <AuthLinks to={'/register'}>Register</AuthLinks>
        </AuthNavBox>
        <ListLinks>
          {LinksData.map(({ id, to, title }) => (
            <li key={id}>
              <Links to={to}>{title}</Links>
            </li>
          ))}
        </ListLinks>
      </NavBox>
    </Container>
  );
}
