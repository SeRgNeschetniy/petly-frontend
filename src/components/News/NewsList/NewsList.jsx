import React from 'react';
import NewsItem from '../NewsItem/NewsItem';
import { List } from './NewsList.styled';


  
const NewsList = ({ News }) => {
  if (News.length < 1) {
    return <p>Something went wrong...</p>;
  }
  return (
    <List>
      
      {News.map(item => {
        return <NewsItem key={item._id} {...item} />;
      })}
    </List>
  );
};

export default NewsList;
