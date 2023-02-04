import { useSelector } from 'react-redux';
import { selectIsLogin } from 'redux/auth/auth-selectors';
import { Link, Nav, AuthWrapper } from './NoticesCategoriesNav.styled';

const NoticesCategoriesNav = () => {
  const isLogin = useSelector(selectIsLogin);

  return (
    <Nav>
      <Link to="/notices/lost-found">lost/found</Link>
      <Link to="/notices/for-free">in good hands</Link>
      <Link to="/notices/sell">sell</Link>
      {isLogin && (
        <AuthWrapper>
          <Link to="/notices/favorites">favorite ads</Link>
          <Link to="/notices/own">my ads</Link>
        </AuthWrapper>
      )}
    </Nav>
  );
};

export default NoticesCategoriesNav;
