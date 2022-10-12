// import firebase from "firebase";
// import * as firebase from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDGRREoDTJSUkHYe8L1js6llMey59UVMY8",
    authDomain: "clone-99159.firebaseapp.com",
    projectId: "clone-99159",
    storageBucket: "clone-99159.appspot.com",
    messagingSenderId: "989746813126",
    appId: "1:989746813126:web:fc77621dcd158fc7665fc7",
    measurementId: "G-EWP41Z4YCR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth }