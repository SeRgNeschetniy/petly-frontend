import { selectError } from 'redux/auth/auth-selectors';
import { selectFilter } from 'redux/search/search-selectors';
import { Form, Input, IconSearch } from './NoticesSearch.styled';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
// import { selectSearch } from "redux/search/search-selectors";
// import { setSearch } from "redux/search/search-slice";

const NoticesSearch = ({ value, handleFilterChange }) => {
  return (
    <Form>
      <Input
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        placeholder="Search"
        onChange={handleFilterChange}
        value={value}
      />
      <IconSearch size={20} />
    </Form>
  );
};

export default NoticesSearch;
