import * as Yup from 'yup';

export const validationSchema = Yup.object({
  email: Yup.string()
    .matches(
      /^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}.){1,2}[-A-Za-z]{2,})$/u,
      'Invalid email format'
    )
    .required('Required'),
  password: Yup.string().required('Require').min(7),
});

export const firstStepValidation = Yup.object({
  email: Yup.string()
    .matches(
      /^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}.){1,2}[-A-Za-z]{2,})$/u,
      'Invalid email format'
    )
    .required('Required'),
  password: Yup.string().required('Require').min(7),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Password must match')
    .required('Require'),
});

export const secondStepValidation = Yup.object({
  name: Yup.string().min(2).required('Required'),
  city: Yup.string()
    .min(2)
    .required('Required')
    .matches(
      /^[а-яА-ЯёЁіІїЇєЄ]+,?\s[a-zA-Z]+$/,
      `Enter data in the format "City, region"`
    ),
  phone: Yup.string()
    .required('Required')
    .matches(/^\+380\d{9}$/, `Enter phone number in the format +380XXXXXXXXX`),
});
