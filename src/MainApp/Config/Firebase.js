import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDIv44iCNAda6HatOiPqLrcb1H8Ozk3NGs",
    authDomain: "ongeya.firebaseapp.com",
    databaseURL: "https://ongeya.firebaseio.com",
    projectId: "ongeya",
    storageBucket: "ongeya.appspot.com",
    messagingSenderId: "123474779766",
    appId: "1:123474779766:web:9edd66e55b232db2040957",
    measurementId: "G-FLX0D0FWRD"
  }; 

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase