import NewsSerch from "components/News/NewsSerch/NewsSerch";
import Headline from "components/Headline/Headline";




const { Container } = require("styles")

const NewsPage = () => { 
    return (
    <Container>
      <Headline title={'News'}></Headline>
      <NewsSerch />
    </Container>
  );
};














export default NewsPage;