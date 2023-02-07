import { useState } from 'react';
import { Logo, Container } from './Header.styled';
import NavBox from './NavBox';
import AuthNavBoxTablet from './AuthNavBoxTablet';
import ShowBtn from './ShowBtn';

export default function Header() {
  const [show, setShow] = useState(false);
  const showContent = () => {
    setShow(show => !show);
  };

  return (
    <Container>
      <Logo />

      <AuthNavBoxTablet show={show} />
      <ShowBtn show={show} showContent={showContent} />
      <NavBox show={show} showContent={showContent} />
    </Container>
  );
}
