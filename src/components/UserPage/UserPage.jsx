import { css } from '@emotion/react';
import PropTypes, { checkPropTypes } from 'prop-types';
import { TbLogout , TbCheck, TbCamera} from "react-icons/tb";
import { FiEdit2,FiTrash } from "react-icons/fi";
import { TfiPlus } from "react-icons/tfi";

import {
    Container,
    AccentText,
    Profile,
    TextField,
    Box, 
    Form,
    BoxInput,
    InputForm,
    ButtonEdit,
    LeaveButton,
    Avatar,
    MainText,
    H3,
    AddButton,
    SecondBox,
    Head,
    AddPet,
    PetCard,
    PetAvatar,
    PetInfo,
    Text,
    DelateButton,
    EditBox,
    EditPhotoButton
} from './UserPage.styled';


export default function UserPage(){ 
return (
    <Container>
        <Box>
        <AccentText>
            My information:
        </AccentText>
            <Profile>
                <div style={{position: "relative"}}>
                <Avatar src="https://via.placeholder.com/233x233.jpeg?text=Profile+image">
                    
                    
                    </Avatar>
                    </div>
                <EditBox>
                    <TbCamera style={{ width: "18px", height: "18px", color: "#F59256" }}></TbCamera><EditPhotoButton  >Edit photo</EditPhotoButton>
                    </EditBox>
                <Form>
                    <BoxInput>
                        <TextField>
                              Name:
                        </TextField>
                        <InputForm>
                            
                        </InputForm>
                        <ButtonEdit>
                            <FiEdit2 style={{color: "rgba(17, 17, 17, 0.6)"}} />
                        </ButtonEdit >
                    </BoxInput>
       
                    <BoxInput>
                        <TextField>
                            Email:
                        </TextField>
                        <InputForm/>
                        <ButtonEdit>
                             <FiEdit2 style={{color: "rgba(17, 17, 17, 0.6)"}} />
                        </ButtonEdit >
                    </BoxInput>
        
                    <BoxInput>
                        <TextField>
                            Birthday:
                        </TextField>
                        <InputForm/>
                        <ButtonEdit>
                             <FiEdit2 style={{color: "rgba(17, 17, 17, 0.6)"}} />
                        </ButtonEdit >
                    </BoxInput>
        
                    <BoxInput>
                        <TextField>
                            Phone:
                        </TextField>
                        <InputForm/>
                        <ButtonEdit>
                             <FiEdit2 style={{color: "rgba(17, 17, 17, 0.6)"}} />
                        </ButtonEdit >
                    </BoxInput>
        
                    <BoxInput>
                        <TextField>
                            City:
                        </TextField>
                        <InputForm />
                        <ButtonEdit>
                             <FiEdit2 style={{color: "rgba(17, 17, 17, 0.6)"}} />
                        </ButtonEdit >
                        
                    </BoxInput>
                </Form>
                <LeaveButton>
                    <TbLogout style={{color: "#F59256", height:"18px",width: "18px" }}/>
                    Log out
                </LeaveButton>
            </Profile>
        </Box>
        <SecondBox >
            <Head>
                <MainText>My pets:</MainText>
                    <AddPet>
                        <H3>Add pet</H3>
                    <AddButton>
                        <TfiPlus style={{color: "#FFFFFF",height:"18px",width: "16px" } }></TfiPlus>
                    </AddButton>
                    </AddPet>
            </Head>
            <PetCard>
                <PetAvatar src="https://via.placeholder.com/161x161.jpeg?text=Pet+Avatar"></PetAvatar>
                <PetInfo>
                    <Text>Name: Jack</Text>
                    <Text>Date: 22.04.2018</Text>
                    <Text>Breed: Percian cat</Text>
                    <Text>Comments: Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur   </Text>
                </PetInfo>
                <DelateButton>
                    <FiTrash></FiTrash>
                </DelateButton>
            </PetCard>
        </SecondBox>
    </Container>
  );
}