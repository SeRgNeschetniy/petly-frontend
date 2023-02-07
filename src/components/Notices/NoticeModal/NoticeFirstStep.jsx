import { Formik } from 'formik';
import { VscClose } from 'react-icons/vsc';
import { notice } from '../../../servises';
import {
  Container,
  ButtonClose,
  Title,
  SubTitle,
  Label,
  InputWrapper,
  Input,
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
import { Notify } from 'notiflix';


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

  const notifyOptions = {
    showOnlyTheLastOne: true,
    timeout: 2000,
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
          validationSchema={notice.formOneValidationSchema}
          initialValues={props.data}
          onSubmit={handleSubmit}
        >
          {(props) => (
            <FormFirst>
              <RadioWrapp role="group" aria-labelledby="category-group">
                <RadioBtn
                  id="lost-found"
                  type="radio"
                  name="category"
                  value="lost-found"
                />
                <LabelRadioBtn htmlFor="lost-found">lost/found</LabelRadioBtn>
                <RadioBtn
                  id="for-free"
                  type="radio"
                  name="category"
                  value="for-free"
                />
                <LabelRadioBtn htmlFor="for-free">in good hands</LabelRadioBtn>
                <RadioBtn id="sell" type="radio" name="category" value="sell" />
                <LabelRadioBtn htmlFor="sell">sell</LabelRadioBtn>
              </RadioWrapp>
              {props.isSubmitting && props.errors.category
            ? Notify.failure(props.errors.category, notifyOptions)
            : null}
              <Label htmlFor="titleAd">Title of ad</Label>
              <InputWrapper>
                <Input id="title" name="title" placeholder="Type title ad" />
              </InputWrapper>
              {props.isSubmitting && props.errors.title
            ? Notify.failure(props.errors.title, notifyOptions)
            : null}
              <Label htmlFor="namePet">Name pet</Label>
              <InputWrapper>
                <Input id="name" name="name" placeholder="Type name pet" />
              </InputWrapper>
              {props.isSubmitting && props.errors.name
            ? Notify.failure(props.errors.name, notifyOptions)
            : null}
              <Label htmlFor="dateOfBirth">Date of birth</Label>
              <InputWrapper>
                <Input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  placeholder="Type date of birth"
                />
              </InputWrapper>
              {props.isSubmitting && props.errors.dateOfBirth
            ? Notify.failure(props.errors.dateOfBirth, notifyOptions)
            : null}
              <Label htmlFor="breed">Breed</Label>
              <InputWrapperLast>
                <InputLast id="breed" name="breed" placeholder="Type breed" />
              </InputWrapperLast>
              {props.isSubmitting && props.errors.breed
            ? Notify.failure(props.errors.breed, notifyOptions)
            : null}
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
