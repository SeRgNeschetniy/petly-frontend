import * as Yup from 'yup';

export const validationSchema = Yup.object({
  email: Yup.string()
    .matches(
      /^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}.){1,2}[-A-Za-z]{2,})$/u,
      'Invalid email format'
    )
    .required('Email is required'),
  password: Yup.string().required('Password is require!').min(7, 'Password too short!').max(32, 'Password too long!'),
});

export const firstStepValidation = Yup.object({
  email: Yup.string()
    .matches(
      /^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}.){1,2}[-A-Za-z]{2,})$/u,
      'Invalid email format'
    )
    .required('Email is required'),
  password: Yup.string().required('Password is require!').min(7, 'Password too short!').max(32, 'Password too long!'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Password must match!')
    .required('Require'),
});

export const secondStepValidation = Yup.object({
  name: Yup.string()
    .min(2, 'Name too short!')
    .matches(/^[а-яёіїєА-ЯЁІЇЄA-Za-z-\s]+$/, `Only Letters`)
    .required('Name is required!'),
  city: Yup.string()
    .min(2)
    .required('City is required!')
    .matches(
      /^[а-яёіїєА-ЯЁІЇЄA-Za-z]+,?\s[а-яёіїєА-ЯЁІЇЄA-Za-z]+$/,
      `Enter data in the format "City, region"`
    ),
  phone: Yup.string()
    .required('Phone is required')
    .matches(/^\+380\d{9}$/, `Enter phone number in the format +380XXXXXXXXX`),
});
