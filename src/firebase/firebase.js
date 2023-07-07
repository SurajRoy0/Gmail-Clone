import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDlzqRnpfWmrKqrk2gtn5GWJMcwXeYM1Q0",
    authDomain: "clone-748fd.firebaseapp.com",
    projectId: "clone-748fd",
    storageBucket: "clone-748fd.appspot.com",
    messagingSenderId: "894496146295",
    appId: "1:894496146295:web:28f52a0468d64c690a5772"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const authentication = firebase.auth();
const authProvider = new firebase.auth.GoogleAuthProvider();

export { db, authentication, authProvider };