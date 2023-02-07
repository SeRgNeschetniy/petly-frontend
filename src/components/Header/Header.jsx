import { useState } from 'react';
import { Logo, HeaderContainer, MainContainer } from './Header.styled';
// import { Container } from 'styles';
import NavBox from './NavBox';
import AuthNavBoxTablet from './AuthNavBoxTablet';
import ShowBtn from './ShowBtn';

export default function Header() {
  const [show, setShow] = useState(false);
  const showContent = () => {
    setShow(show => !show);
  };

  return (
    <MainContainer>
      <HeaderContainer>
        <Logo />
        <AuthNavBoxTablet show={show} />
        <ShowBtn show={show} showContent={showContent} />
        <NavBox show={show} showContent={showContent} />
      </HeaderContainer>
    </MainContainer>
  );
}
