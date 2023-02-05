import { TbCamera } from 'react-icons/tb';
import { FiEdit2 , FiCheck} from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/auth-selectors';
import React from 'react';
import {
  AccentText,
  Profile,
  TextField,
  Box,
  Form,
  BoxInput,
  InputForm,
  ButtonEdit,
  Avatar,
  EditBox,
  EditPhotoButton,
  FormDiv
} from './UserData.styled';
import Logout from '../Logout/Logout';
import { patchAvatar } from 'redux/auth/auth-operation';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
export default function UserData() {

  const user = useSelector(selectUser);
  // console.log(user)

  const dispatch = useDispatch();
  
 
  // const disableBnt = () => {
  // const  input = document.querySelectorAll("#input")
  //   const edit = document.querySelectorAll("#edit")
  //   input.disabled = false;
  // }

  

 const [disabled, setDisabled] = useState(true);

  function handleGameClick() {
    setDisabled(!disabled);
  }




const changeImage = async (event) => {
    const formData = new FormData();
  
    formData.append('avatar', event.target.files[0]);
  
  dispatch(patchAvatar(formData))


  };

    return (
      <Box>
        <AccentText>My information:</AccentText>
        <Profile>
          <div>
          <div style={{  display:"flex", justifyContent: "center"}}>
            <Avatar src={user.avatarURL}></Avatar>
          </div>
           <EditBox>
            
            <TbCamera
              style={{ width: '18px', height: '18px', color: '#F59256' }}
            ></TbCamera> 
             <label>        
              <EditPhotoButton onChange={changeImage} type="file" name="file" style={{ color: "transparent" }} ></EditPhotoButton>             
          </label>
            </EditBox>
          </div>

          <FormDiv>
          <Form >
            <BoxInput>
              <TextField>Name: </TextField>
              <InputForm value={user.name} id="input" type="text" disabled={disabled }></InputForm>
              <ButtonEdit type='submit' onClick={handleGameClick}>
                <div>{disabled ? <FiEdit2/> : <FiCheck/> }</div>
              </ButtonEdit>
            </BoxInput>

            <BoxInput>
              <TextField>Email: </TextField>
              <InputForm  value={user.email} id="email"disabled={disabled }/>
              <ButtonEdit type='submit' onClick={handleGameClick}>
                <div>{disabled ? <FiEdit2/> : <FiCheck/> }</div>
              </ButtonEdit>
            </BoxInput>

            <BoxInput>
              <TextField>Birthday:</TextField>
              <InputForm disabled={disabled } value={user.birthday}/>
              <ButtonEdit type='submit' onClick={handleGameClick}>
                <div>{disabled ? <FiEdit2/> : <FiCheck/> }</div>
              </ButtonEdit>
            </BoxInput>

            <BoxInput>
              <TextField>Phone:</TextField>
              <InputForm disabled={disabled } value={user.phone}/>
              <ButtonEdit type='submit' onClick={handleGameClick}>
                <div>{disabled ? <FiEdit2/> : <FiCheck/> }</div>
              </ButtonEdit>
            </BoxInput>

            <BoxInput>
              <TextField>City:</TextField>
              <InputForm disabled={disabled } value={user.city}/>
              <ButtonEdit type='submit' onClick={handleGameClick}>
                <div>{disabled ? <FiEdit2/> : <FiCheck/> }</div>
              </ButtonEdit>
            </BoxInput>
          </Form>
          <Logout ></Logout>
          </FormDiv>
        </Profile>
        
           
      </Box>)
      }
  

  
//      return (
//     <div>
//       {UserData}
//     </div>
// )
         

   

