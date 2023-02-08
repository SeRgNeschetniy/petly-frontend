import { Formik } from 'formik';
import { VscClose } from 'react-icons/vsc';
import { pet } from '../../../servises';
import { Notify } from 'notiflix';
import {
  Container,
  ButtonClose,
  TitleFirstForm,
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
} from './AddPetsModal.styled';

const AddPetsFirstForm = props => {
  const notifyOptions = {
    showOnlyTheLastOne: true,
    timeout: 2000,
  };

  const handleSubmit = values => {
    props.setData(prev => {
      return {
        ...prev,
        name: values.name,
        dateOfBirth: values.dateOfBirth,
        breed: values.breed,
      };
    });
    props.setPage(prev => prev + 1);
  };

  const handleOnClick = () =>{props.closeModal()}

  return (
    <Container>
      <ButtonClose type="button" onClick={props.closeModal}>
        <VscClose size={65} />
      </ButtonClose>
      <TitleFirstForm>Add pet</TitleFirstForm>
      <FormWrapper>
        <Formik
          validationSchema={pet.formOneValidationSchema}
          initialValues={props.data}
          onSubmit={handleSubmit}
        >
          {props => (
            <FormFirst>
              <Label htmlFor="namePet">Name pet</Label>
              <InputWrapper>
                <Input name="name" placeholder="Type name pet" />
                {props.isSubmitting && props.errors.name
                  ? Notify.failure(props.errors.name, notifyOptions)
                  : null}
                <ErrMessage name="name" component="p" />
              </InputWrapper>

              <Label htmlFor="dateOfBirth">Date of birth</Label>
              <InputWrapper>
                <Input name="dateOfBirth" placeholder="Type date of birth" />
                {props.isSubmitting && props.errors.dateOfBirth
                  ? Notify.failure(props.errors.dateOfBirth, notifyOptions)
                  : null}
                <ErrMessage name="dateOfBirth" component="p" />
              </InputWrapper>
              <Label htmlFor="breed">Breed</Label>
              <InputWrapperLast>
                <InputLast name="breed" placeholder="Type breed" />
                {props.isSubmitting && props.errors.breed
                  ? Notify.failure(props.errors.breed, notifyOptions)
                  : null}
                <ErrMessage name="breed" component="p" />
              </InputWrapperLast>
              <ButtonWrapper>
                <ButtonFill type="submit">Next</ButtonFill>
                <ButtonEmpty type="button" onClick={handleOnClick}>
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

export default AddPetsFirstForm;
