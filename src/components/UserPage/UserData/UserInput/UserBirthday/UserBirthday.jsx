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

export default function UserInputBirthday() {
  const user = useSelector(selectUser);
  const [birthday, setBirthday] = useState(user.birthday);
  const dispatch = useDispatch();

  const [disabled, setDisabled] = useState(true);

  // const handleChange = e => {
  //   setBirthday(e.target.value);
  // };

  function handleGameClick(e) {
    if (disabled) {
      setDisabled(false);
    } else {
      dispatch(patchContact({ birthday: birthday }));
      setDisabled(true);
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
            type="text"
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
