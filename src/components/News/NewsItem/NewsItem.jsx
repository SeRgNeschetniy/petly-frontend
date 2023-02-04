import React from "react";



const NewsItem = ({
  title,
  url,
  description,
  date,
  
}) => {
  return (
    <Item>
          <Heading>{title}</Heading>
          <wrapper>{description}</wrapper>
          <box>
              <date>{date}</date>
              <a href={url} target="_blank" rel="noopener noreferrer"><p>Read more<p/></></a>
          </box>
          
    </Item>
  );
};

export default NewsItem;