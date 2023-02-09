import { useState, useEffect } from 'react';
import { Form, Input, BtnSearch, Label, Wrapper } from './NoticesSearch.styled';
import { RxCross1 } from 'react-icons/rx';
import { AiOutlineSearch } from 'react-icons/ai';
import useDebounce from 'hooks/useDebouce';
import { useDispatch } from 'react-redux';
import { setSearch } from 'redux/search/search-slice';

const NoticesSearch = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 500);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearch(debouncedSearch));
  }, [dispatch, debouncedSearch]);

  const handleChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const removeQuery = () => {
    setSearchQuery('');
  };

  return (
    <Form>
      <Wrapper style={{ position: 'relative' }}>
        <Label htmlFor="searchQuery" />
        <Input
          type="text"
          name="searchQuery"
          autoComplete="off"
          placeholder="Search"
          onChange={handleChange}
          value={searchQuery}
        />
        <div style={{ position: 'absolute', right: '12px', top: '10px' }}>
          {Boolean(searchQuery.length > 0) ? (
            <BtnSearch type="submit">
              <RxCross1 onClick={() => removeQuery('erase')} />
            </BtnSearch>
          ) : (
            <BtnSearch type="submit">
              <AiOutlineSearch size={20} />
            </BtnSearch>
          )}
        </div>
      </Wrapper>
    </Form>
  );
};

export default NoticesSearch;
