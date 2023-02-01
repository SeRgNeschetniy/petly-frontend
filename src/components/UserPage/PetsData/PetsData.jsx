import { useDispatch , useSelector} from 'react-redux';
import { removePetCard } from 'redux/userpage/userpage-operation';
import { selectPets } from './../../../redux/userpage/userpage-selectors';
import { FiTrash } from "react-icons/fi";
import { TfiPlus } from "react-icons/tfi";
import {
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
    Typography,
    Box,
} from './PetsData.styled';



export default function PetsData() {
const dispatch = useDispatch();
    
const deleteContact = id => {
    return dispatch(removePetCard(id));
};
    const items = useSelector(selectPets);

    const pet = items.map(({ id, name, date, breed, comments  }) => {
        return (
            <SecondBox >
                <Head>
                    <MainText>My pets:</MainText>
                    <AddPet>
                        <H3>Add pet</H3>
                        <AddButton>
                            <TfiPlus style={{ color: "#FFFFFF", height: "18px", width: "16px" }}></TfiPlus>
                        </AddButton>
                    </AddPet>
                </Head>
                <PetCard>
                    <PetAvatar src="https://via.placeholder.com/161x161.jpeg?text=Pet+Avatar"></PetAvatar>
                    <PetInfo>
                        <Text>Name:<Typography>{name}</Typography></Text>
                        <Text>Date: <Typography>{date}</Typography></Text>
                        <Text>Breed: <Typography>{breed}</Typography></Text>
                        <Text>Comments: <Typography>{comments}</Typography></Text>
                    </PetInfo>
                    <DelateButton
                        type="button"
                        onClick={() => deleteContact(id)} >
                        <FiTrash />
                    </DelateButton>
                </PetCard>
            </SecondBox>
        )
    })
     return (
    <Box >
      {items.length < 1 && (
        <Typography variant="h6" sx={{ ml: 5 }}>
          Haven't any pet...
        </Typography>
      )}{' '}
            {pet}
        </Box>
     )
}