import { useSelector } from 'react-redux';
import { selectIsLogin } from 'redux/auth/auth-selectors';
import {
  Link,
  Nav,
  AuthWrapper,
  AuthLink,
} from './NoticesCategoriesNav.styled';

const NoticesCategoriesNav = () => {
  const isLogin = useSelector(selectIsLogin);

  return (
    <Nav>
      <Link to="/notices/lost-found">lost/found</Link>
      <Link to="/notices/for-free">in good hands</Link>
      <Link to="/notices/sell">sell</Link>
      {isLogin && (
        <AuthWrapper>
          <AuthLink to="/notices/favorites">favorite ads</AuthLink>
          <AuthLink to="/notices/own">my ads</AuthLink>
        </AuthWrapper>
      )}
    </Nav>
  );
};

export default NoticesCategoriesNav;
