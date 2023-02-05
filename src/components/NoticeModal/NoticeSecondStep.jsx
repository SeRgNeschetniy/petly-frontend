import { useState } from 'react';
import { Formik } from 'formik';

import { pet } from '../../servises';
import { VscClose } from 'react-icons/vsc';

import { TfiClose } from 'react-icons/tfi';
import { string } from 'yup';
import {
  Container,
  ButtonClose,
  Title,
  Label,
  WraperTextarea,
  Input,
  ErrMessage,
  FormWrapper,
  ButtonWrapper,
  InputWrapper,
  ButtonFill,
  ButtonEmpty,
  InputPhoto,
  FormSecond,
  Textarea,
  ErrorTextarea,
  Text,
  CrossBig,
  ButtonAddPhoto,
  AvatarImg,
  RadioWrapp,
  LabelRadioSexBtn,
  RadioSexBtn,
  RadioBtn,
} from './NoticeModal.styled';
import { useDispatch } from 'react-redux';
import { addNewNotice } from 'redux/notices/notices-operation';

import { MdMale } from 'react-icons/md';
import { MdFemale } from 'react-icons/md';

export const NoticeSecondForm = props => {
  const [img, setImg] = useState(null);
  const [valid, setValid] = useState(false);
  const dispatch = useDispatch();

  const handleSubmitForm = e => {
    e.preventDefault();
    const { category, title, name, dateOfBirth, breed } = props.data;
    const { sex, location, price, petImage, comments } = e.target;
    console.log(e.target);
    const formData = new FormData();
    formData.append('category', category);
    formData.append('title', title);
    formData.append('name', name);
    formData.append('dateOfBirth', dateOfBirth);
    formData.append('breed', breed);
    formData.append('sex', sex.value);
    formData.append('location', location.value);
    formData.append('price', price.value);
    formData.append('petImage', petImage.files[0]);
    formData.append('comments', comments.value);
    // const formData = new FormData(props.data);
    dispatch(addNewNotice(formData));
    // for (let k of formData) {
    //   console.log(k);
    // }
    props.closeModal();
  };

  const handleBackClick = values => {
    props.setData(prev => {
      return {
        ...prev,
        sex: values.sex,
        location: values.location,
        petImage: values.petImage,
        price: values.price,
        comments: values.comments,
      };
    });
    props.setPage(prev => prev - 1);
  };

  return (
    <Container>
      <ButtonClose type="button" onClick={props.closeModal}>
        <VscClose size={65} />
      </ButtonClose>
      <Title>Add pet</Title>
      <FormWrapper>
        <Formik
          validationSchema={pet.formTwoValidationSchema}
          initialValues={props.data}
          onSubmit={handleBackClick}
        >
          {({ setFieldValue, handleChange, handleSubmit, values }) => (
            <FormSecond
              onSubmit={handleSubmitForm}
              encType="multipart/form-data"
            >
              <RadioWrapp role="group" aria-labelledby="sex-group">
                <RadioSexBtn id="male" type="radio" name="sex" value="male" />
                <LabelRadioSexBtn for="male">
                  <MdMale size="4rem"></MdMale>
                  Male
                </LabelRadioSexBtn>
                <RadioSexBtn
                  id="female"
                  type="radio"
                  name="sex"
                  value="female"
                />
                <LabelRadioSexBtn for="female">
                  <MdFemale size="4rem"></MdFemale>
                  Female
                </LabelRadioSexBtn>
              </RadioWrapp>
              <Label htmlFor="location">Location*:</Label>
              <InputWrapper>
                <Input name="location" placeholder="Type location" />
                <ErrMessage name="location" component="p" />
              </InputWrapper>
              <Label htmlFor="price">Price*:</Label>
              <InputWrapper>
                <Input name="price" placeholder="Type price" />

                <ErrMessage name="price" component="p" />
              </InputWrapper>
              <Text>Load the pet’s image</Text>
              <ButtonAddPhoto type="button">
                {!img ? (
                  <CrossBig>
                    <TfiClose size={40} />
                  </CrossBig>
                ) : (
                  <AvatarImg src={img} alt="avatar" />
                )}
                <InputPhoto
                  type="file"
                  name="petImage"
                  accept="image/*"
                  onChange={e => {
                    const fileUploaded = e.target.files[0];
                    setFieldValue('petImage', e.target.files[0]);
                    setImg(URL.createObjectURL(fileUploaded));
                    //   // setValid(string().required().isValidSync(e.target.files[0]));
                  }}
                />
                <ErrMessage>{!valid && 'Image is required'}</ErrMessage>
              </ButtonAddPhoto>

              <WraperTextarea>
                <Label>Comments</Label>
                <Textarea
                  onChange={handleChange}
                  value={values.comments}
                  name="comments"
                  as="textarea"
                  placeholder="Type comments"
                />
                <ErrorTextarea name="commentsError" component="p" />
              </WraperTextarea>

              <ButtonWrapper>
                <ButtonFill type="submit" onSubmit={handleSubmitForm}>
                  Done
                </ButtonFill>
                <ButtonEmpty type="button" onClick={handleSubmit}>
                  Back
                </ButtonEmpty>
              </ButtonWrapper>
            </FormSecond>
          )}
        </Formik>
      </FormWrapper>
    </Container>
  );
};

export default NoticeSecondForm;
