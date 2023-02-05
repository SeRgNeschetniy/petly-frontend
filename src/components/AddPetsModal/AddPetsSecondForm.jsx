import { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { pet } from '../../servises';
import sprite from '../../images/addPets/symbol.svg';
import {VscClose} from 'react-icons/vsc';
import  {fetchPets} from '../../redux/addPets/addPets-operations'
import {Container, 
    ButtonClose, 
    Title, 
    Label, 
    WraperTextarea,       
    FormWrapper,     
    ButtonWrapper,
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
} from './AddPetsModal.styled';

export const AddPetsSecondForm = props => {
  const [img, setImg] = useState(null); 

  const dispatch = useDispatch();

  const handleSubmit = values => {
    console.log(values);
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('dateOfBirth', values.dateOfBirth);
    formData.append('breed', values.breed);
    formData.append('photoPet', values.petImage);
    formData.append('comment', values.comments);
    dispatch(fetchPets(formData));

    // const formData = new FormData(props.data);
    // for (let k of formData) {
    //   console.log(k);
    // }
    props.closeModal();
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
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <FormSecond encType="multipart/form-data">
              <Text>Add photo and some comments</Text>
              <ButtonAddPhoto type="button">
              {!img ? (
                  <CrossBig>
                    <use href={sprite + '#icon-blackCross'} />
                  </CrossBig>
                ) : (
                  <AvatarImg src={img} alt="avatar" />
                )}                
                <InputPhoto name="petImage"
                  type="file"
                  accept="image/*"
                  onChange={e => {
                    const fileUploaded = e.target.files[0];
                    setFieldValue('petImage', e.target.files[0]);
                    setImg(URL.createObjectURL(fileUploaded));                    
                  }}
                />                  
                  <ErrorTextarea name="petImage" component="p" />
              </ButtonAddPhoto>
              <WraperTextarea>
                <Label> Comments</Label>
                <Textarea
                  onChange={e => setFieldValue('comments', e.target.value)}
                  name="comments"
                  as="textarea"
                  placeholder="Type comments"
                />
                <ErrorTextarea name="comments" component="p" />
              </WraperTextarea>
              <ButtonWrapper>
                <ButtonFill type="submit">Done</ButtonFill>
                <ButtonEmpty
                  type="button"
                  onClick={() => props.setPage(prev => prev - 1)}
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

export default AddPetsSecondForm;

