import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input, Button, Form, ErrorMessage, InputField, LinkText, StyledLink } from '../Auth.styled';
import { useDispatch } from 'react-redux';
import { signup } from 'redux/auth/auth-operation';
import { Title } from '../Auth.styled';

export default function SecondStep({ setSecondPage, setRegisterState, registerState }) {
  const dispatch = useDispatch();


    const formik = useFormik({
    initialValues: registerState,
    validationSchema: Yup.object({
    name: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    phone: Yup.string().required('Required'),
    }),
        onSubmit: values => {
          setRegisterState(prevState => {
          return {
            ...prevState,
            name: values.name,
            city: values.city,
            phone: values.phone
          }
          });
          setSecondPage(false);
      }
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, city, phone } = e.target;
    
    const { email, password } = registerState;
    const data = { email, password, name: name.value, city: city.value, phone: phone.value };
    dispatch(signup(data));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Registration</Title>
        <InputField>
        <Input
      id="name"
      type="text"
      name="name"
      placeholder="Name"
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={formik.values.name}
        />
    {formik.touched.name && formik.errors.name ? (
        <ErrorMessage>{formik.errors.name}</ErrorMessage>
      ) : null}
        </InputField>
        <InputField>
        <Input
      id="city"
      type="text"
      name="city"
      placeholder="City/Region"
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={formik.values.city}
      />
        {formik.touched.city && formik.errors.city ? (
        <ErrorMessage>{formik.errors.city}</ErrorMessage>
      ) : null}
        </InputField>
        <InputField margin>
        <Input
      id="phone"
      type="text"
      name="phone"
      placeholder="Phone number"
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={formik.values.phone}
      />
      {formik.touched.phone && formik.errors.phone ? (
        <ErrorMessage>{formik.errors.phone}</ErrorMessage>
      ) : null}
        </InputField>
        <Button type="submit">Registration</Button>
        <Button outline margin submit type="button" onClick={formik.handleSubmit}>Back</Button>
      <LinkText>Already have an account? <StyledLink to="/login">Login</StyledLink></LinkText>
      </Form>
)}
