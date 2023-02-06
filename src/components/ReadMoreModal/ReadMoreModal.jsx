import { Button } from 'components/Auth/Auth.styled';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectOneNotice } from 'redux/notices/notices-selectors';
import {
  ModalBackground,
  Image,
  ModalTextWrapper,
  Text,
  FieldText,
  ModalCommentWrapper,
  TabletWrapper,
  TabletTextWrapper,
  ButtonWrapper
} from './ReadMoreModal.styled';

export default function ReadMoreModal() {

  const oneNotice = useSelector(selectOneNotice);

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
      <Button>Contact</Button>
      <Button outline noMargin>Add to</Button>
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
