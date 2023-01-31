import Headline from 'components/Headline/Headline';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input, Button, Form, ErrorMessage, InputField, LinkText, StyledLink } from '../Auth.styled';
import GoogleIcon from '../GoogleSignIn/GoogleIcon';

export default function Login() {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Require'),
    }),
    onSubmit: values => {
      console.log("hello");
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <div>
        <Headline title="Login" />
      <Form
      onSubmit={formik.handleSubmit}
      >
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
    <Button type="submit">Login</Button>
          </Form>
        <GoogleIcon />
        <LinkText>Don't have an account? <StyledLink to="/register">Register</StyledLink></LinkText>
      </div>
      </>
  )
};
