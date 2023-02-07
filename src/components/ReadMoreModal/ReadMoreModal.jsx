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
  ModalCommentWrapper,
  TabletWrapper,
  TabletTextWrapper,
  ButtonWrapper,
  ModalButton,
  HeartIcon,
} from './ReadMoreModal.styled';
import { Notify } from 'notiflix';
import { ButtonClose } from 'components/AddPetsModal/AddPetsModal.styled';
import { VscClose } from 'react-icons/vsc';
//import { AddButton } from 'components/UserPage/PetsData/PetsData.styled';

export default function ReadMoreModal({ notice, onCloseModal }) {
  //  const oneNotice = useSelector(selectOneNotice);
  const isLoggedIn = useSelector(selectIsLogin);
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const handleAddClick = e => {
    if (isLoggedIn) {
      const cardId = e.target.id;
      const result = favorites.find(favorite => favorite === cardId);
      if (result === cardId) {
        dispatch(deleteFromFavorites(cardId));
      } else {
        dispatch(addToFavorite(cardId));
      }
    } else Notify.warning('Sorry, you should to sing in');
  };

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
      updatedAt,
      comments,
      owner,
    }) => {
      return (
        <ModalBackground key={_id}>
          <ButtonClose type="button" onClick={onCloseModal}>
            <VscClose size={65} />
          </ButtonClose>
          <TabletWrapper>
            <Image src={petImage} alt="" width="288" height="328" />
            <TabletTextWrapper>
              <h2>{title}</h2>
              <FieldText>
                <ModalTextWrapper>
                  <Text>Name:</Text>
                  <Text>{name}</Text>
                </ModalTextWrapper>
                <ModalTextWrapper>
                  <Text>Birthday:</Text>
                  <Text>{dateOfBirth}</Text>
                </ModalTextWrapper>
                <ModalTextWrapper>
                  <Text>Breed:</Text>
                  <Text>{breed}</Text>
                </ModalTextWrapper>
                <ModalTextWrapper>
                  <Text>Location:</Text>
                  <Text>{location}</Text>
                </ModalTextWrapper>
                <ModalTextWrapper>
                  <Text>The sex:</Text>
                  <Text>{sex}</Text>
                </ModalTextWrapper>
                <ModalTextWrapper>
                  <Text>Email:</Text>
                  <Text>{owner.email}</Text>
                </ModalTextWrapper>
                <ModalTextWrapper>
                  <Text>Phone:</Text>
                  <Text>{owner.phone}</Text>
                </ModalTextWrapper>
              </FieldText>
            </TabletTextWrapper>
          </TabletWrapper>
          <ModalCommentWrapper margin>
            <Text>Comments:</Text>
            <Text>{comments}</Text>
          </ModalCommentWrapper>
          <ButtonWrapper>
            <ModalButton
              icon
              id={_id}
              onClick={handleAddClick}
              outline
              noMargin
            >
              Add to
              <HeartIcon
                src={require('../../images/readModal/heart.png')}
              ></HeartIcon>
            </ModalButton>
            <ModalButton>Contact</ModalButton>
          </ButtonWrapper>
        </ModalBackground>
      );
    }
  );
  // const { title, name, dateOfBirth, breed, location, petImage, price, sex, updatedAt, comments, owner } = oneNotice[0];

  return <>{elements}</>;
}
