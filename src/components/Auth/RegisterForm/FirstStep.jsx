import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Container, Input, Button, Form, ErrorMessage, InputField } from '../Auth.styled';

export default function FirstStep({ setSecondPage, setRegisterState, registerState }) {

    const formik = useFormik({
      initialValues: registerState,
    validationSchema: Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Require'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Password must match').required('Require'),
    }),
      onSubmit: (values) => {
        // alert(JSON.stringify(values, null, 2));
        setSecondPage(true);
        setRegisterState(prevState => {
          return {
            ...prevState,
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmPassword
          }
      });
    },
  });

  return (
    // <Container>
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
        <InputField>
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
        <Button type='submit' handleClick={formik.handleSubmit}>Next</Button>
      </Form>
    // </Container>
  )
}
