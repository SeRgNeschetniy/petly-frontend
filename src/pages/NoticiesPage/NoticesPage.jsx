import NoticesSearch from 'components/Notices/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';
import Headline from 'components/Headline/Headline';
import AddNoticeButton from 'components/Notices/ AddNoticeButton/ AddNoticeButton';
import { Container, Wrapper } from './NoticiesPage.styled';
// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { selectError, selectIsLoading, selectSellPets } from "redux/notices/notices-selectors";
// import { fetchSellPets } from "redux/notices/notices-operation";

const NoticesPage = () => {
  // const sellPets = useSelector(selectSellPets);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  // const dispatch = useDispatch();

  // useEffect(() => {
  // dispatch(fetchSellPets())
  // }, [dispatch]);

  return (
    <Container>
      <Headline title={'Find your favorite pet'}></Headline>
      <NoticesSearch />
      <Wrapper>
        <NoticesCategoriesNav />
        <AddNoticeButton />
      </Wrapper>

      <NoticesCategoriesList />
      {/* {sellPets?.length === 0 && !isLoading && <p>Sell list is empty! Try to add pet</p>} 
            {sellPets?.length > 0 && <NoticesCategoriesList/>}
            {error && <p>Ooops... Something went wrong</p>}             */}
    </Container>
  );
};

export default NoticesPage;
