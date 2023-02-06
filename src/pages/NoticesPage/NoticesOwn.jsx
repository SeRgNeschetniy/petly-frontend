import Loader from 'components/Loader';
import NoticesCategoriesList from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import { useSelector } from 'react-redux';
import {
  selectNotices,
  selectIsLoading,
} from 'redux/notices/notices-selectors';

const NoticesOwn = () => {
  const isLoading = useSelector(selectIsLoading);
  const notices = useSelector(selectNotices);

  console.log('Render NoticesCategory');

  return (
    <>
      {notices?.length === 0 && !isLoading && (
        <p>List is empty! Try to add pet :)</p>
      )}
      {!isLoading && <NoticesCategoriesList route="own" notices={notices} />}
      {!isLoading && <Loader />}
    </>
  );
};

export default NoticesOwn;
