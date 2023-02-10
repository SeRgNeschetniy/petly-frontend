import { useDispatch, useSelector } from 'react-redux';
import { selectIsLogin } from 'redux/auth/auth-selectors';
import { setPage } from 'redux/notices/notices-slice';
import {
  Link,
  Nav,
  AuthWrapper,
  AuthLink,
} from './NoticesCategoriesNav.styled';

const NoticesCategoriesNav = () => {
  const isLogin = useSelector(selectIsLogin);
  const dispatch = useDispatch();

  return (
    <Nav>
      <Link onClick={() => dispatch(setPage(1))} to="/notices/lost-found">lost/found</Link>
      <Link onClick={() => dispatch(setPage(1))} to="/notices/for-free">in good hands</Link>
      <Link onClick={() => dispatch(setPage(1))} to="/notices/sell">sell</Link>
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
