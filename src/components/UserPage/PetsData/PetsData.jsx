import { useDispatch , useSelector} from 'react-redux';
import { removePetCard } from 'redux/userpage/userpage-operation';
import { selectUserPets } from './../../../redux/userpage/userpage-selectors';
import { fetchUserPets } from 'redux/userpage/userpage-operation';
import { useEffect } from 'react';
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
// const items = useSelector(selectUserPets);

    useEffect(() => {
        dispatch(fetchUserPets());
        }, [dispatch]);

    
const deletePetCard = id => {
    return dispatch(removePetCard(id));
};

    // const pet = items.map(({ id, name, dateOfBirth, bread, photoPet, comments  }) => {
    //     return (
    //         <SecondBox >
    //             <Head>
    //                 <MainText>My pets:</MainText>
    //                 <AddPet>
    //                     <H3>Add pet</H3>
    //                     <AddButton>
    //                         <TfiPlus style={{ color: "#FFFFFF", height: "18px", width: "16px" }}></TfiPlus>
    //                     </AddButton>
    //                 </AddPet>
    //             </Head>
    //             <PetCard key={id}>
    //                 <PetAvatar src={photoPet} alt="pet"></PetAvatar>
    //                 <PetInfo>
    //                     <Text>Name:<Typography>{name}</Typography></Text>
    //                     <Text>Date: <Typography>{dateOfBirth}</Typography></Text>
    //                     <Text>Breed: <Typography>{bread}</Typography></Text>
    //                     <Text>Comments: <Typography>{comments}</Typography></Text>
    //                 </PetInfo>
    //                 <DelateButton
    //                     type="button"
    //                     onClick={() => deletePetCard(id)} >
    //                     <FiTrash />
    //                 </DelateButton>
    //             </PetCard>
    //         </SecondBox>
    //     )
    // })
     return (
    <Box >
      {/* {items.length < 1 && (
        <Typography variant="h6" sx={{ ml: 5 }}>
          Haven't any pet...
        </Typography>
      )}{' '}
            {pet} */}
        </Box>
     )
}