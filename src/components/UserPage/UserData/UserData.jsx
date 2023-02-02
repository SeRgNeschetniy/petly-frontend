import { TbCamera } from 'react-icons/tb';
import { FiEdit2 } from 'react-icons/fi';
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
} from './UserData.styled';

export default function UserData() {
  return (
    <Box>
      <AccentText>My information:</AccentText>
      <Profile>
        <div style={{ position: 'relative' }}>
          <Avatar src="https://via.placeholder.com/233x233.jpeg?text=Profile+image"></Avatar>
        </div>
        <EditBox>
          <TbCamera
            style={{ width: '18px', height: '18px', color: '#F59256' }}
          ></TbCamera>
          <EditPhotoButton>Edit photo</EditPhotoButton>
        </EditBox>
        <Form>
          <BoxInput>
            <TextField>Name:</TextField>
            <InputForm></InputForm>
            <ButtonEdit>
              <FiEdit2 style={{ color: 'rgba(17, 17, 17, 0.6)' }} />
            </ButtonEdit>
          </BoxInput>

          <BoxInput>
            <TextField>Email:</TextField>
            <InputForm />
            <ButtonEdit>
              <FiEdit2 style={{ color: 'rgba(17, 17, 17, 0.6)' }} />
            </ButtonEdit>
          </BoxInput>

          <BoxInput>
            <TextField>Birthday:</TextField>
            <InputForm />
            <ButtonEdit>
              <FiEdit2 style={{ color: 'rgba(17, 17, 17, 0.6)' }} />
            </ButtonEdit>
          </BoxInput>

          <BoxInput>
            <TextField>Phone:</TextField>
            <InputForm />
            <ButtonEdit>
              <FiEdit2 style={{ color: 'rgba(17, 17, 17, 0.6)' }} />
            </ButtonEdit>
          </BoxInput>

          <BoxInput>
            <TextField>City:</TextField>
            <InputForm />
            <ButtonEdit>
              <FiEdit2 style={{ color: 'rgba(17, 17, 17, 0.6)' }} />
            </ButtonEdit>
          </BoxInput>
        </Form>
      </Profile>
    </Box>
  );
}
