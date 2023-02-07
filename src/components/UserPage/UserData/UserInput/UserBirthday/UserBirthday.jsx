import { BoxInput,TextField,InputForm,ButtonEdit } from "./UserBirthday.styled"
import { FiEdit2, FiCheck } from 'react-icons/fi';
import { useState } from "react";
import { selectUser } from "redux/auth/auth-selectors";
import { useSelector } from "react-redux";
            
export default function UserInputBirthday() {
   const user = useSelector(selectUser) ;
    
 const [disabled, setDisabled] = useState(true);

  function handleGameClick() {
    setDisabled(!disabled);
  }
    return (
        <BoxInput>
            <TextField>Birthday:</TextField>
             <div>
        {disabled ? <InputForm value={user.birthday} type="text" disabled={disabled} ></InputForm> : <InputForm value={user.birthday} type="text" style={{background : "#FDF7F2",border: "1px solid rgba(245, 146, 86, 0.5)"} } disabled={disabled}></InputForm> }
      </div>
            <ButtonEdit type='submit' onClick={handleGameClick}  >
                <div>{disabled ? <FiEdit2 color="#F59256"/> : <FiCheck color="#F59256"/>}</div>
            </ButtonEdit>
        </BoxInput>

    )
}