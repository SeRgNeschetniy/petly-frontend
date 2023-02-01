import { useState } from 'react';
import { Formik } from 'formik';

import { pet } from '../../servises';
import {VscClose} from 'react-icons/vsc';

import {TfiClose} from 'react-icons/tfi'
import { string } from 'yup';
import {Container, 
    ButtonClose, 
    Title, 
    Label, 
    WraperTextarea,    
    ErrMessage,
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

export const AddPetsSecondForm = (props) => {
  const [img, setImg] = useState(null);
  const [valid, setValid] = useState(false);

  const handleSubmit = (values) => {
    props.next(values, true);
    props.closeModal();
  };
  return (
    <Container>
      <ButtonClose type="button" onClick={props.closeModal} >
          <VscClose size={65} />        
      </ButtonClose>
      <Title>Add pet</Title>
      <FormWrapper>
        <Formik 
         validationSchema={pet.formTwoValidationSchema} 
        initialValues={props.data} onSubmit={handleSubmit}>
          {({ setFieldValue }) => (
            <FormSecond encType="multipart/form-data" >
              <Text>Add photo and some comments</Text>
              <ButtonAddPhoto type="button">
                {!img ? (
                  <CrossBig>
                    <TfiClose size={40}/>                   
                  </CrossBig>
                ) : (
                  <AvatarImg src={img} alt="avatar" />
                )}
                <InputPhoto
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const fileUploaded = e.target.files[0];
                    setFieldValue('petImage', e.target.files[0]);
                    setImg(URL.createObjectURL(fileUploaded));
                    setValid(string().required().isValidSync(e.target.files[0]));
                  }}
                />
                <ErrMessage>{!valid && 'Image is required'}</ErrMessage>
              </ButtonAddPhoto>

              <WraperTextarea>
                <Label> Comments</Label>
                <Textarea name="comments" as="textarea" placeholder="Type comments" />
                <ErrorTextarea name="comments" component="p" />
              </WraperTextarea>

              <ButtonWrapper>
                <ButtonFill type="submit">
                  Done
                </ButtonFill>
                <ButtonEmpty type="button" onClick={props.prev}>
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