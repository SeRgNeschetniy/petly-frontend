import {
  Item,
  LearnMoreBtn,
  Title,
  Text,
  Container,
  Sticker,
  AddToFavoriteBtn,
  Span,
  AddIcon,
  Image,
  AddedIcon,
  DeleteBtn,
  BtnWrapper,
} from './NoticeCategoryItem.styled';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';
import { getAge } from 'shared/getAge';
import {
  addToFavorite,
  deleteFromFavorites,
} from 'redux/notices/notices-operation';
import { selectIsLogin, selectUserId } from 'redux/auth/auth-selectors';
import { deleteNotice } from 'redux/notices/notices-operation';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  selectFavorites,
  selectNotices,
} from 'redux/notices/notices-selectors';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import useModal from 'hooks/modal';
import ReadMoreModal from 'components/ReadMoreModal/ReadMoreModal';

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
  const dispatch = useDispatch();

  const [oneNotice, setOneNotice] = useState([]);
  const { isModalOpen, closeModal, openModal } = useModal();
  const notices = useSelector(selectNotices);

  const isLoggedIn = useSelector(selectIsLogin);
  const favorites = useSelector(selectFavorites);
  const ownerId = useSelector(selectUserId);

  const birthday = getAge(dateOfBirth);
  const difOfAge = birthday => {
    return Math.trunc(
      (new Date().getTime() - new Date(birthday)) / (24 * 3600 * 365.25 * 1000)
    );
  };

  const age = difOfAge(birthday);

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
    dispatch(deleteNotice(cardId));
  };

  const isFavorite = id => {
    return favorites.filter(favorite => favorite._id === id);
  };

  const handleMoreClick = e => {
    if (notices.length > 0) {
      const result = notices.filter(item => item._id === e.currentTarget.id);
      setOneNotice(result);
      openModal();
      return;
    }
  };

  return (
    <>
      <Item>
        <Image src={petImage} alt="Pet" minwidth={240} height={288} />
        <Sticker>{category}</Sticker>
        <AddToFavoriteBtn id={id} onClick={onAddToFavorite}>
          {isFavorite(id).length > 0 ? <AddedIcon /> : <AddIcon />}
        </AddToFavoriteBtn>
        <Container>
          {/* <Wrapper> */}
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
            {age === 0 && 'one year'}
            {age === 1 && `${age} year`}
            {age !== 1 && age !== 0 && `${age} years`}
          </Text>
          {category === 'sell' && (
            <Text>
              <Span>Price:</Span>
              {price ? `${price}` : '--------'}
            </Text>
          )}
          {/* </Wrapper> */}
        </Container>
        <BtnWrapper>
          <LearnMoreBtn readMore={id} id={id} onClick={handleMoreClick}>
            Learn more
          </LearnMoreBtn>
          {ownerId === owner && (
            <DeleteBtn id={id} onClick={onDeleteNotice}>
              Delete
              <RiDeleteBin5Fill style={{ marginLeft: '15px' }} />
            </DeleteBtn>
          )}
        </BtnWrapper>
      </Item>

      {isModalOpen && (
        <Modal onCloseModal={closeModal}>
          <ReadMoreModal notice={oneNotice} onCloseModal={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default NoticeCategoryItem;
