import * as Yup from 'yup';


export const validationSchema = Yup.object({
    email: Yup.string().matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 'Invalid email format').required('Required'),
    password: Yup.string().required('Require').min(7),
});
  
export const firstStepValidation = Yup.object({
    email: Yup.string().matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 'Invalid email format').required('Required'),
    password: Yup.string().required('Require').min(7),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Password must match')
      .required('Require'),
});
  
export const secondStepValidation = Yup.object({
    name: Yup.string().min(2).required('Required'),
    city: Yup.string().min(2).required('Required').matches(/^[a-zA-Z]+,?\s[a-zA-Z]+$/, `Enter data in the format "City, region"`),
    phone: Yup.string().required('Required').matches(/^\+380\d{9}$/, `Enter phone number in the format +380XXXXXXXXX`),
  });