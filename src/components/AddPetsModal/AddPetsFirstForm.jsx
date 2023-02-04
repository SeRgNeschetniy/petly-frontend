import { Formik } from 'formik';
import {VscClose} from 'react-icons/vsc';
import { pet } from '../../servises';
import {Container, 
    ButtonClose, 
    Title, 
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
    FormFirst} from './AddPetsModal.styled';

 const AddPetsFirstForm =(props) => {  //props
     const handleSubmit =(values) => {
       props.setData(prev => {
         return {
           ...prev,
           name: values.name,
           dateOfBirth: values.dateOfBirth,
           breed: values.breed,
         }
       })
       props.setPage(prev => prev +1);
     };
    return (
        <Container>
             <ButtonClose type="button" 
             onClick={props.closeModal}
            >
               <VscClose size={65}/> 
            </ButtonClose> 
           <Title>Add pet</Title>
             <FormWrapper>
                <Formik 
                validationSchema={pet.formOneValidationSchema}
                initialValues={props.data}
                  onSubmit ={handleSubmit}
                >
                {() => (
            <FormFirst >
              <Label htmlFor="namePet" >
                Name pet
              </Label>
              <InputWrapper>
                <Input
			   			    name="name"
			    placeholder="Type name pet"/> 
       
                <ErrMessage name="name" component="p" />
              </InputWrapper>

              <Label htmlFor="dateOfBirth" >
              Date of birth
              </Label>
              <InputWrapper>
                <Input  name="dateOfBirth" placeholder="Type date of birth" />
                <ErrMessage name="dateOfBirth" component="p" />
              </InputWrapper>
              <Label htmlFor="breed" >
              Breed
              </Label>
              <InputWrapperLast>
                <InputLast name="breed" placeholder="Type breed" />
                <ErrMessage name="breed" component="p" />
              </InputWrapperLast>
              <ButtonWrapper>
                <ButtonFill type="submit" >
                  Next
                </ButtonFill>
                <ButtonEmpty type="button" 
                onClick={props.closeModal}
                >
                 Сancel
                </ButtonEmpty>
              </ButtonWrapper>
            </FormFirst>
          )}
          </Formik>
            </FormWrapper> 
        </Container>
        
    )
}






export default AddPetsFirstForm;