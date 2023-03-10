import React from 'react';
import {
  Heading,
  Wrapper,
  Box,
  Date,
  Item,
  Link,
  Border,
} from './NewsItem.styled';
import { dateConverter  } from '../../../shared/formatDate'
const NewsItem = ({ title, url, description, date }) => {
 
  return (
    <Item>
      <Border></Border>
      <Heading>{title}</Heading>
      <Wrapper>{description}</Wrapper>
      <Box>
        <Date>{dateConverter(date)}</Date>
        <Link href={url} target="_blank" rel="noopener noreferrer">
          Read more
        </Link>
      </Box>
    </Item>
  );
};

export default NewsItem;
