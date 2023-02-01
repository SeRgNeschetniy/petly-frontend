import { useState } from 'react';
import {
  Logo,
  AccentText,
  Container,
  ShowButton,
  NavBox,
  AuthNavBox,
  AuthNavBoxTablet,
  AuthLinks,
  ListLinks,
  Links,
} from './Header.styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import linksData from 'utils/linksData';

const { authLinksData, mainLinksData } = linksData;

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

      <AuthNavBoxTablet show={show}>
        {authLinksData.map(({ id, to, title, accent = 'false' }) => (
          <AuthLinks key={id} to={to} accent={accent}>
            {title}
          </AuthLinks>
        ))}
      </AuthNavBoxTablet>

      <ShowButton onClick={showContent}>
        {!show && <GiHamburgerMenu />}
        {show && <AiOutlineClose />}
      </ShowButton>

      <NavBox active={show}>
        <AuthNavBox>
          {authLinksData.map(({ id, to, title, accent = 'false' }) => (
            <AuthLinks onClick={showContent} key={id} to={to} accent={accent}>
              {title}
            </AuthLinks>
          ))}
        </AuthNavBox>

        <ListLinks>
          {mainLinksData.map(({ id, to, title }) => (
            <li key={id}>
              <Links onClick={showContent} to={to}>
                {title}
              </Links>
            </li>
          ))}
        </ListLinks>
      </NavBox>
    </Container>
  );
}
