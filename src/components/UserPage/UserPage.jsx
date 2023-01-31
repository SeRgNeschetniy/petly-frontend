import { css } from '@emotion/react';
import PropTypes from 'prop-types';
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
    Text
} from './UserPage.styled';


export default function UserPage(){ 
return (
    <Container>
        <Box>
        <AccentText>
            My information:
        </AccentText>
        <Profile>
                <Avatar src="https://via.placeholder.com/233x233.jpeg?text=Profile+image"/>
                    
                
                <Form>
                    <BoxInput>
                        <TextField>
                              Name:
                        </TextField>
                        <InputForm/>
                        <ButtonEdit/>
                    </BoxInput>
       
                    <BoxInput>
                        <TextField>
                            Email:
                        </TextField>
                        <InputForm/>
                        <ButtonEdit/>
                    </BoxInput>
        
                    <BoxInput>
                        <TextField>
                            Birthday:
                        </TextField>
                        <InputForm/>
                        <ButtonEdit/>
                    </BoxInput>
        
                    <BoxInput>
                        <TextField>
                            Phone:
                        </TextField>
                        <InputForm/>
                        <ButtonEdit/>
                    </BoxInput>
        
                    <BoxInput>
                        <TextField>
                            City:
                        </TextField>
                        <InputForm/>
                        <ButtonEdit/>
                    </BoxInput>
                </Form>
                <LeaveButton>
                    Log out
                </LeaveButton>
            </Profile>
        </Box>
        <SecondBox >
            <Head>
                <MainText>My pets:</MainText>
                    <AddPet>
                        <H3>Add pet</H3>
                        <AddButton>+</AddButton>
                    </AddPet>
            </Head>
            <PetCard>
                <PetAvatar src="https://via.placeholder.com/161x161.jpeg?text=Pet+Avatar"></PetAvatar>
                <PetInfo>
                    <Text>Name:</Text>
                    <Text>Date:</Text>
                    <Text>Breed:</Text>
                    <Text>Comments:</Text>
                </PetInfo>
            </PetCard>
        </SecondBox>
    </Container>
  );
}