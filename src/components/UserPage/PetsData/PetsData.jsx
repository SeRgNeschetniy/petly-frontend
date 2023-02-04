
import {
    MainText,
    H3,
    AddButton,
    SecondBox,
    Head,
    AddPet,
} from './PetsData.styled';

import { TfiPlus } from "react-icons/tfi";


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





