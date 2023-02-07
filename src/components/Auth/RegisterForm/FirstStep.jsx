import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Input,
  Button,
  Form,
  InputField,
  Title,
  LinkText,
  StyledLink,
  DivPass
} from '../Auth.styled';
import { Notify } from 'notiflix';

import { ImEyeBlocked } from 'react-icons/im';
import { ImEye } from 'react-icons/im';

export default function FirstStep({
  setSecondPage,
  setRegisterState,
  registerState,
}) {
  const notifyOptions = {
    showOnlyTheLastOne: true,
    timeout: 2000,
  };

  const firstStepValidation = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Require').min(7),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Password must match')
      .required('Require'),
  });

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <Formik
      initialValues={registerState}
      validationSchema={firstStepValidation}
      onSubmit={values => {
        setRegisterState(prevState => {
          return {
            ...prevState,
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmPassword,
          };
        });
        setSecondPage(true);
      }}
    >
      {props => (
        <Form onSubmit={props.handleSubmit}>
          <Title>Registration</Title>
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
            {props.isSubmitting && props.errors.email
              ? Notify.failure(props.errors.email, notifyOptions)
              : null}
          </InputField>
          <InputField>
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
            {props.isSubmitting && props.errors.password
              ? Notify.failure(props.errors.password, notifyOptions)
              : null}
          </InputField>
          <InputField margin>
            <Input
              id="confirmPassword"
              type={show ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm password"
              onBlur={props.handleBlur}
              onChange={props.handleChange}
              value={props.values.confirmPassword}
            />
            
            {props.isSubmitting && props.errors.confirmPassword
              ? Notify.failure(props.errors.confirmPassword, notifyOptions)
              : null}
          </InputField>
          <Button margin type="submit" handleClick={props.handleSubmit}>
            Next
          </Button>
          <LinkText>
            Already have an account? <StyledLink to="/login">Login</StyledLink>
          </LinkText>
        </Form>
      )}
    </Formik>
  );
}
