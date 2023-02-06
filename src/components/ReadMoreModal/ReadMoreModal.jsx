import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLogin } from 'redux/auth/auth-selectors';
import { addToFavorite, deleteFromFavorites } from 'redux/notices/notices-operation';
import { selectOneNotice, selectFavorites } from 'redux/notices/notices-selectors';
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
  ModalButton
} from './ReadMoreModal.styled';
import { Notify } from 'notiflix';

export default function ReadMoreModal() {

  const oneNotice = useSelector(selectOneNotice);
  const isLoggedIn = useSelector(selectIsLogin);
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();


  const handleAddClick = (e) => {
    if (isLoggedIn) {
      const cardId = e.target.id;
      console.log(cardId);
      const result = favorites.find(favorite => favorite === cardId);
      if (result === cardId) {
        dispatch(deleteFromFavorites(cardId));
      } else {
        dispatch(addToFavorite(cardId));
      }
    } else Notify.warning('Sorry, you should to sing in');
  };

  const elements = oneNotice.map(({ _id, title, name, dateOfBirth, breed, location, petImage, price, sex, updatedAt, comments, owner }) => {
    return (
      <ModalBackground key={_id}>
        <TabletWrapper>
      <Image src={petImage} alt="" />
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
      <ModalButton>Contact</ModalButton>
      <ModalButton id={_id} onClick={handleAddClick} outline noMargin>Add to</ModalButton>
      </ButtonWrapper>
      </ModalBackground>
    )
  })
  // const { title, name, dateOfBirth, breed, location, petImage, price, sex, updatedAt, comments, owner } = oneNotice[0];

  

  return (
  <>
      {elements}
      </>
  )
}