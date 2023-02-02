import NoticesSearch from 'components/Notices/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import Headline from 'components/Headline/Headline';
import AddNoticeButton from 'components/Notices/ AddNoticeButton/ AddNoticeButton';
import AddNoticeButtonMobile from 'components/Notices/ AddNoticeButton/ AddNoticeButtonMobile';
import { Container, Wrapper } from './NoticiesPage.styled';
import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//   selectError,
//   selectIsLoading,
//   selectSellPets,
//   selectState,
// } from 'redux/notices/notices-selectors';
import { fetchPets } from 'redux/notices/notices-operation';
import { useParams } from 'react-router-dom';

const NoticesPage = () => {
  const { categoryName } = useParams();
  const [pets, setPets] = useState([]);

  const [search, setSearch] = useState('');
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 768px)').matches
  );

  useEffect(() => {
    const getPets = async () => {
      try {
        const data = await fetchPets(categoryName);
        console.log(data.notices);
        setPets(data.notices);
        window
          .matchMedia('(min-width: 768px)')
          .addEventListener('change', e => setMatches(e.matches));
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    getPets();
  }, [categoryName]);

  const handleFilterChange = e => {
    const { value } = e.currentTarget;
    setSearch(value);
  };

  const getSearchedPets = () => {
    if (!search) {
      return pets;
    }
    const normalizedFilter = search.toLocaleLowerCase();
    const filteredPets = pets.filter(({ tittle }) => {
      const normalizedTitle = tittle.toLocaleLowerCase();
      const resultOfFilter = normalizedTitle.includes(normalizedFilter);
      return resultOfFilter;
    });
    return filteredPets;
  };

  const filteredPets = getSearchedPets();

  return (
    <Container>
      <Headline title={'Find your favorite pet'}></Headline>
      <NoticesSearch value={search} handleFilterChange={handleFilterChange} />
      <Wrapper>
        <NoticesCategoriesNav />
        {matches && <AddNoticeButton />}
      </Wrapper>
      {!matches && <AddNoticeButtonMobile />}
      {/* <NoticesCategoriesList /> */}
      {/* {sellPets?.length === 0 && !isLoading && (
        <p>Sell list is empty! Try to add pet</p>
      )} */}
      {pets?.length > 0 && (
        <NoticesCategoriesList filteredPets={filteredPets} />
      )}
      {/* {error && <p>Ooops... Something went wrong</p>} */}
    </Container>
  );
};

export default NoticesPage;
