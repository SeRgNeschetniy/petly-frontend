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
import { RiDeleteBin5Fill } from 'react-icons/ri';

const NoticeCategoryItem = ({ filteredPets }) => {
  return (
    <>
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
    </>
  );
};

export default NoticeCategoryItem;
