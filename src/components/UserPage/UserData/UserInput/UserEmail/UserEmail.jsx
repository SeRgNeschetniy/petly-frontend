import { BoxInput,TextField,InputForm,ButtonEdit } from "./UserEmail.styled"
import { FiEdit2, FiCheck } from 'react-icons/fi';
import { useState, } from "react";
import { selectUser } from "redux/auth/auth-selectors";
import { useDispatch, useSelector } from "react-redux";
import { patchContact } from "redux/userpage/userpage-operation";

export default function UserInputEmail() {
    const user = useSelector(selectUser) ;
    const [email, setEmail] = useState(user.email);
    const dispatch = useDispatch();
    const [disabled, setDisabled] = useState(true);

    const handleChange = (e) => {
    setEmail(e.target.value);
}

    function handleGameClick(e) {
    if (disabled) {
    setDisabled(false);
    } else {
      dispatch(patchContact({email: email}));
      setDisabled(true);
    }
    
  }
  return (

  <BoxInput>
    <TextField>Email: </TextField>
      <InputForm onChange={handleChange} value={email} type="text" disabled={ disabled} ></InputForm>
     <ButtonEdit type='submit' onClick={handleGameClick}  >
        <div>{disabled ? <FiEdit2 color="#F59256"/> : <FiCheck color="#F59256"/>}</div>
       </ButtonEdit>
      
   </BoxInput>
  )
}