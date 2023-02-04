import {
    PetCard,
    PetAvatar,
    PetInfo,
    Text,
    DelateButton,
    Typography,
} from './PetCard.styled';
import { useDispatch, useSelector } from 'react-redux';
import { removePetCard } from 'redux/userpage/userpage-operation';
import { FiTrash } from "react-icons/fi";
import { useEffect } from 'react';
import {fetchUserPets} from 'redux/userpage/userpage-operation';
import { selectUserPets } from 'redux/userpage/userpage-selectors';

export default function PetsCard() {
        const dispatch = useDispatch();
            useEffect(() => {
                dispatch(fetchUserPets());
            }, [dispatch]);
    
    const items = useSelector(selectUserPets)
    console.log(items)

 const deletePetCard = id => {
    return dispatch(removePetCard(id));
    };

    const pet = items.map(({ _id, name, dateOfBirth, breed, photoPet, comment }) => {
        return (
            <PetCard key={_id}>
            <PetAvatar src={photoPet} alt="pet"></PetAvatar>
            <PetInfo>
                <Text>Name:<Typography>{name}</Typography></Text>
                <Text>Date of birth: <Typography>{dateOfBirth}</Typography></Text>
                <Text>Breed: <Typography>{breed}</Typography></Text>
                <Text>Comments: <Typography>{comment}</Typography></Text>
            </PetInfo>
            <DelateButton
                type="button"
                onClick={() => deletePetCard(_id)} >
                <FiTrash />
            </DelateButton>
        </PetCard>)
        
    }
    )
    return (
    <div >
      {items.length < 1 && (
        <Typography variant="h6" sx={{ ml: 5 }}>
          Haven't any pet...
        </Typography>
      )}{' '}
            {pet}
        </div>
     )
}