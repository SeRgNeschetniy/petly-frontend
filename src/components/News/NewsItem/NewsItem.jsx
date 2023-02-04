import React from "react";
import {Heading, Wrapper, Box, Date, Item, Link,  } from './NewsItem.styled'


const NewsItem = ({
  title,
  url,
  description,
  date,
  
}) => {
  return (
    <Item>
          <Heading>{title}</Heading>
          <Wrapper>{description}</Wrapper>
          <Box>
              <Date>{date}</Date>
              <a href={url} target="_blank" rel="noopener noreferrer"> <Link>Read more</Link>
                  
              </a>
          </Box>
          
    </Item>
  );
};

export default NewsItem;