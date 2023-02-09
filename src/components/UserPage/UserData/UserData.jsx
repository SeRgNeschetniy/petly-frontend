import { TbCamera } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/auth-selectors';

import React, { useState } from 'react';
import {
  AccentText,
  Profile,
  Box,
  Form,
  Avatar,
  EditBox,
  ImageLoaderContainer,
  EditPhotoButton,
  FormDiv,
  Label,
} from './UserData.styled';
import Logout from '../Logout/Logout';
import { patchAvatar } from 'redux/auth/auth-operation';
import { useDispatch } from 'react-redux';
import UserInputName from './UserInput/UserName/UserName';
import UserInputEmail from './UserInput/UserEmail/UserEmail';
import UserInputCity from './UserInput/UserCity/UserCity';
import UserInputBirthday from './UserInput/UserBirthday/UserBirthday';
import UserInputPhone from './UserInput/UserPhone/UserPhone';
import { selectIsAvatarLoading } from 'redux/auth/auth-selectors';
import Loader from 'components/Loader';

export default function UserData() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const isAvatarLoading = useSelector(selectIsAvatarLoading);

  const changeImage = async event => {
    const formData = new FormData();
    formData.append('avatar', event.target.files[0]);
    dispatch(patchAvatar(formData));
  };



  return (
    <Box>
      <AccentText>My information:</AccentText>
      <Profile>
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <ImageLoaderContainer>
              {isAvatarLoading && <Loader />}
              <Avatar src={user.avatarURL}></Avatar>
            </ImageLoaderContainer>
            <EditBox>
              <TbCamera
                style={{ width: '18px', height: '18px', color: '#F59256' }}
              ></TbCamera>
              <Label>
                <EditPhotoButton
                  onChange={changeImage}
                  type="file"
                  name="file"
                  style={{ color: 'transparent' }}
                ></EditPhotoButton>
                Edit photo
              </Label>
            </EditBox>
          </div>
        </div>

        <FormDiv>
          <Form>
            <UserInputName setIsEdit={setIsEdit} isEdit={isEdit} />

            <UserInputEmail setIsEdit={setIsEdit} isEdit={isEdit} />

            <UserInputBirthday setIsEdit={setIsEdit} isEdit={isEdit} />

            <UserInputPhone setIsEdit={setIsEdit} isEdit={isEdit} />

            <UserInputCity setIsEdit={setIsEdit} isEdit={isEdit} />
          </Form>
          <Logout />
        </FormDiv>
      </Profile>
    </Box>
  );
}

//      return (
//     <div>
//       {UserData}
//     </div>
// )
