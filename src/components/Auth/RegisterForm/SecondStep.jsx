import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input, Button, Form, ErrorMessage, InputField } from '../Auth.styled';

export default function SecondStep({ setSecondPage, setRegisterState, registerState, children }) {
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
    console.log("Ready for send...", registerState);
  }

  return (
      <Form onSubmit={handleSubmit}>
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
        <InputField>
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
        <Button submit type="button" onClick={formik.handleSubmit}>Back</Button>
        <Button type="submit">Registration</Button>
        {children}
      </Form>
)}
