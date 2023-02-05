import { Formik } from 'formik';
import * as Yup from 'yup';
import { Input, Button, Form, InputField, LinkText, StyledLink } from '../Auth.styled';
import { useDispatch } from 'react-redux';
import { signup } from 'redux/auth/auth-operation';
import { Title } from '../Auth.styled';
import { Notify } from 'notiflix';

export default function SecondStep({ setSecondPage, setRegisterState, registerState }) {
  const dispatch = useDispatch();

    const notifyOptions = {
    showOnlyTheLastOne: true,
    timeout: 2000,
  }

  const secondStepValidation = Yup.object({
    name: Yup.string().min(2).required('Required'),
    city: Yup.string().min(2).required('Required').matches(/^[a-zA-Z]+,?\s[a-zA-Z]+$/, `Enter data in the format "City, region"`),
    phone: Yup.string().required('Required').matches(/^\+380\d{9}$/, `Enter phone number in the format +380XXXXXXXXX`),
  });
  
  const handleBackClick = (values) => {
    setSecondPage(false);
    setRegisterState(prevState => {
          return {
            ...prevState,
            name: values.name,
            city: values.city,
            phone: values.phone
          }
    });
    // const { name, city, phone } = e.target;
    // const { email, password } = registerState;
    // const data = { email, password, name: name.value, city: city.value, phone: phone.value };
    // dispatch(signup(data));
  }

  return (
    <Formik
      initialValues={registerState}
      validationSchema={secondStepValidation}
      onSubmit={values => {
        const { email, password } = registerState;
        const { name, city, phone } = values;
        const data = { email, password, name, city, phone };
        dispatch(signup(data));
      }
      }
    >
      {props => (
        <Form onSubmit={props.handleSubmit}>
          <Title>Registration</Title>
          <InputField>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              onBlur={props.handleBlur}
              onChange={props.handleChange}
              value={props.values.name}
            />
            {props.isSubmitting && props.errors.name ? Notify.failure(props.errors.name, notifyOptions) : null}
          </InputField>
          <InputField>
            <Input
              id="city"
              type="text"
              name="city"
              placeholder="City/Region"
              onBlur={props.handleBlur}
              onChange={props.handleChange}
              value={props.values.city}
            />
            {props.isSubmitting && props.errors.city ? Notify.failure(props.errors.city, notifyOptions) : null}
          </InputField>
          <InputField margin>
            <Input
              id="phone"
              type="text"
              name="phone"
              placeholder="Phone number"
              onBlur={props.handleBlur}
              onChange={props.handleChange}
              value={props.values.phone}
            />
            {props.isSubmitting && props.errors.phone ? Notify.failure(props.errors.phone, notifyOptions) : null}
          </InputField>
          <Button type="submit">Registration</Button>
          <Button outline margin submit type="button" onClick={() => handleBackClick(props.values)}>Back</Button>
          <LinkText>Already have an account? <StyledLink to="/login">Login</StyledLink></LinkText>
        </Form>
      )}
      </Formik>
)}
