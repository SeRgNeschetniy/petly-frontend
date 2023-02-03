import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';
import { List } from './NoticesCategoriesList.styled';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchPets } from 'redux/notices/notices-operation';
import {
  Item,
  LearnMoreBtn,
  Wrapper,
  Title,
  Text,
  Container,
  Sticker,
  AddToFavoriteBtn,
  DeleteBtn,
  Span,
  AddIcon,
} from './NoticeCategoryItem.styled';

const LostFoundList = () => {
  const [lostFoundPets, setLostFoundPets] = useState([]);
  const [filter, setFilter] = useState('');
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 768px)').matches
  );

  useEffect(() => {
    const getPets = async () => {
      try {
        const data = await fetchPets();
        const petsSelectedLostFound = data.notices.filter(
          i => i.category === 'lost-found'
        );
        console.log(petsSelectedLostFound);
        setLostFoundPets(petsSelectedLostFound);
        window
          .matchMedia('(min-width: 768px)')
          .addEventListener('change', e => setMatches(e.matches));
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    getPets();
  }, [setLostFoundPets]);
  const getfilteredPets = () => {
    if (!filter) {
      return lostFoundPets;
    }
    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredPets = lostFoundPets.filter(({ tittle }) => {
      const normalizedTitle = tittle.toLocaleLowerCase();
      const resultOfFilter = normalizedTitle.includes(normalizedFilter);
      return resultOfFilter;
    });
    return filteredPets;
  };

  const filteredPets = getfilteredPets();
  return (
    <List>
      {filteredPets.map(
        ({ _id, image, tittle, breed, location, dateOfBirth, category }) => {
          return (
            <Item key={_id}>
              <img src={image} alt="pet" minwidth={288} />
              <Sticker>{category}</Sticker>
              <AddToFavoriteBtn>
                <AddIcon />
              </AddToFavoriteBtn>
              <Container>
                <Wrapper>
                  <Title>{tittle}</Title>
                  <Text>
                    <Span>Breed:</Span>
                    {breed}
                  </Text>
                  <Text>
                    <Span>Place:</Span>
                    {location}
                  </Text>
                  <Text>
                    <Span>Age:</Span>
                    {dateOfBirth}
                  </Text>
                </Wrapper>
                <LearnMoreBtn>Learn more</LearnMoreBtn>
                {/* <DeleteBtn>Delete
                        <RiDeleteBin5Fill style={{ marginLeft: "15px" }}/>
                    </DeleteBtn> */}
              </Container>
            </Item>
          );
        }
      )}
    </List>
  );
};

export default LostFoundList;
