import axios from 'axios';
import NewsSerch from 'components/News/NewsSerch/NewsSerch';
import Headline from 'components/Headline/Headline';
import { useEffect, useState } from 'react';
import NewsList from 'components/News/NewsList/NewsList';
import { Container, Main } from 'styles';

//axios.defaults.baseURL = 'https://petly-backend-vopf.onrender.com/api';

const fetchNews = async () => {
  const { data } = await axios.get('/news');
  return data;
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

  const onSearch = searchPhrase => {
    setFilteredNews(
      News.filter(
        item =>
          item.title.toLowerCase().indexOf(searchPhrase.toLowerCase()) !== -1
      )
    );
  };
  return (
    <Main>
      <Container>
        <Headline title={'News'}></Headline>
        <NewsSerch onSearch={onSearch} />
        <NewsList News={filteredNews} />
      </Container>
    </Main>
  );
};

export default NewsPage;
