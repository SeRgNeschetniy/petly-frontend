import { TbCamera } from 'react-icons/tb';
import { FiEdit2 } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/auth-selectors';
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
import Logout from '../Logout/Logout';
export default function UserData() {

  const user = useSelector(selectUser);
  console.log(user)

    return (
      <Box>
        <AccentText>My information:</AccentText>
        <Profile>
          <div style={{ position: 'relative' }}>
            <Avatar src={user.avatarURL}></Avatar>
          </div>
          <EditBox>
            <TbCamera
              style={{ width: '18px', height: '18px', color: '#F59256' }}
            ></TbCamera>
            <EditPhotoButton>Edit photo</EditPhotoButton>
          </EditBox>
          <Form >
            <BoxInput>
              <TextField>Name: </TextField>
              <InputForm disabled value={user.name}></InputForm>
              <ButtonEdit>
                <FiEdit2 style={{ color: 'rgba(17, 17, 17, 0.6)' }} />
              </ButtonEdit>
            </BoxInput>

            <BoxInput>
              <TextField>Email: </TextField>
              <InputForm disabled value={user.email}/>
              <ButtonEdit>
                <FiEdit2 style={{ color: 'rgba(17, 17, 17, 0.6)' }} />
              </ButtonEdit>
            </BoxInput>

            <BoxInput>
              <TextField>Birthday:</TextField>
              <InputForm disabled value={user.birthday}/>
              <ButtonEdit>
                <FiEdit2 style={{ color: 'rgba(17, 17, 17, 0.6)' }} />
              </ButtonEdit>
            </BoxInput>

            <BoxInput>
              <TextField>Phone:</TextField>
              <InputForm disabled value={user.phone}/>
              <ButtonEdit>
                <FiEdit2 style={{ color: 'rgba(17, 17, 17, 0.6)' }} />
              </ButtonEdit>
            </BoxInput>

            <BoxInput>
              <TextField>City:</TextField>
              <InputForm disabled value={user.city}/>
              <ButtonEdit>
                <FiEdit2 style={{ color: 'rgba(17, 17, 17, 0.6)' }} />
              </ButtonEdit>
            </BoxInput>
          </Form>
          <Logout ></Logout>
        </Profile>
        
           
      </Box>)
      }
  

  
//      return (
//     <div>
//       {UserData}
//     </div>
// )
         

   

