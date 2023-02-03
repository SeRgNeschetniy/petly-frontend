import NewsSerch from "components/News/NewsSerch/NewsSerch";
import Headline from "components/Headline/Headline";
import { Container } from 'styles';
import { useEffect, useState } from 'react';

const { REACT_APP_BASE_URL } = process.env;

const fetchNews = async () => {
  const response = await fetch(`${REACT_APP_BASE_URL}/api/News`);
  return await response.json();
};


const NewsPage = () => {
  const [News, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const data = await fetchNews();
        setNews(data);
      } catch (error) {
        console.log(error);
      }
    };
    getNews();
  }, []);


    return (
    <Container>
      <Headline title={'News'}></Headline>
      <NewsSerch  />
    </Container>
  );
};














export default NewsPage;