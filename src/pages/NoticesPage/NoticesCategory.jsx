import Loader from 'components/Loader';
import NoticesCategoriesList from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import { useEffect, useState } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import {
  selectNotices,
  selectIsLoading,
} from 'redux/notices/notices-selectors';

import ReactPaginate from 'react-paginate';
import { fetchNotices } from 'redux/notices/notices-operation';

const NoticesCategory = () => {
  const { categoryName } = useParams();
  const isLoading = useSelector(selectIsLoading);
  //const [searchParams, setSearchParams] = useSearchParams();
  const query = '';
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = 20;

  const dispatch = useDispatch();

  useEffect(() => {
    if (categoryName) {
      if (query !== '') {
        dispatch(
          fetchNotices({
            categoryName,
            query: query,
            page: currentPage,
          })
        );
      } else {
        dispatch(fetchNotices({ categoryName, page: currentPage }));
      }
    }
  }, [dispatch, categoryName, query, currentPage]);

  const notices = useSelector(selectNotices);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  return (
    <>
      {notices?.length === 0 && !isLoading && (
        <p>List is empty! Try to add pet :)</p>
      )}
      {isLoading && <Loader />}

      <NoticesCategoriesList route={categoryName} notices={notices} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default NoticesCategory;
