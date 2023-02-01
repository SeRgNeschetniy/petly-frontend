import NoticesSearch from 'components/Notices/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import Headline from 'components/Headline/Headline';
import AddNoticeButton from 'components/Notices/ AddNoticeButton/ AddNoticeButton';
import AddNoticeButtonMobile from 'components/Notices/ AddNoticeButton/ AddNoticeButtonMobile';
import { Container, Wrapper } from './NoticiesPage.styled';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectSellPets,
} from 'redux/notices/notices-selectors';
import { fetchSellPets } from 'redux/notices/notices-operation';

const NoticesPage = () => {
  const [sellPets, setsellPets] = useState([]);
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 768px)').matches
  );

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const data = await fetchSellPets();
        setsellPets(data.notices);
        console.log(data.notices);
        window
          .matchMedia('(min-width: 768px)')
          .addEventListener('change', e => setMatches(e.matches));
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    fetchPet();
  }, [setsellPets]);
  // const sellPets = useSelector(selectSellPets);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  // const dispatch = useDispatch();

  // const [matches, setMatches] = useState(
  //   window.matchMedia('(min-width: 768px)').matches
  // );

  // useEffect(() => {
  //   dispatch(fetchSellPets());
  //   window
  //     .matchMedia('(min-width: 768px)')
  //     .addEventListener('change', e => setMatches(e.matches));
  // }, [dispatch]);

  // useEffect(() => {
  //   window
  //   .matchMedia("(min-width: 768px)")
  //   .addEventListener('change', e => setMatches( e.matches ));
  // }, []);

  return (
    <Container>
      <Headline title={'Find your favorite pet'}></Headline>
      <NoticesSearch />
      <Wrapper>
        <NoticesCategoriesNav />
        {matches && <AddNoticeButton />}
      </Wrapper>
      {!matches && <AddNoticeButtonMobile />}
      {/* <NoticesCategoriesList /> */}
      {/* {sellPets?.length === 0 && !isLoading && (
        <p>Sell list is empty! Try to add pet</p>
      )} */}
      {sellPets?.length > 0 && <NoticesCategoriesList pets={sellPets} />}
      {/* {error && <p>Ooops... Something went wrong</p>} */}
    </Container>
  );
};

export default NoticesPage;
