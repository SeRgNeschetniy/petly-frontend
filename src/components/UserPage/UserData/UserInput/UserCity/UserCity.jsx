import { BoxInput, TextField, InputForm, ButtonEdit } from './UserCity.styled';
import { FiCheck } from 'react-icons/fi';
import { useState } from 'react';
import { selectUser } from 'redux/auth/auth-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { patchContact } from 'redux/userpage/userpage-operation';
import * as Yup from 'yup';
import { Notify } from 'notiflix';
import { MdEdit } from "react-icons/md";

export default function UserInputCity() {
  const user = useSelector(selectUser);
  const [city, setCity] = useState(user.city);
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);

  // const handleChange = e => {
  //   setCity(e.target.value);
  // };
  const notifyOptions = {
    showOnlyTheLastOne: true,
    timeout: 2000,
  }
  const schema = Yup.object({
      city: Yup.string()
    .min(2)
    .required('City is required!')
    .matches(
      /^[а-яёіїєА-ЯЁІЇЄA-Za-z]+,?\s[а-яёіїєА-ЯЁІЇЄA-Za-z]+$/,
      `Enter data in the format "City, region"`
    )
  })

  function handleGameClick(e) {
    if (disabled) {
      setDisabled(false);
    } else {
      schema.validate({city:city}).then(
          function (valid) {
       dispatch(patchContact(valid));
        setDisabled(true);
    }).catch(
          function (e) {
       Notify.failure(e.message, notifyOptions)
    })
    }
  }
  return (
    <BoxInput>
      <TextField>City:</TextField>
      <div>
        {disabled ? (
          <InputForm
            value={city}
            type="text"
            onChange={e => setCity(e.target.value)}
            disabled={disabled}
          ></InputForm>
        ) : (
          <InputForm
            value={city}
            type="text"
            onChange={e => setCity(e.target.value)}
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
          {disabled ? <MdEdit color="#F59256"  size={"24px"}/> : <FiCheck color="#F59256" size={"24px"}/>}
        </div>
      </ButtonEdit>
    </BoxInput>
  );
}
