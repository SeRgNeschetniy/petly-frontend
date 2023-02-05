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
  const [filteredNews, setFilteredNews] = useState(News);

  useEffect(() => {
    const getNews = async () => {
      try {
        return await fetchNews();
      } catch (error) {
        console.log(error);
      }
    };
    getNews().then(data => {
      setFilteredNews(data);
      setNews(data);
    });
  }, []);
  const onSearch = (searchPhrase) => {
    setFilteredNews(News.filter(item => item.title.toLowerCase().indexOf(searchPhrase.toLowerCase()) !== -1));
  };
  return (
    <Container>
      <Headline title={'News'}></Headline>
      <NewsSerch onSearch={onSearch} />
      <NewsList News={filteredNews} />
    </Container>
  );
};

export default NewsPage;
