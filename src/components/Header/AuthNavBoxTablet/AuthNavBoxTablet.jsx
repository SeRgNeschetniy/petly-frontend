import { Container, AuthLinks } from './AuthNavBoxTablet.styled';
import { useSelector } from 'react-redux';
import linksData from 'utils/linksData';
import UserNav from '../UserNav';

export default function AuthNavBoxTablet({ show }) {
  const { authLinksData } = linksData;
  const isLogin = useSelector(({ auth }) => auth.isLogin);
  return (
    <Container show={show}>
      {isLogin ? (
        <UserNav />
      ) : (
        authLinksData.map(({ id, to, title, accent = 'false' }) => (
          <AuthLinks key={id} to={to} accent={accent}>
            {title}
          </AuthLinks>
        ))
      )}
    </Container>
  );
}
