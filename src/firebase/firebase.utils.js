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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user ", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
