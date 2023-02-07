import { BoxInput,TextField,InputForm,ButtonEdit } from "./UserCity.styled"
import { FiEdit2, FiCheck } from 'react-icons/fi';
import { useState } from "react";
import { selectUser } from "redux/auth/auth-selectors";   
import { useSelector } from "react-redux";

export default function UserInputCity() {
const user = useSelector(selectUser) ;
    
    const [disabled, setDisabled] = useState(true);

    function handleGameClick() {
        setDisabled(!disabled);
    }
    return(
    <BoxInput>
        <TextField>City:</TextField>
        <InputForm value={user.city} type="text" disabled={ disabled} />
            <ButtonEdit type='submit' onClick={handleGameClick}  >
            <div>{disabled ? <FiEdit2 color="#F59256"/> : <FiCheck color="#F59256"/>}</div>
        </ButtonEdit>
    </BoxInput>
    )
}