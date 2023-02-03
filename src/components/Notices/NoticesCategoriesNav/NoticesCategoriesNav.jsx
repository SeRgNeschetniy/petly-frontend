import { useSelector } from 'react-redux';
import { selectIsLogin } from 'redux/auth/auth-selectors';
import {
  NavLink,
  Nav,
  AuthWrapper,
  NotAuthWrapper,
} from './NoticesCategoriesNav.styled';

const NoticesCategoriesNav = () => {
  const isLogin = useSelector(selectIsLogin);

  return (
    <Nav>
      {/* <NotAuthWrapper> */}
      <NavLink to="/notices/lost-found">lost/found</NavLink>
      <NavLink to="/notices/for-free">in good hands</NavLink>
      <NavLink to="/notices/sell">sell</NavLink>
      {/* </NotAuthWrapper> */}
      {isLogin && (
        <AuthWrapper>
          <NavLink to="/notices/favorite">favorite ads</NavLink>
          <NavLink to="/notices/own">my ads</NavLink>
        </AuthWrapper>
      )}
    </Nav>
  );
};

export default NoticesCategoriesNav;
