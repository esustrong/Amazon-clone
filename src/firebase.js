// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD037AgjaGnj98r1-bdyp5a4HrRuzuUB3g",
  authDomain: "clone-b103c.firebaseapp.com",
  projectId: "clone-b103c",
  storageBucket: "clone-b103c.appspot.com",
  messagingSenderId: "1004651554056",
  appId: "1:1004651554056:web:2bd66178e5ce5f177178bd",
  measurementId: "G-YT3R3ZREB6"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();

// The latest update for auth with db
 const auth = firebase.auth();
export default auth;