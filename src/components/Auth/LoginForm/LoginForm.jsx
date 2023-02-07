import { useState } from 'react';
import { Input, Button, Form, InputField, DivPass } from '../Auth.styled';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operation';
import { Notify } from 'notiflix';
import { validationSchema } from 'servises/LoginRegisterValidations';
import { ImEyeBlocked } from 'react-icons/im';
import { ImEye } from 'react-icons/im';

export default function LoginForm() {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  const notifyOptions = {
    showOnlyTheLastOne: true,
    timeout: 2000,
  };

  const initialLoginState = {
    email: '',
    password: '',
  };



  return (
    <Formik
      initialValues={initialLoginState}
      validationSchema={validationSchema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={values => {
        dispatch(login(values));
      }}
    >
      {props => (
        <Form>
          <InputField>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              onBlur={props.handleBlur}
              onChange={props.handleChange}
              value={props.values.email}
            />
          </InputField>
          {props.isSubmitting && props.errors.email
            ? Notify.failure(props.errors.email, notifyOptions)
            : null}
          <InputField margin>
            <Input
              id="password"
              type={show ? "text" : "password"}
              name="password"
              placeholder="Password"
              onBlur={props.handleBlur}
              onChange={props.handleChange}
              value={props.values.password}
            />
            <DivPass onClick={handleShow}>
              {show ? <ImEye /> : <ImEyeBlocked />}
            </DivPass>
          </InputField>
          {props.isSubmitting && props.errors.password
            ? Notify.failure(props.errors.password, notifyOptions)
            : null}
          <Button type="submit" onClick={props.handleSubmit}>
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
}
