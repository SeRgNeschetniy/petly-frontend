import Loader from 'components/Loader';
import NoticesCategoriesList from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import EmpyList from 'components/Notices/EmpyList/EmptyList';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  selectIsLoading,
  selectUserNoitices,
} from 'redux/notices/notices-selectors';
import { fetchUserNotices } from 'redux/notices/notices-operation';

const NoticesOwn = () => {
  const isLoading = useSelector(selectIsLoading);
  const notices = useSelector(selectUserNoitices);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserNotices());
  }, [dispatch]);

  return (
    <>
      {/* {notices?.length === 0 && !isLoading && (
        <p>List is empty! Try to add pet :)</p>
      )} */}
      {notices?.length === 0 && !isLoading && <EmpyList />}

      {isLoading && <Loader />}

      <LazyLoadComponent>
        <NoticesCategoriesList route="own" notices={notices} />
      </LazyLoadComponent>
    </>
  );
};

export default NoticesOwn;
