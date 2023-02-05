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
  // AddedIcon,
  DeleteBtn,
} from './NoticeCategoryItem.styled';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';
import { getAge } from 'shared/getAge';
import {
  addToFavorite,
  deleteFromFavorites,
  deleteNotice,
} from 'redux/auth/auth-operation';
import {
  selectIsLogin,
  // selectIsFavorite,
  selectUserId,
} from 'redux/auth/auth-selectors';
// import { deleteNotice } from 'redux/notices/notices-operation';
import { selectFavorites } from 'redux/notices/notices-selectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const NoticeCategoryItem = ({ notice, route }) => {
  const {
    _id: id,
    petImage,
    title,
    breed,
    location,
    dateOfBirth,
    category,
    price,
    owner,
  } = notice;

  // console.log(notice);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLogin);
  const favorites = useSelector(selectFavorites);
  const ownerId = useSelector(selectUserId);
  // const isFavorite = useSelector(selectIsFavorite);
  // const isFavorite = favorites.includes(id);
  // const onChangeFavorite = () => {
  //   if (isLoggedIn) {
  //     dispatch(addToFavorite(id));
  //     if (route === 'favorite') {
  //       dispatch(deleteFromFavorites(id));
  //     }
  //   } else {
  //     setIsShownAlert(true);
  //   }
  // };

  const birthday = getAge(dateOfBirth);
  // console.log(birthday);
  const difOfAge = birthday => {
    return Math.trunc(
      (new Date().getTime() - new Date(birthday)) / (24 * 3600 * 365.25 * 1000)
    );
  };

  const age = difOfAge(birthday);
  // console.log(age);
  const onAddToFavorite = e => {
    const cardId = e.currentTarget.id;
    // console.log(cardId);
    const result = favorites.find(favorite => favorite._id === cardId);
    // console.log(result._id);
    if (result._id === cardId) {
      isLoggedIn
        ? dispatch(addToFavorite(cardId))
        : Notify.warning('Sorry, you should to sing in');
    } else {
      dispatch(deleteFromFavorites(cardId));
    }
  };

  const onDeleteNotice = e => {
    const cardId = e.currentTarget.id;
    console.log(cardId);
    dispatch(deleteNotice(cardId));
  };

  // const onDeleteFromFavorite = e => {
  //   const cardId = e.currentTarget.id;

  //   dispatch(deleteFromFavorites(cardId));
  // };

  return (
    <Item>
      <Image src={petImage} alt="Pet" minwidth={288} height={288} />
      <Sticker>{category}</Sticker>
      <AddToFavoriteBtn id={id} onClick={onAddToFavorite}>
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
            {age} years
          </Text>
          {category === 'sell' && (
            <Text>
              <Span>Price:</Span>
              {price ? `${price} $` : '--------'}
            </Text>
          )}
        </Wrapper>
        <LearnMoreBtn>Learn more</LearnMoreBtn>
        {ownerId === owner && (
          <DeleteBtn onClick={onDeleteNotice}>
            Delete
            <RiDeleteBin5Fill style={{ marginLeft: '15px' }} />
          </DeleteBtn>
        )}
      </Container>
    </Item>
  );
};

export default NoticeCategoryItem;
