import {
  Item,
  LearnMoreBtn,
  Wrapper,
  Title,
  Text,
  Container,
  Sticker,
  AddToFavoriteBtn,
  Span,
  AddIcon,
} from './NoticeCategoryItem.styled';
import { selectFilteredPets } from 'redux/notices/notices-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavorite } from 'redux/notices/notices-operation';

const NoticeCategoryItem = () => {
  const filteredPets = useSelector(selectFilteredPets);
  const dispatch = useDispatch();

  return (
    <>
      {filteredPets.map(
        ({ _id, image, tittle, breed, location, dateOfBirth, category }) => {
          return (
            <Item key={_id}>
              <img src={image} alt="pet" minwidth={288} />
              <Sticker>{category}</Sticker>
              <AddToFavoriteBtn onClick={() => dispatch(addToFavorite(_id))}>
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
    </>
  );
};

export default NoticeCategoryItem;
