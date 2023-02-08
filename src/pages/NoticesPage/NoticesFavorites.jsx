import { Loader, NoticesCategoriesList } from 'components/components';
import EmpyList from 'components/Notices/EmpyList/EmptyList';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
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
      {/* {notices?.length === 0 && !isLoading && (
        <p>List is empty! Try to add pet :)</p>
      )} */}
      {notices?.length === 0 && !isLoading && <EmpyList />}
      {isLoading && <Loader />}
      <LazyLoadComponent>
        <NoticesCategoriesList route="favorites" notices={notices} />
      </LazyLoadComponent>
    </>
  );
};

export default NoticesFavorites;
