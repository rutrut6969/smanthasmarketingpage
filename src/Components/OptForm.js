import React, { useState, useEffect } from 'react';
import { Opt, OptInput, Message, Cta } from './styledComps/styles';
import firebase from './firebase';

export default function OptForm(props) {
  const [clients, setClients] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const addClient = e => {
    setClients({
      ...clients,
      [e.target.name]: e.target.value
    });
  };
  const submitted = e => {
    e.preventDefault();
    alert('Information has been sent! Thank you!');
  };
  const createClient = () => {
    const db = firebase.firestore();
    db.collection('clients').add({ clients });
  };

  return (
    <Opt
      onSubmit={e => {
        submitted(e);
      }}
    >
      <OptInput
        name='name'
        onChange={e => addClient(e)}
        placeholder='First & Last Name:'
        required
      />
      <OptInput
        name='email'
        onChange={e => addClient(e)}
        placeholder='E-Mail: '
        required
      />
      <OptInput
        name='phone'
        onChange={e => addClient(e)}
        placeholder='Phone#:'
        required
      />
      <Message
        name='message'
        onChange={e => addClient(e)}
        placeholder='Message:'
        type='textarea'
        required
      />
      <Cta type='submit' onClick={createClient}>
        Submit
      </Cta>
    </Opt>
  );
}
