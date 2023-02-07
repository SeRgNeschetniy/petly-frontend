import { BoxInput,TextField,InputForm,ButtonEdit } from "./UserName.styled"
import { FiEdit2, FiCheck } from 'react-icons/fi';  
import { useState } from "react";
import {  useSelector } from 'react-redux';
import { selectUser } from "redux/auth/auth-selectors";


export default function UserInputName() {
 
const user = useSelector(selectUser) ;





 const [disabled, setDisabled] = useState(true);

  function handleGameClick() {
    setDisabled(!disabled);
  }
  return (

  <BoxInput>
      <TextField>Name: </TextField>
      <div>
        {disabled ? <InputForm value={user.name} type="text" disabled={disabled} ></InputForm> : <InputForm value={user.name} type="text" style={{background : "#FDF7F2",border: "1px solid rgba(245, 146, 86, 0.5)"} } disabled={disabled}></InputForm> }
      </div>
        

     <ButtonEdit type='submit' onClick={handleGameClick}  >
        <div>{disabled ? <FiEdit2 color="#F59256"/> : <FiCheck color="#F59256"/>}</div>
       </ButtonEdit>
      
   </BoxInput>
  )
}