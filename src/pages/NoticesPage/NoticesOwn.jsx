import Loader from 'components/Loader';
import NoticesCategoriesList from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import EmpyList from 'components/Notices/EmpyList/EmptyList';
import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectUserNoitices,
} from 'redux/notices/notices-selectors';
import { ListWrapp } from './NoticiesPage.styled';

const NoticesOwn = () => {
  const isLoading = useSelector(selectIsLoading);
  const notices = useSelector(selectUserNoitices);

  return (
    <>
      {notices && notices?.length === 0 && !isLoading && <EmpyList />}

      <ListWrapp>
        {isLoading && <Loader />}
        <NoticesCategoriesList route="own" notices={notices} />
      </ListWrapp>
    </>
  );
};

export default NoticesOwn;
