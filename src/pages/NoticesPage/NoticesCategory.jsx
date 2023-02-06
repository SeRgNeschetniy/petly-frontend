import Loader from 'components/Loader';
import NoticesCategoriesList from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  selectNotices,
  selectIsLoading,
} from 'redux/notices/notices-selectors';

const NoticesCategory = () => {
  const { categoryName } = useParams();
  const isLoading = useSelector(selectIsLoading);
  const notices = useSelector(selectNotices);

  return (
    <>
      {notices?.length === 0 && !isLoading && (
        <p>List is empty! Try to add pet :)</p>
      )}
      {isLoading && <Loader />}
      {!isLoading && (
        <NoticesCategoriesList route={categoryName} notices={notices} />
      )}
    </>
  );
};

export default NoticesCategory;
