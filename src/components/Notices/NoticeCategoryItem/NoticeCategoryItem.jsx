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
  Image,
} from './NoticeCategoryItem.styled';
// import { RiDeleteBin5Fill } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';

import { addToFavorite } from 'redux/auth/auth-operation';
import { selectIsLogin } from 'redux/auth/auth-selectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getAge } from 'shared/getAge';
import { numberToWord } from 'shared/numberToWords';
const NoticeCategoryItem = ({ items }) => {
  const dispatch = useDispatch();
  const isLogined = useSelector(selectIsLogin);

  return (
    <>
      {items.map(
        ({
          _id,
          petImage,
          title,
          breed,
          location,
          dateOfBirth,
          category,
          price,
        }) => {
          const born = getAge(dateOfBirth);
          const age = numberToWord(born);

          return (
            <Item key={_id}>
              <Image src={petImage} alt="Pet" minwidth={288} height={288} />
              <Sticker>{category}</Sticker>
              <AddToFavoriteBtn
                onClick={() => {
                  isLogined
                    ? dispatch(addToFavorite(_id))
                    : Notify.warning('Sorry, you should to sing in');
                }}
              >
                <AddIcon />
              </AddToFavoriteBtn>
              <Container>
                <Wrapper>
                  <Title>{title}</Title>
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
                    {age}
                  </Text>
                  {category === 'sell' && (
                    <Text>
                      <Span>Price:</Span>
                      {price ? `${price} $` : '--------'}
                    </Text>
                  )}
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
