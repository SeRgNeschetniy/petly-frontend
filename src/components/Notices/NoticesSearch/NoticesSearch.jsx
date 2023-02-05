import { useState } from 'react';
import {
  Form,
  Input,
  IconSearch,
  BtnSearch,
  Label,
} from './NoticesSearch.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const NoticesSearch = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      Notify.failure('Sorry, enter your query');
      return;
    }
    onSubmit(searchQuery);
    // setSearchQuery('');
  };

  const handleChange = e => setSearchQuery(e.currentTarget.value.toLowerCase());

  return (
    <Form onSubmit={handleSubmit}>
      <div style={{ position: 'relative' }}>
        <Label htmlFor="searchQuery" />
        <Input
          type="text"
          name="searchQuery"
          autoComplete="off"
          autoFocus
          placeholder="Search"
          onChange={handleChange}
          value={searchQuery}
        />
        <div style={{ position: 'absolute', right: '10px', top: '10px' }}>
          <BtnSearch type="submit">
            <IconSearch size={20} />
          </BtnSearch>
        </div>
      </div>
    </Form>
  );
};

export default NoticesSearch;
