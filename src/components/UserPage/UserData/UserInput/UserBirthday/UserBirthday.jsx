import {
  BoxInput,
  TextField,
  InputForm,
  ButtonEdit,
} from './UserBirthday.styled';
import { FiEdit2, FiCheck } from 'react-icons/fi';
import { useState } from 'react';
import { selectUser } from 'redux/auth/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { patchContact } from 'redux/userpage/userpage-operation';
import * as Yup from 'yup';
import { Notify } from 'notiflix';

export default function UserInputBirthday() {
  const user = useSelector(selectUser);
  const [birthday, setBirthday] = useState(user.birthday);
  const dispatch = useDispatch();

  const [disabled, setDisabled] = useState(true);

  // const handleChange = e => {
  //   setBirthday(e.target.value);
  // };
const notifyOptions = {
    showOnlyTheLastOne: true,
    timeout: 2000,
  }
  const schema = Yup.object({
     birthday: Yup.string()
    // .matches(
    //   /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
    //   'Correct format: dd.mm.yyyy'
    // )
  })
console.log()


  function handleGameClick(e) {
    if (disabled) {
      setDisabled(false);
    } else {

      schema.validate({birthday:birthday}).then(
        function (valid) {
          const value = (Object.values(valid)).toString()
          const reverse = value.split('-').reverse().join('.')
          console.log(reverse)
          dispatch(patchContact({ birthday: reverse }));
          setBirthday( reverse )
        setDisabled(true);
    }).catch(
          function (e) {
       Notify.failure(e.message, notifyOptions)
    })
    }
  }
  return (
    <BoxInput>
      <TextField>Birthday:</TextField>
      <div>
        {disabled ? (
          <InputForm
            value={birthday}
            type="text"
            onChange={e => setBirthday(e.target.value)}
            disabled={disabled}
          ></InputForm>
        ) : (
          <InputForm
            value={birthday}
            type="date"
            onChange={e => setBirthday(e.target.value)}
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
