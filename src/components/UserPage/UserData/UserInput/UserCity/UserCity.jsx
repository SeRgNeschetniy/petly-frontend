import { BoxInput,TextField,InputForm,ButtonEdit } from "./UserCity.styled"
import { FiEdit2, FiCheck } from 'react-icons/fi';
import { useState } from "react";
import { selectUser } from "redux/auth/auth-selectors";   
import { useDispatch, useSelector } from "react-redux";
import { patchContact } from "redux/userpage/userpage-operation";

export default function UserInputCity() {
    const user = useSelector(selectUser) ;
    const [city, setCity] = useState(user.city);
    const dispatch = useDispatch();
    const [disabled, setDisabled] = useState(true);

    const handleChange = (e) => {
    setCity(e.target.value);
}

    function handleGameClick(e) {
    if (disabled) {
    setDisabled(false);
    } else {
      dispatch(patchContact({city: city}));
      setDisabled(true);
    }
    
  }
    return(
    <BoxInput>
        <TextField>City:</TextField>
        <InputForm onChange={handleChange}  value={city}  type="text" disabled={ disabled} />
            <ButtonEdit type='submit' onClick={handleGameClick}  >
            <div>{disabled ? <FiEdit2 color="#F59256"/> : <FiCheck color="#F59256"/>}</div>
        </ButtonEdit>
    </BoxInput>
    )
}