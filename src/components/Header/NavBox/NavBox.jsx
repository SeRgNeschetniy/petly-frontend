import {
  Container,
  AuthNavBox,
  AuthLinks,
  ListLinks,
  Links,
} from './NavBox.styled';
import UserNav from '../UserNav';
import linksData from 'utils/linksData';
import { useSelector } from 'react-redux';

export default function NavBox({ show, showContent }) {
  const { authLinksData, mainLinksData } = linksData;
  const isLogin = useSelector(({ auth }) => auth.isLogin);

  return (
    <Container active={show}>
      <AuthNavBox>
        {isLogin ? (
          <UserNav showContent={showContent} />
        ) : (
          authLinksData.map(({ id, to, title, accent = 'false' }) => (
            <AuthLinks onClick={showContent} key={id} to={to} accent={accent}>
              {title}
            </AuthLinks>
          ))
        )}
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
    </Container>
  );
}
