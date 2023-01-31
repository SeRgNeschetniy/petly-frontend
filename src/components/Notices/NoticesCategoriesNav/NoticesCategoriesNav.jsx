import {
  NavLink,
  Nav,
  AuthWrapper,
  NotAuthWrapper,
} from './NoticesCategoriesNav.styled';

const NoticesCategoriesNav = () => {
  return (
    <Nav>
      {/* <NotAuthWrapper> */}
      <NavLink to="/notices/lost-found">lost/found</NavLink>
      <NavLink to="/notices/for-free">in good hands</NavLink>

      <NavLink to="/notices/sell">sell</NavLink>

      {/* </NotAuthWrapper> */}

      {/* если пользователь авторизированный */}
      {/* <AuthWrapper>
            <NavLink to='/favorite'>favorite ads</NavLink>
            <NavLink to='/own'>my ads</NavLink>
            </AuthWrapper> */}
    </Nav>
  );
};

export default NoticesCategoriesNav;
