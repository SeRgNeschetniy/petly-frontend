// import { useDispatch , useSelector} from 'react-redux';
import { removePetCard } from 'redux/userpage/userpage-operation';

// import { useEffect } from 'react';





// export default function PetsData() {
// const dispatch = useDispatch();
// const items = useSelector(selectUserPets);

//     useEffect(() => {
//         dispatch(fetchUserPets());
//         }, [dispatch]);

    


    
    
// }
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
} from './PetsData.styled';

import { TfiPlus } from "react-icons/tfi";

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserPets } from './../../../redux/userpage/userpage-selectors';
import { fetchUserPets } from 'redux/userpage/userpage-operation';
import PetsCard from './PetCard/PetCard';

export default function PetsData() { 
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
                <PetsCard></PetsCard>
            </SecondBox>
        )
    }
//  





