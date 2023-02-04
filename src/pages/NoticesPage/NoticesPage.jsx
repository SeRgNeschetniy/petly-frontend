import NoticesSearch from 'components/Notices/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import Headline from 'components/Headline/Headline';
import AddNoticeButton from 'components/Notices/ AddNoticeButton/ AddNoticeButton';
import AddNoticeButtonMobile from 'components/Notices/ AddNoticeButton/ AddNoticeButtonMobile';
import { Container, Wrapper } from './NoticiesPage.styled';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNotices } from 'redux/notices/notices-operation';
import { useParams, useSearchParams } from 'react-router-dom';
import {
  selectNotices,
  selectIsLoading,
  selectError,
} from 'redux/notices/notices-selectors';

const NoticesPage = () => {
  const { categoryName } = useParams();

  const notices = useSelector(selectNotices);
  const isLoading = useSelector(selectIsLoading);
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
    window
      .matchMedia('(min-width: 768px)')
      .addEventListener('change', e => setMatches(e.matches));
  }, [dispatch, categoryName, query]);

  const onFormSubmit = searchQuery => {
    setSearchParams({ query: searchQuery });
  };

  return (
    <Container>
      <Headline title={'Find your favorite pet'}></Headline>
      <NoticesSearch onSubmit={onFormSubmit} />
      <Wrapper>
        <NoticesCategoriesNav />
        {matches && <AddNoticeButton />}
      </Wrapper>
      {!matches && <AddNoticeButtonMobile />}
      {notices?.length === 0 && !isLoading && (
        <p>List is empty! Try to add pet :)</p>
      )}
      {notices?.length > 0 && <NoticesCategoriesList />}
      {error && <p>Ooops... Something went wrong</p>}
    </Container>
  );
};

export default NoticesPage;
