import React, { useState, useEffect } from 'react';
import { Opt, OptInput, Message, Cta, Label } from './styledComps/styles';
import client from './firebase';
import * as yup from 'yup';
// import validateChange from './functions/validateChange';
// import { clientSchema } from './functions/clientSchema';
const clientSchema = yup.object().shape({
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
export default function OptForm(props) {
  // To disable button when form isn't complete
  const [buttonDis, setButtonDis] = useState(true);

  // To control the post:
  const [post, setPost] = useState([]);

  // To retrieve user information
  const [clientInfo, setClientInfo] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Error Management
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // useEffect for button disabling/enabling:
  useEffect(() => {
    // Use Schema here to check for validation if valid button is enabled otherwise it's disabeled:
    clientSchema.isValid(clientInfo).then(valid => {
      setButtonDis(!valid);
    });
  }, [clientInfo]);

  //Handle Form Submition:
  const formSubmit = e => {
    e.preventDefault();
    // console.log(
    //   `Name: ${clientInfo.name}, E-mail: ${clientInfo.email}, Phone: ${clientInfo.phone}, Message: ${clientInfo.message}`
    // );
    const name = clientInfo.name;
    const email = clientInfo.email;
    const phone = clientInfo.phone;
    const message = clientInfo.message;
    client(name, email, phone, message);
  };

  // Validate the Changes:
  function validateChange(e) {
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

  //Changing of the Inputs:
  const inputChange = e => {
    e.persist();
    const newClientData = {
      ...clientInfo,
      [e.target.name]: e.target.value
    };
    validateChange(e);
    setClientInfo(newClientData);
  };

  // UI of App
  return (
    <Opt onSubmit={formSubmit}>
      <Label htmlFor='name'>
        <OptInput
          name='name'
          id='name'
          placeholder='First & Last Name:'
          onChange={inputChange}
        />
        {errors.name.length > 0 ? console.log(errors.name) : null}
      </Label>
      <Label htmlFor='email'>
        <OptInput
          name='email'
          id='email'
          placeholder='E-Mail: '
          onChange={inputChange}
        />
      </Label>
      <Label htmlFor='phone'>
        <OptInput
          name='phone'
          id='phone'
          placeholder='Phone#:'
          onChange={inputChange}
        />
      </Label>
      <Label htmlFor='message'>
        <Message
          id='message'
          name='message'
          placeholder='Message:'
          type='textarea'
          onChange={inputChange}
        />
      </Label>
      <Cta type='submit' disabled={buttonDis}>
        Submit
      </Cta>
    </Opt>
  );
}
