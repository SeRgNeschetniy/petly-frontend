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
  fetchUserNotices,
} from 'redux/notices/notices-operation';
import { Outlet, useParams, useSearchParams } from 'react-router-dom';
import {
  // selectNotices,
  selectIsLoading,
  selectError,
  selectNotices,
  selectFavorites,
} from 'redux/notices/notices-selectors';
import { selectIsLogin } from 'redux/auth/auth-selectors';
import useModal from 'hooks/modal';
import Modal from 'components/Modal/Modal';
import ReadMoreModal from 'components/ReadMoreModal/ReadMoreModal';

const NoticesLayoutPage = () => {
  const [oneNotice, setOneNotice] = useState([]);
  const { categoryName } = useParams();
  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useSelector(selectIsLogin);
  const error = useSelector(selectError);
  const notices = useSelector(selectNotices);
  const favorites = useSelector(selectFavorites);
  const { isModalOpen, closeModal, openModal } = useModal();

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 768px)').matches
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (categoryName) {
      if (query !== '') {
        dispatch(fetchNotices({ categoryName, query: query }));
      } else {
        dispatch(fetchNotices({ categoryName }));
      }
    } else {
      if (isLoggedIn) {
        console.log('идем зя юзера нотисами');
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

  const handleMoreClick = e => {
    if (e.target.textContent === 'Learn more') {
      if (notices.length > 0) {
        const result = notices.filter(item => item._id === e.target.id);
        setOneNotice(result);
      } else {
        const resultFavorites = favorites.filter(
          item => item._id === e.target.id
        );
        setOneNotice(resultFavorites);
      }
      openModal();
    }
  };

  window.addEventListener('click', handleMoreClick);

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
        {isModalOpen && (
          <Modal onCloseModal={closeModal}>
            <ReadMoreModal notice={oneNotice} onCloseModal={closeModal} />
          </Modal>
        )}
        {isLoading && <p>...loading</p>}
        {error && <p>Ooops... Something went wrong</p>}
      </Container>
    </>
  );
};

export default NoticesLayoutPage;
