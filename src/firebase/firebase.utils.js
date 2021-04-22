import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyApfFQxiacvcVFKrOyhuYMF70W__LBeeP0",
    authDomain: "crwn-clothing-1eb59.firebaseapp.com",
    projectId: "crwn-clothing-1eb59",
    storageBucket: "crwn-clothing-1eb59.appspot.com",
    messagingSenderId: "796961072965",
    appId: "1:796961072965:web:789af8b62f2470c781c02c",
    measurementId: "G-7748ZTFJZJ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
   if(!userAuth) return;
   const userRef = firestore.doc(`users/${userAuth.uid}`);
   const snapShot = await userRef.get();
   
   if(!snapShot.exists) {
       const { displayName, email } = userAuth;
       const createdAt = new Date();

       try {
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        });
       } catch (error) {
         console.log('error creating user', error.message);
       }
   }
   return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;