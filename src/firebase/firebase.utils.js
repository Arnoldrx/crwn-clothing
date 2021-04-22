import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDDoDCGbBvtHWGPsnkw5vC1sOzovN14UrA",
    authDomain: "crwn-clothing-f44df.firebaseapp.com",
    databaseURL: "https://crwn-clothing-f44df-default-rtdb.firebaseio.com",
    projectId: "crwn-clothing-f44df",
    storageBucket: "crwn-clothing-f44df.appspot.com",
    messagingSenderId: "301217739405",
    appId: "1:301217739405:web:6e5a4796b6378cdb65e8c4",
    measurementId: "G-M4G3SWLR1J"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;