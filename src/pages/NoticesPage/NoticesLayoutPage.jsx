import { Notify } from 'notiflix/build/notiflix-notify-aio';
import NoticesSearch from 'components/Notices/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import Headline from 'components/Headline/Headline';
import AddNoticeButton from 'components/Notices/AddNoticeButton/AddNoticeButton';
import AddNoticeButtonMobile from 'components/Notices/AddNoticeButton/AddNoticeButtonMobile';
import { ContainerWrapp, Wrapper } from './NoticiesPage.styled';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchFavoritesNotices,
  fetchUserNotices,
} from 'redux/notices/notices-operation';
import { Outlet, useParams } from 'react-router-dom';
import { selectError } from 'redux/notices/notices-selectors';
import { selectIsLogin } from 'redux/auth/auth-selectors';
import { Container, Main } from 'styles';

const NoticesLayoutPage = () => {
  const { categoryName } = useParams();
  const isLoggedIn = useSelector(selectIsLogin);
  const error = useSelector(selectError);

  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 768px)').matches
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchFavoritesNotices());
      dispatch(fetchUserNotices());
    }

    window
      .matchMedia('(min-width: 768px)')
      .addEventListener('change', e => setMatches(e.matches));
  }, [dispatch, categoryName, isLoggedIn]);

  return (
    <Main>
      <Container>
        <ContainerWrapp>
          <Headline title={'Find your favorite pet'}></Headline>
          <NoticesSearch />
          <Wrapper>
            <NoticesCategoriesNav />
            {matches && <AddNoticeButton />}
          </Wrapper>
          {!matches && <AddNoticeButtonMobile />}

          <Outlet />

          {error && Notify.warning(Error)}
        </ContainerWrapp>
      </Container>
    </Main>
  );
};

export default NoticesLayoutPage;
