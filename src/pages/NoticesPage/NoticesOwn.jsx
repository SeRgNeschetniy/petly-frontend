import Loader from 'components/Loader';
import NoticesCategoriesList from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectUserNoitices,
} from 'redux/notices/notices-selectors';

const NoticesOwn = () => {
  const isLoading = useSelector(selectIsLoading);
  const notices = useSelector(selectUserNoitices);

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
