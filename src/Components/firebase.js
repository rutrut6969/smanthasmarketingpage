import firebase from 'firebase';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: 'https://sammie-lee-s-marketing.firebaseio.com',
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

firebase.initializeApp(config);
function client(name, email, phone, message) {
  const clientRef = firebase.database().ref('clients');
  const newClientRef = clientRef.push();

  newClientRef.set({
    name: name,
    email: email,
    phone: phone,
    message: message
  });
}

export default client;
