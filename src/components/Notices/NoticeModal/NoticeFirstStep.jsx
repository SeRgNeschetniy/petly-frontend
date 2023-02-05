import { Formik } from 'formik';
import { VscClose } from 'react-icons/vsc';
import { pet } from '../../../servises';
import {
  Container,
  ButtonClose,
  Title,
  SubTitle,
  Label,
  InputWrapper,
  Input,
  ErrMessage,
  FormWrapper,
  InputWrapperLast,
  ButtonWrapper,
  ButtonFill,
  ButtonEmpty,
  InputLast,
  FormFirst,
  RadioWrapp,
  LabelRadioBtn,
  RadioBtn,
} from './NoticeModal.styled';

const NoticeFirstForm = props => {
  //props
  const handleSubmit = values => {
    props.setData(prev => {
      return {
        ...prev,
        category: values.category,
        title: values.title,
        name: values.name,
        dateOfBirth: values.dateOfBirth,
        breed: values.breed,
      };
    });
    props.setPage(prev => prev + 1);
  };
  return (
    <Container>
      <ButtonClose type="button" onClick={props.closeModal}>
        <VscClose size={65} />
      </ButtonClose>
      <Title>Add pet</Title>
      <SubTitle>
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
        consectetur
      </SubTitle>
      <FormWrapper>
        <Formik
          validationSchema={pet.formOneValidationSchema}
          initialValues={props.data}
          onSubmit={handleSubmit}
        >
          {() => (
            <FormFirst>
              <RadioWrapp role="group" aria-labelledby="category-group">
                <RadioBtn
                  id="lost-found"
                  type="radio"
                  name="category"
                  value="lost-found"
                />
                <LabelRadioBtn for="lost-found">lost/found</LabelRadioBtn>
                <RadioBtn
                  id="for-free"
                  type="radio"
                  name="category"
                  value="for-free"
                />
                <LabelRadioBtn for="for-free">in good hands</LabelRadioBtn>
                <RadioBtn id="sell" type="radio" name="category" value="sell" />
                <LabelRadioBtn for="sell">sell</LabelRadioBtn>
              </RadioWrapp>
              <Label htmlFor="titleAd">Title of ad</Label>
              <InputWrapper>
                <Input id="titleAd" name="title" placeholder="Type title ad" />
                <ErrMessage name="title" component="p" />
              </InputWrapper>
              <Label htmlFor="namePet">Name pet</Label>
              <InputWrapper>
                <Input id="namePet" name="name" placeholder="Type name pet" />
                <ErrMessage name="name" component="p" />
              </InputWrapper>
              <Label htmlFor="dateOfBirth">Date of birth</Label>
              <InputWrapper>
                <Input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  placeholder="Type date of birth"
                />
                <ErrMessage name="dateOfBirth" component="p" />
              </InputWrapper>
              <Label htmlFor="breed">Breed</Label>
              <InputWrapperLast>
                <InputLast id="breed" name="breed" placeholder="Type breed" />
                <ErrMessage name="breed" component="p" />
              </InputWrapperLast>
              <ButtonWrapper>
                <ButtonFill type="submit">Next</ButtonFill>
                <ButtonEmpty type="button" onClick={props.closeModal}>
                  Сancel
                </ButtonEmpty>
              </ButtonWrapper>
            </FormFirst>
          )}
        </Formik>
      </FormWrapper>
    </Container>
  );
};

export default NoticeFirstForm;
