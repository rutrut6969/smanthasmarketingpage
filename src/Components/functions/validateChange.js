import * as yup from 'yup';
import { clientSchema } from './clientSchema';

export default function validateChange(e) {
  yup
    .reach(clientSchema, e.target.name)
    .validate(e.target.name === e.target.value)
    .then(valid => {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    })
    .catch(err => {
      setErrors({
        ...errors,
        [e.target.name]: err.errors[0]
      });
    });
}
