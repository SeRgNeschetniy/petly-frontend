import { Form, Input, IconSearch } from './NewsSerch.styled';
const NewsSerch = (props) => {
   const handleChangeSearch = e => {
     props.onSearch(e.target.value);
     
   };

  return (
    <Form>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search"
        onChange={handleChangeSearch}
        // value={search}
      />
      <IconSearch size={20} />
    </Form>
  );
};

export default NewsSerch;
