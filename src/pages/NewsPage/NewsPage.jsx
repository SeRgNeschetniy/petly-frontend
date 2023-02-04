import NewsSerch from 'components/News/NewsSerch/NewsSerch';
import Headline from 'components/Headline/Headline';
import { Container } from 'styles';
import { useEffect, useState } from 'react';
import NewsList from 'components/News/NewsList/NewsList';
const { REACT_APP_BASE_URL } = process.env;

const fetchNews = async () => {
  const response = await fetch(`${REACT_APP_BASE_URL}/api/news`);
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
console.log(News)
  return (
    <Container>
      <Headline title={'News'}></Headline>
      <NewsSerch  />
      <NewsList  News={News}/>
    </Container>
  );
};

export default NewsPage;
