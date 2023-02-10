import { Loader, NoticesCategoriesList } from 'components/components';
import EmpyList from 'components/Notices/EmpyList/EmptyList';
import { useSelector } from 'react-redux';
import {
  selectFavorites,
  selectIsLoading,
} from 'redux/notices/notices-selectors';
import { ListWrapp } from './NoticiesPage.styled';

const NoticesFavorites = () => {
  //const { categoryName } = useParams();
  const isLoading = useSelector(selectIsLoading);
  const notices = useSelector(selectFavorites);

  return (
    <>
      {notices && notices?.length === 0 && !isLoading && <EmpyList />}
      <ListWrapp>
        {isLoading && <Loader />}
        <NoticesCategoriesList route="favorites" notices={notices} />
      </ListWrapp>
    </>
  );
};

export default NoticesFavorites;
