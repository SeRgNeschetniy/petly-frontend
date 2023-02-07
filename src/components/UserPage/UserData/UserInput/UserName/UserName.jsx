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
      <InputForm value={user.name} type="text" disabled={ disabled} ></InputForm>
     <ButtonEdit type='submit' onClick={handleGameClick}  >
        <div>{disabled ? <FiEdit2 color="#F59256"/> : <FiCheck color="#F59256"/>}</div>
       </ButtonEdit>
      
   </BoxInput>
  )
}