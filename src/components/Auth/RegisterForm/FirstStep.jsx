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
} from '../Auth.styled';
import { Notify } from 'notiflix';

export default function FirstStep({
  setSecondPage,
  setRegisterState,
  registerState,
}) {


  const notifyOptions = {
    showOnlyTheLastOne: true,
    timeout: 2000,
  }

  const firstStepValidation = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Require').min(7),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Password must match')
      .required('Require'),
  });

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
            {props.touched.email && props.errors.email ? Notify.failure(props.errors.email, notifyOptions) : null}
          </InputField>
          <InputField>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              onBlur={props.handleBlur}
              onChange={props.handleChange}
              value={props.values.password}
            />
            {props.touched.password && props.errors.password ? Notify.failure(props.errors.password, notifyOptions) : null}
          </InputField>
          <InputField margin>
            <Input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              onBlur={props.handleBlur}
              onChange={props.handleChange}
              value={props.values.confirmPassword}
            />
            {props.touched.confirmPassword && props.errors.confirmPassword ? Notify.failure(props.errors.confirmPassword, notifyOptions) : null}
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
