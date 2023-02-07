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
  fetchNotices,
  fetchUserNotices,
} from 'redux/notices/notices-operation';
import { Navigate, Outlet, useParams, useSearchParams } from 'react-router-dom';
import { selectIsLoading, selectError } from 'redux/notices/notices-selectors';
import { selectIsLogin } from 'redux/auth/auth-selectors';
import { Container, Main } from 'styles';

const NoticesLayoutPage = () => {
  const { categoryName } = useParams();
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLogin);
  const error = useSelector(selectError);

  const [isDefaultNav, setIsDefaultNav] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 768px)').matches
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!categoryName) {
      setIsDefaultNav(true);
    } else {
      setIsDefaultNav(false);
    }
  }, [categoryName]);

  useEffect(() => {
    if (categoryName) {
      if (query !== '') {
        dispatch(fetchNotices({ categoryName, query: query }));
      } else {
        dispatch(fetchNotices({ categoryName }));
      }
    } else {
      if (isLoggedIn) {
        dispatch(fetchUserNotices());
      }
    }

    if (isLoggedIn) {
      dispatch(fetchFavoritesNotices());
    }

    window
      .matchMedia('(min-width: 768px)')
      .addEventListener('change', e => setMatches(e.matches));
  }, [dispatch, categoryName, query, isLoggedIn]);

  const onFormSubmit = searchQuery => {
    setSearchParams({ query: searchQuery });
  };

  return (
    <Main>
      <Container>
        <ContainerWrapp>
          {isDefaultNav && <Navigate to={'/notices/sell'} />}
          <Headline title={'Find your favorite pet'}></Headline>
          <NoticesSearch onSubmit={onFormSubmit} />
          <Wrapper>
            <NoticesCategoriesNav />
            {matches && <AddNoticeButton />}
          </Wrapper>
          {!matches && <AddNoticeButtonMobile />}
          {!isLoading && <Outlet />}
          {/* {isModalOpen && (
          <Modal onCloseModal={closeModal}>
            <ReadMoreModal notice={oneNotice} onCloseModal={closeModal} />
          </Modal>
        )} */}
          {isLoading && <p>...loading</p>}
          {error && <p>Ooops... Something went wrong</p>}
        </ContainerWrapp>
      </Container>
    </Main>
  );
};

export default NoticesLayoutPage;
