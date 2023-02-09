import { useState } from 'react';
import { Formik } from 'formik';
import { notice } from '../../../servises';
import { VscClose } from 'react-icons/vsc';
import { Notify } from 'notiflix';

import {
  Container,
  ButtonClose,
  Title,
  Label,
  WraperTextarea,
  Input,
  FormWrapper,
  ButtonWrapper,
  InputWrapper,
  ButtonFill,
  ButtonEmpty,
  InputPhoto,
  FormSecond,
  Textarea,
  CrossBig,
  ButtonAddPhoto,
  AvatarImg,
  RadioWrapp,
  LabelRadioSexBtn,
  RadioSexBtn,
  IconMale,
  IconFemale,
  SpanStar,
  AddImg,
} from './NoticeModal.styled';
import { useDispatch } from 'react-redux';
import { addNewNotice } from 'redux/notices/notices-operation';

export const NoticeSecondForm = props => {
  const [img, setImg] = useState(null);
  const dispatch = useDispatch();

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

  const notifyOptions = {
    showOnlyTheLastOne: true,
    timeout: 2000,
  };

  const resultOfCategory = props.data.category === 'sell';

  return (
    <Container>
      <ButtonClose type="button" onClick={props.closeModal}>
        <VscClose size={65} />
      </ButtonClose>
      <Title>Add pet</Title>
      <FormWrapper>
        <Formik
          validationSchema={notice.formTwoValidationSchema}
          initialValues={props.data}
          onSubmit={values => {
            const { category, title, name, dateOfBirth, breed } = props.data;
            const { sex, location, price, petImage, comments } = values;

            const formData = new FormData();
            formData.append('category', category);
            formData.append('title', title);
            formData.append('name', name);
            formData.append('dateOfBirth', dateOfBirth);
            formData.append('breed', breed);
            formData.append('sex', sex);
            formData.append('location', location);
            formData.append('price', price);
            formData.append('petImage', petImage);
            formData.append('comments', comments);
            dispatch(addNewNotice(formData));

            props.closeModal();
          }}
        >
          {({
            setFieldValue,
            handleChange,
            handleSubmit,
            values,
            ...props
          }) => (
            <FormSecond onSubmit={handleSubmit} encType="multipart/form-data">
              <Label htmlFor="sex">
                The sex<SpanStar>*</SpanStar>:
              </Label>
              <RadioWrapp role="group" aria-labelledby="sex-group">
                <RadioSexBtn id="male" type="radio" name="sex" value="male" />
                <LabelRadioSexBtn htmlFor="male">
                  <IconMale />
                  Male
                </LabelRadioSexBtn>
                <RadioSexBtn
                  id="female"
                  type="radio"
                  name="sex"
                  value="female"
                />
                <LabelRadioSexBtn htmlFor="female">
                  <IconFemale />
                  Female
                </LabelRadioSexBtn>
              </RadioWrapp>
              {props.isSubmitting && props.errors.sex
                ? Notify.failure(props.errors.sex, notifyOptions)
                : null}
              <Label htmlFor="location">
                Location<SpanStar>*</SpanStar>:
              </Label>
              <InputWrapper>
                <Input
                  id="location"
                  name="location"
                  onChange={handleChange}
                  value={values.location}
                  placeholder="Type location"
                />
              </InputWrapper>
              {props.isSubmitting && props.errors.location
                ? Notify.failure(props.errors.location, notifyOptions)
                : null}

              {resultOfCategory && (
                <Label htmlFor="price">
                  Price<SpanStar>*</SpanStar>:
                </Label>
              )}
              {resultOfCategory && (
                <InputWrapper>
                  <Input
                    id="price"
                    name="price"
                    onChange={handleChange}
                    value={values.price}
                    placeholder="Type price"
                  />
                </InputWrapper>
              )}

              {props.isSubmitting && props.errors.price
                ? Notify.failure(props.errors.price, notifyOptions)
                : null}
              <Label>Load the pet’s image</Label>
              <ButtonAddPhoto type="button">
                {!img ? (
                  <CrossBig>
                    <AddImg />
                  </CrossBig>
                ) : (
                  <AvatarImg src={img} alt="Pet Image" />
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
                {props.isSubmitting && props.errors.petImage
                  ? Notify.failure(props.errors.petImage, notifyOptions)
                  : null}
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
              </WraperTextarea>
              {props.isSubmitting && props.errors.comments
                ? Notify.failure(props.errors.comments, notifyOptions)
                : null}
              <ButtonWrapper>
                <ButtonFill type="submit" onSubmit={handleSubmit}>
                  Done
                </ButtonFill>
                <ButtonEmpty
                  type="button"
                  onClick={() => handleBackClick(values)}
                >
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
