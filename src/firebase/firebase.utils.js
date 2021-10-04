import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDvYw85mx2Q4gXZ0C282VV3wING-LDwwBI",
  authDomain: "clothing-store-db-21032.firebaseapp.com",
  projectId: "clothing-store-db-21032",
  storageBucket: "clothing-store-db-21032.appspot.com",
  messagingSenderId: "337724800968",
  appId: "1:337724800968:web:306f6b50baf719d8794afd",
  measurementId: "G-5D4NE6T63F"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
