import React from 'react';
import NewsItem from '../NewsItem/NewsItem';

import { List } from './NewsList.styled';

const NewsList = ({ news }) => {
  if (news.length < 1) {
    return <p>Something went wrong...</p>;
  }
  return (
    <List>
      {news.map(item => {
        return <NewsItem key={item._id} {...item} />;
      })}
    </List>
  );
};

export default NewsList;
