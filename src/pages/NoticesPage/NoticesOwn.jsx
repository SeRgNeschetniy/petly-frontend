import Loader from 'components/Loader';
import NoticesCategoriesList from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { useSelector } from 'react-redux';
import {
  selectNotices,
  selectIsLoading,
} from 'redux/notices/notices-selectors';

const NoticesOwn = () => {
  const isLoading = useSelector(selectIsLoading);
  const notices = useSelector(selectNotices);

  return (
    <>
      {notices?.length === 0 && !isLoading && (
        <p>List is empty! Try to add pet :)</p>
      )}
      {isLoading && <Loader />}

      <LazyLoadComponent>
        <NoticesCategoriesList route="own" notices={notices} />
      </LazyLoadComponent>
    </>
  );
};

export default NoticesOwn;
