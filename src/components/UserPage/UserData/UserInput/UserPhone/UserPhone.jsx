import React from "react";
import { BoxInput, TextField, InputForm, ButtonEdit } from "./UserPhone.styled"
import { FiEdit2, FiCheck } from 'react-icons/fi';
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "redux/auth/auth-selectors";
import { useDispatch } from "react-redux";
import { patchContact } from "redux/userpage/userpage-operation";    


export default function UserInputPhone() {
    const user = useSelector(selectUser) ;
    const [phone, setName] = useState(user.phone);
    const dispatch = useDispatch();
    const [disabled, setDisabled] = useState(true);

    const handleChange = (e) => {
    setName(e.target.value);
}

    function handleGameClick(e) {
    if (disabled) {
    setDisabled(false);
    } else {
      dispatch(patchContact({phone: phone}));
      setDisabled(true);
    }
    
  }
return(
    <BoxInput>
        <TextField>Phone:</TextField>
        <InputForm onChange={handleChange} value={phone} type="text" disabled={ disabled} />
        <ButtonEdit type='submit' onClick={handleGameClick} >
            <div>{disabled ? <FiEdit2 color="#F59256"/> : <FiCheck color="#F59256"/>}</div>
        </ButtonEdit>
        </BoxInput>
)
}
