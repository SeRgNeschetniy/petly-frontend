import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input, Button, Form, ErrorMessage, InputField, Title, LinkText, StyledLink } from '../Auth.styled';

export default function FirstStep({ setSecondPage, setRegisterState, registerState }) {

    const formik = useFormik({
      initialValues: registerState,
      validationSchema: Yup.object({
      email: Yup.string().email('Invalid email format').required('Required'),
      password: Yup.string().required('Require').min(7),
      confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Password must match').required('Require'),
    }),
      onSubmit: (values) => {
        setRegisterState(prevState => {
          return {
            ...prevState,
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmPassword
          }
        });
        setSecondPage(true);
    },
  });

  return (
      <Form
      onSubmit={formik.handleSubmit}
    >
            <Title>Registration</Title>
        <InputField>
        <Input
      id="email"
      type="email"
      name="email"
      placeholder="Email"
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={formik.values.email}
        />
    {formik.touched.email && formik.errors.email ? (
        <ErrorMessage>{formik.errors.email}</ErrorMessage>
      ) : null}
        </InputField>
        <InputField>
        <Input
      id="password"
      type="password"
      name="password"
      placeholder="Password"
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={formik.values.password}
      />
        {formik.touched.password && formik.errors.password ? (
        <ErrorMessage>{formik.errors.password}</ErrorMessage>
      ) : null}
        </InputField>
        <InputField margin>
        <Input
      id="confirmPassword"
      type="password"
      name="confirmPassword"
      placeholder="Confirm password"
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={formik.values.confirmPassword}
      />
      {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
        <ErrorMessage>{formik.errors.confirmPassword}</ErrorMessage>
      ) : null}
      </InputField>
      <Button margin type='submit' handleClick={formik.handleSubmit}>Next</Button>
      <LinkText>Already have an account? <StyledLink to="/login">Login</StyledLink></LinkText>
      </Form>
  )
}
