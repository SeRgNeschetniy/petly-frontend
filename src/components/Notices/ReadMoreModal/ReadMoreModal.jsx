import { useDispatch, useSelector } from 'react-redux';
import { selectIsLogin } from 'redux/auth/auth-selectors';
import {
  addToFavorite,
  deleteFromFavorites,
} from 'redux/notices/notices-operation';
import {
  //  selectOneNotice,
  selectFavorites,
} from 'redux/notices/notices-selectors';
import {
  ModalBackground,
  Image,
  ModalTextWrapper,
  Text,
  FieldText,
  ModalBtnRemove,
  ModalCommentWrapper,
  TabletWrapper,
  TabletTextWrapper,
  ButtonWrapper,
  ModalBtnContact,
  ModalBtnAdd,
  Sticker,
  Title,
  Span,
  CommentsText,
  Wrap,
  WrapImage,
  AddedIcon,
} from './ReadMoreModal.styled';
import { Notify } from 'notiflix';
import { ButtonClose } from 'components/UserPage/AddPetsModal/AddPetsModal.styled';
import { VscClose } from 'react-icons/vsc';
//import { AddButton } from 'components/UserPage/PetsData/PetsData.styled';
import { getAge } from 'shared/getAge';
import { AddIcon } from './ReadMoreModal.styled';

export default function ReadMoreModal({ notice, onCloseModal }) {
  //  const oneNotice = useSelector(selectOneNotice);
  const isLoggedIn = useSelector(selectIsLogin);
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const handleAddClick = e => {
    if (isLoggedIn) {
      const cardId = e.target.id;
      const result = favorites.filter(favorite => favorite._id === cardId);
      if (result.length > 0) {
        dispatch(deleteFromFavorites(cardId));
      } else {
        dispatch(addToFavorite(cardId));
      }
    } else Notify.warning('Sorry, you should to sing in');
  };

  // const isFavorite = _id => {
  //   return favorites.filter(favorite => favorite._id === _id);
  // };

  const elements = notice.map(
    ({
      _id,
      title,
      name,
      dateOfBirth,
      breed,
      location,
      petImage,
      price,
      sex,
      comments,
      owner,
      category,
    }) => {
      const birthday = getAge(dateOfBirth);

      const isFavorite = id => {
        return favorites.filter(favorite => favorite._id === id);
      };

      return (
        <ModalBackground key={_id}>
          <ButtonClose type="button" onClick={onCloseModal}>
            <VscClose size={36} />
          </ButtonClose>
          <Wrap>
            <WrapImage>
              <Image
                src={petImage}
                alt="Pet"
                // width="288"
                // width="288" height="328"
              />
            </WrapImage>
            <Sticker>{category}</Sticker>
            <TabletWrapper>
              <TabletTextWrapper>
                <Title>{title}</Title>
                <FieldText>
                  <ModalTextWrapper>
                    <Text>Name:</Text>
                    <Span>{name}</Span>
                  </ModalTextWrapper>
                  <ModalTextWrapper>
                    <Text>Birthday:</Text>
                    <Span>{birthday}</Span>
                  </ModalTextWrapper>
                  <ModalTextWrapper>
                    <Text>Breed:</Text>
                    <Span>{breed}</Span>
                  </ModalTextWrapper>
                  <ModalTextWrapper>
                    <Text>Location:</Text>
                    <Span>{location}</Span>
                  </ModalTextWrapper>
                  <ModalTextWrapper>
                    <Text>The sex:</Text>
                    <Span>{sex}</Span>
                  </ModalTextWrapper>
                  <ModalTextWrapper>
                    <Text>Email:</Text>
                    <Span>{owner.email}</Span>
                  </ModalTextWrapper>
                  <ModalTextWrapper>
                    <Text>Phone:</Text>
                    <Span>{owner.phone}</Span>
                  </ModalTextWrapper>
                  {category === 'sell' && (
                    <ModalTextWrapper>
                      <Text>Price:</Text>
                      <Span>{price ? `${price} UAH` : '--------'}</Span>
                    </ModalTextWrapper>
                  )}
                </FieldText>
              </TabletTextWrapper>
            </TabletWrapper>
          </Wrap>
          <ModalCommentWrapper>
            <CommentsText>
              Comments: <Span>{comments}</Span>
            </CommentsText>
          </ModalCommentWrapper>
          <ButtonWrapper>
            {isFavorite(_id).length > 0 ? (
              <ModalBtnRemove
                icon
                id={_id}
                onClick={handleAddClick}
                outline
                noMargin
                orange
              >
                Remove
                <AddIcon />
              </ModalBtnRemove>
            ) : (
              <ModalBtnAdd
                icon
                id={_id}
                onClick={handleAddClick}
                outline
                noMargin
              >
                Add to
                <AddedIcon />
              </ModalBtnAdd>
            )}
            <ModalBtnContact>Contact</ModalBtnContact>
          </ButtonWrapper>
        </ModalBackground>
      );
    }
  );
  // const { title, name, dateOfBirth, breed, location, petImage, price, sex, updatedAt, comments, owner } = oneNotice[0];

  return <>{elements}</>;
}
