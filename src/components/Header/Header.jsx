import { useState } from 'react';
import { Logo, AccentText, Container } from './Header.styled';
import NavBox from './NavBox';
import AuthNavBoxTablet from './AuthNavBoxTablet';
import ShowBtn from './ShowBtn';
// import UserNav from './UserNav';

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

      <AuthNavBoxTablet show={show} />
      <ShowBtn show={show} showContent={showContent} />
      <NavBox show={show} showContent={showContent} />
      {/* <UserNav /> */}
    </Container>
  );
}
