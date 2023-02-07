import { useState } from 'react';
import { Form, Input, BtnSearch, Label, Wrapper } from './NoticesSearch.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { RxCross1 } from 'react-icons/rx';
import { AiOutlineSearch } from 'react-icons/ai';

const NoticesSearch = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [changeInput, setChangeInput] = useState('search');

  const handleSubmit = e => {
    e.preventDefault();
    if (changeInput === 'search') {
      if (searchQuery.trim() === '') {
        Notify.failure('Sorry, enter your query');
        return;
      }
    }
    onSubmit(searchQuery);
    setChangeInput('search');
    // setSearchQuery('');
  };

  const handleChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Wrapper style={{ position: 'relative' }}>
        <Label htmlFor="searchQuery" />
        <Input
          type="text"
          name="searchQuery"
          autoComplete="off"
          // autoFocus
          placeholder="Search"
          onChange={handleChange}
          value={searchQuery}
        />
        <div style={{ position: 'absolute', right: '12px', top: '10px' }}>
          {Boolean(searchQuery.length > 0) ? (
            <BtnSearch type="submit">
              <RxCross1 onClick={() => setChangeInput('erase')} />
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
