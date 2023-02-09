import { BoxInput, TextField, InputForm, ButtonEdit } from './UserEmail.styled';
import { FiEdit2, FiCheck } from 'react-icons/fi';
import { useState } from 'react';
import { selectUser } from 'redux/auth/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { patchContact } from 'redux/userpage/userpage-operation';
import * as Yup from 'yup';
import { Notify } from 'notiflix';

export default function UserInputEmail({setIsEdit, isEdit}) {
  const user = useSelector(selectUser);
  const [email, setEmail] = useState(user.email);
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);

  const notifyOptions = {
    showOnlyTheLastOne: true,
    timeout: 2000,
  }
  const schema = Yup.object({
     email: Yup.string()
    .matches(
      /^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}.){1,2}[-A-Za-z]{2,})$/u,
      'Invalid email format'
    ).required('Required'),
  })
  // const handleChange = e => {
  //   setEmail(e.target.value);
  // };

  function handleGameClick(e) {
    if (!isEdit) {
      setIsEdit(true);
      setDisabled(false);
    } else if(!disabled && isEdit){
      schema.validate({email:email}).then(
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
      <TextField>Email: </TextField>
      <div>
        {disabled ? (
          <InputForm
            value={email}
            type="text"
            disabled={disabled}
            onChange={e => setEmail(e.target.value)}
          ></InputForm>
        ) : (
          <InputForm
            value={email}
            type="text"
            onChange={e => setEmail(e.target.value)}
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
