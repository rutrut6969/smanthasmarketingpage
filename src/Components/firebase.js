import firebase from 'firebase';
import axios from 'axios';
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
function client(id, name, email, phone, message) {
  const clientRef = firebase.database().ref('clients');
  const newClientRef = clientRef.push();

  newClientRef.set({
    id: id,
    name: name,
    email: email,
    phone: phone,
    message: message
  });
}
// export const clientGet = firebase.database()
export default client;
