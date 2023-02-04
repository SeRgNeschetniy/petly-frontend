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
import {
  selectFilteredNotices,
  selectNotices,
} from 'redux/notices/notices-selectors';
import { selectFilteredPets } from 'redux/notices/notices-selectors';
import { useSelector, useDispatch } from 'react-redux';

import { addToFavorite } from 'redux/auth/auth-operation';
import { selectUser } from 'redux/auth/auth-selectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getAge } from 'shared/getAge';
import { numberToWord } from 'shared/numberToWords';
const NoticeCategoryItem = () => {
  const filteredNotices = useSelector(selectFilteredNotices);
  const dispatch = useDispatch();
  const isUser = useSelector(selectUser);

  return (
    <>
      {filteredNotices.map(
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
              <Image src={petImage} alt="pet" minwidth={288} height={288} />
              <Sticker>{category}</Sticker>
              <AddToFavoriteBtn
                onClick={() => {
                  isUser
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
                    {/* {getAge(dateOfBirth)} */}
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
