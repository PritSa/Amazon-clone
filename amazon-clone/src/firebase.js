import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAMDpXfa1dGP3QLVTGpH9-q3Magq9dyPBQ",
  authDomain: "challenge-56a63.firebaseapp.com",
  projectId: "challenge-56a63",
  storageBucket: "challenge-56a63.appspot.com",
  messagingSenderId: "767606400995",
  appId: "1:767606400995:web:dff93742ade6135338a2d6",
  measurementId: "G-W202CV63XW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };