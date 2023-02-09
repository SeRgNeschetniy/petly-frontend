import React from 'react';
import { BoxInput, TextField, InputForm, ButtonEdit } from './UserPhone.styled';
import { FiCheck } from 'react-icons/fi';
import { MdEdit } from "react-icons/md";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/auth-selectors';
import { useDispatch } from 'react-redux';
import { patchContact } from 'redux/userpage/userpage-operation';
import * as Yup from 'yup';
import { Notify } from 'notiflix';

export default function UserInputPhone({setIsEdit, isEdit}) {
  const user = useSelector(selectUser);
  const [phone, setPhone] = useState(user.phone);
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);

  // const handleChange = e => {
  //   setName(e.target.value);
  // };
const notifyOptions = {
    showOnlyTheLastOne: true,
    timeout: 2000,
  }
  const schema = Yup.object({
     phone: Yup.string().required('Required').matches(/^\+380\d{9}$/, `Enter phone number in the format +380XXXXXXXXX`)
  })


  function handleGameClick(e) {
    if (!isEdit) {
      setIsEdit(true);
      setDisabled(false);
    } else if(!disabled && isEdit){
      schema.validate({ phone: phone }).then(
        function (valid) {
          dispatch(patchContact(valid));
          setIsEdit(false)
          setDisabled(true);
        }).catch(
          function (e) {
            Notify.failure(e.message, notifyOptions)
          })
    }
  }
  return (
    <BoxInput>
      <TextField>Phone:</TextField>
      <div>
        {disabled ? (
          <InputForm
            value={phone}
            type="text"
            disabled={disabled}
            onChange={e => setPhone(e.target.value)}
          ></InputForm>
        ) : (
          <InputForm
            value={phone}
            type="text"
            onChange={e => setPhone(e.target.value)}
            style={{
              background: '#FDF7F2',
              border: '1px solid rgba(245, 146, 86, 0.5)',
            }}
            disabled={disabled}
          ></InputForm>
        )}
      </div>
      <ButtonEdit type="submit" onClick={handleGameClick}>
        <div>
          {disabled ? <MdEdit color="#F59256" size={"24px"} /> : <FiCheck color="#F59256"  size={"24px"}/>}
        </div>
      </ButtonEdit>
    </BoxInput>
  );
}
