import * as Yup from 'yup';

export const formOneValidationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name Too Short!')
    .max(16, 'Name Too Long!')
    .label('Name')
    .required('Name is required')
    .matches(/^[а-яёіїєА-ЯЁІЇЄA-Za-z\s]+?$/iu, 'Only letters'),
  dateOfBirth: Yup.string()
    .matches(
      /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
      'Correct format: dd.mm.yyyy'
    )
    .test(
      'is-date-valid',
      () => `Future date not allowed`,
      value => {
        if (value) {
          let date = value.split('.');
          const corectFormat = new Date(`${date[2]}/${date[1]}/${date[0]}`);
          return corectFormat.getTime() < Date.now();
        }
        return true;
      }
    )
    .label('Date of birth')
    .required('Date of birth is required'),
  breed: Yup.string()
    .min(2, 'Breed Too Short!')
    .max(32, 'Breed Too Long!')
    .label('Breed')
    .required('Breed is required'),
});

export const formTwoValidationSchema = Yup.object({
  comments: Yup.string()
    .min(8, 'Comments Too Short!')
    .max(120, 'Comments Too Long!')
    .label('Comment')
    .required('Comment is required'),
  petImage: Yup.mixed().label('Pet image').required('Pet photo is required'),
});
