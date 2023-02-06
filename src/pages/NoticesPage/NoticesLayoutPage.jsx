import NoticesSearch from 'components/Notices/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import Headline from 'components/Headline/Headline';
import AddNoticeButton from 'components/Notices/AddNoticeButton/AddNoticeButton';
import AddNoticeButtonMobile from 'components/Notices/AddNoticeButton/AddNoticeButtonMobile';
import { Container, Wrapper } from './NoticiesPage.styled';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchFavoritesNotices,
  fetchNotices,
} from 'redux/notices/notices-operation';
import { Outlet, useParams, useSearchParams } from 'react-router-dom';
import {
  // selectNotices,
  selectIsLoading,
  selectError,
} from 'redux/notices/notices-selectors';
import { selectIsLogin } from 'redux/auth/auth-selectors';

const NoticesLayoutPage = () => {
  const { categoryName } = useParams();

  // const notices = useSelector(selectNotices);
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLogin);
  const error = useSelector(selectError);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 768px)').matches
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (query !== '') {
      dispatch(fetchNotices({ categoryName, query: query }));
    } else {
      dispatch(fetchNotices({ categoryName }));
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
    <>
      <Container>
        <Headline title={'Find your favorite pet'}></Headline>
        <NoticesSearch onSubmit={onFormSubmit} />
        <Wrapper>
          <NoticesCategoriesNav />
          {matches && <AddNoticeButton />}
        </Wrapper>
        {!matches && <AddNoticeButtonMobile />}
        {!isLoading && <Outlet />}
        {/* {isLoading && <p>...loading</p>} */}
        {error && <p>Ooops... Something went wrong</p>}
      </Container>
    </>
  );
};

export default NoticesLayoutPage;
