import { Form, Input, IconSearch } from './NoticesSearch.styled';
// import { useSelector, useDispatch } from "react-redux";
// import { selectSearch } from "redux/search/search-selectors";
// import { setSearch } from "redux/search/search-slice";

const NoticesSearch = () => {
  // const search = useSelector(selectSearch);
  // const dispatch = useDispatch();

  //  const handleChangeSearch = e => {
  //         const { value } = e.target;
  //         dispatch(setSearch(value));
  //     };

  return (
    <Form>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search"
        // onChange={handleChangeSearch}
        // value={search}
      />
      <IconSearch size={20} />
    </Form>
  );
};

export default NoticesSearch;
