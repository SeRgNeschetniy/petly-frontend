import Loader from 'components/Loader';
import NoticesCategoriesList from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  selectNotices,
  selectIsLoading,
  selectTotalNotice,
} from 'redux/notices/notices-selectors';
import EmpyList from 'components/Notices/EmpyList/EmptyList';
import { selectPage } from 'redux/notices/notices-selectors';
import ReactPaginate from 'react-paginate';
import { fetchNotices } from 'redux/notices/notices-operation';
import { selectSearch } from 'redux/search/search-selectors';
import { setPage } from 'redux/notices/notices-slice';

const NoticesCategory = () => {
  const { category } = useParams();
  const notices = useSelector(selectNotices);
  const isLoading = useSelector(selectIsLoading);
  const total = useSelector(selectTotalNotice);
  const query = useSelector(selectSearch);
  const limit = 4;
  // const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(total / limit);
  const page = useSelector(selectPage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (query !== '') {
      dispatch(
        fetchNotices({
          category,
          query: query,
          page: page,
          limit: limit,
        })
      );
    } else {
      dispatch(fetchNotices({ category, page: page, limit: limit }));
    }
  }, [dispatch, category, query, page]);

  const handlePageClick = event => {
    dispatch(setPage(event.selected + 1));
  };

  return (
    <>
      {isLoading && <Loader />}
      {notices?.length === 0 && !isLoading && <EmpyList />}

      <NoticesCategoriesList route={category} notices={notices} />
      {notices?.length > 0 && (
        <ReactPaginate
          previousLabel={'←'}
          nextLabel={'→'}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          previousLinkClassName={'pagination__link'}
          nextLinkClassName={'pagination__link'}
          disabledClassName={'pagination__link--disabled'}
          activeClassName={'pagination__link--active'}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          nextClassName="page-item"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          renderOnZeroPageCount={null}
        />
      )}
    </>
  );
};

export default NoticesCategory;
