import { Loader, NoticesCategoriesList } from 'components/components';
import { useSelector } from 'react-redux';
import {
  selectFavorites,
  selectIsLoading,
} from 'redux/notices/notices-selectors';

const NoticesFavorites = () => {
  //const { categoryName } = useParams();
  const isLoading = useSelector(selectIsLoading);
  const notices = useSelector(selectFavorites);

  return (
    <>
      {notices?.length === 0 && !isLoading && (
        <p>List is empty! Try to add pet :)</p>
      )}
      {!isLoading && (
        <NoticesCategoriesList route="favorites" notices={notices} />
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default NoticesFavorites;
