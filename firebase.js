// Optionally import the services that you want to use
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBwxkjWUdbcaYpU_HrgzEnBeclWF3Vurow',
  authDomain: 'dranks-dranks.firebaseapp.com',
  databaseURL: 'https://dranks-dranks..nam5.firebasedatabase.app',
  projectId: 'dranks-dranks',
  storageBucket: 'dranks-dranks.appspot.com',
  messagingSenderId: 'sender-id',
  appId: '1:572583734311:ios:a2be16bf8d5890f342320',
  measurementId: 'G-measurement-id',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export { firebase };
