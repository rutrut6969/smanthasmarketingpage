import * as yup from 'yup';
export const clientSchema = yup.object().shape({
  name: yup.string().required('Please enter a Name!'),
  email: yup
    .string()
    .email("Please make sure you're using avalid email address!")
    .required('Email cannot be empty!'),
  phone: yup
    .string()
    .required(
      'We need your number for additional contact information Thank you!'
    ),
  message: yup
    .string()
    .required(
      'This field is for any additional information about what you need done!'
    )
});
