import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
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
  AddedIcon,
  DeleteBtn,
  BtnWrapper,
  ImageWrap,
} from './NoticeCategoryItem.styled';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';
import { getAge } from 'shared/getAge';
import {
  addToFavorite,
  deleteFromFavorites,
  fetchNoticeById,
} from 'redux/notices/notices-operation';
import { selectIsLogin, selectUserId } from 'redux/auth/auth-selectors';
import { deleteNotice } from 'redux/notices/notices-operation';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  selectFavorites,
  selectOneNotice,
} from 'redux/notices/notices-selectors';
import Modal from 'components/Modal/Modal';
import useModal from 'hooks/modal';
import ReadMoreModal from 'components/Notices/ReadMoreModal/ReadMoreModal';
import { setPage } from 'redux/notices/notices-slice';

const NoticeCategoryItem = ({ notice }) => {
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

  const oneNotice = useSelector(selectOneNotice);
  const { isModalOpen, closeModal, openModal } = useModal();
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
    dispatch(setPage(1));
  };

  const isFavorite = id => {
    return favorites.filter(favorite => favorite._id === id);
  };

  const handleMoreClick = async e => {
    dispatch(fetchNoticeById(e.currentTarget.id));
    openModal();
  };

  return (
    <>
      <Item>
        <ImageWrap>
          <LazyLoadImage
            alt={title}
            effect="blur"
            src={petImage}
            width="100%"
          />
        </ImageWrap>
        <Sticker>{category}</Sticker>
        <AddToFavoriteBtn id={id} onClick={onAddToFavorite}>
          {isFavorite(id).length > 0 ? <AddedIcon /> : <AddIcon />}
        </AddToFavoriteBtn>
        <Container>
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
            {age === 0 && 'less than 1 year'}
            {age === 1 && `${age} year`}
            {age !== 1 && age !== 0 && `${age} years`}
          </Text>
          {category === 'sell' && (
            <Text>
              <Span>Price:</Span>
              {price ? `${price} UAH` : '--------'}
            </Text>
          )}
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
      {isModalOpen && oneNotice && (
        <Modal onCloseModal={closeModal}>
          <ReadMoreModal notice={oneNotice} onCloseModal={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default NoticeCategoryItem;
