import { Input, Button, Form, InputField } from '../Auth.styled';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operation';
import * as Yup from 'yup';
import { Notify } from 'notiflix';

export default function LoginForm() {
  const dispatch = useDispatch();

  const notifyOptions = {
    showOnlyTheLastOne: true,
    timeout: 2000,
  }

  const initialLoginState = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string().required('Require').min(6),
  });
  
  return (
    <Formik
      initialValues={initialLoginState}
      validationSchema={validationSchema}
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
            {props.touched.email && props.errors.email ? Notify.failure(props.errors.email, notifyOptions) : null}
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
          </InputField>
            {props.touched.password && props.errors.password ? Notify.failure(props.errors.password, notifyOptions) : null}
        <Button type="submit" onClick={props.handleSubmit}>Login</Button>
        </Form>
      )}
    </Formik>
  )
}
