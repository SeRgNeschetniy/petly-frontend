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
} from 'redux/notices/notices-operation';
import {
  //  selectIsFavorite,
  selectIsLogin,
  selectUserId,
} from 'redux/auth/auth-selectors';
import { deleteNotice } from 'redux/notices/notices-operation';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ReadMoreModal from 'components/ReadMoreModal/ReadMoreModal';
import Modal from 'components/Modal/Modal';
import useModal from 'hooks/modal';
import { fetchNoticeById } from 'redux/notices/notices-operation';
import {
  selectFavorites,
  selectIsLoading,
} from 'redux/notices/notices-selectors';

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

  // console.log(notice._id);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLogin);
  const favorites = useSelector(selectFavorites);
  // console.log(favorites);
  const ownerId = useSelector(selectUserId);
  const isFetchLoading = useSelector(selectIsLoading);

  const { isModalOpen, closeModal, openModal } = useModal();
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
    if (isLoggedIn) {
      const cardId = e.currentTarget.id;

      const result = favorites.filter(favorite => favorite._id === cardId);

      if (result.length > 0) {
        dispatch(deleteFromFavorites(cardId));
      } else {
        dispatch(addToFavorite(cardId));
      }
    } else Notify.warning('Sorry, you should to sing in');
  };

  const onDeleteNotice = e => {
    const cardId = e.currentTarget.id;
    console.log(cardId);
    dispatch(deleteNotice(cardId));
  };

  const handleMoreClick = async id => {
    dispatch(fetchNoticeById(id));
    if (!isFetchLoading) {
      openModal();
    }
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
        <LearnMoreBtn onClick={() => handleMoreClick(id)}>
          Learn more
        </LearnMoreBtn>
        {ownerId === owner && (
          <DeleteBtn id={id} onClick={onDeleteNotice}>
            Delete
            <RiDeleteBin5Fill style={{ marginLeft: '15px' }} />
          </DeleteBtn>
        )}
      </Container>
      {isModalOpen && (
        <Modal onCloseModal={closeModal}>
          <ReadMoreModal onCloseModal={closeModal} />
        </Modal>
      )}
    </Item>
  );
};

export default NoticeCategoryItem;
