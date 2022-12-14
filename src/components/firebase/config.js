// import firebase from "firebase";
// import "firebase/app";
// import 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCk_f7yuxivZMVFaezBb11C68rDWgxxouQ",
    authDomain: "texnomart-fefb8.firebaseapp.com",
    projectId: "texnomart-fefb8",
    storageBucket: "texnomart-fefb8.appspot.com",
    messagingSenderId: "185556551852",
    appId: "1:185556551852:web:af80ebd0006a971abb3709",
    measurementId: "G-9Z5YV7ELV1"
  };


const backend = firebase.initializeApp(firebaseConfig);
const auth = backend.auth();

export { auth,  backend }