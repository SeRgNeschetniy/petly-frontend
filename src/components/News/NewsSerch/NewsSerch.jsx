import { Form, Input, IconSearch } from './NewsSerch.styled';
import { HiXMark } from "react-icons/hi2";
import {useState} from 'react';
const NewsSerch = (props) => {
const [searchQuery, setSearchQuery] = useState("");

   const handleChangeSearch = (e) => {
     props.onSearch(e.target.value);
     
  };
  
  const searchHandler = (e) => {
    setSearchQuery(e.target.value);
  };

   const removeQuery = () => {
    setSearchQuery("");
    props.onSearch("");
  };


  return (
    <Form onChange={searchHandler} >
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search"
        onChange={handleChangeSearch} 
        value={searchQuery} 
      />
      <div style={{ position: 'absolute', right: '10px', top: '10px' }}>
       {!searchQuery &&  <IconSearch size={20} />} 
        {searchQuery && <HiXMark size={20} onClick={ removeQuery} />} 
      </div>
    </Form>
  );
};

export default NewsSerch;
