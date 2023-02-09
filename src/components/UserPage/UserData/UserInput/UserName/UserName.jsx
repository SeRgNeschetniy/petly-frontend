import { BoxInput, TextField, InputForm, ButtonEdit } from './UserName.styled';
import { FiEdit2, FiCheck } from 'react-icons/fi';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/auth-selectors';
import { patchContact } from 'redux/userpage/userpage-operation';
import * as Yup from 'yup';
import { Notify } from 'notiflix';

export default function UserInputName({setIsEdit, isEdit}) {
  const user = useSelector(selectUser);
  const [name, setName] = useState(user.name);
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
     name: Yup.string().min(2).required('Required')
  })
  function handleGameClick(e) {
    if (!isEdit) {
      setIsEdit(true);
      setDisabled(false);
    } else if(!disabled && isEdit){
        schema.validate({name:name}).then(
          function (valid) {
            dispatch(patchContact(valid));
            setIsEdit(false);
        setDisabled(true);
    }).catch(
          function (e) {
       Notify.failure(e.message, notifyOptions)
    })
      
    }
  }
  return (
    <BoxInput>
      <TextField>Name: </TextField>
      <div>
        {disabled ? (
          <InputForm
            value={name}
            type="text"
            disabled={disabled}
            onChange={e => setName(e.target.value)}
          ></InputForm>
        ) : (
          <InputForm
            value={name}
            type="text"
            onChange={e => setName(e.target.value)}
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
          {disabled ? <FiEdit2 color="#F59256" /> : <FiCheck color="#F59256" />}
        </div>
      </ButtonEdit>
    </BoxInput>
  );
}
