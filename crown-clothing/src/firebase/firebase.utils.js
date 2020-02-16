import firebase from 'firebase/app';
//We are importing whatever we require from firebase as it is huge and we are using whatever we want
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyCyIb-6JIv_x3gSjFGa23mAQ3ozB-Jjxh4",
        authDomain: "crown-db-d19a3.firebaseapp.com",
        databaseURL: "https://crown-db-d19a3.firebaseio.com",
        projectId: "crown-db-d19a3",
        storageBucket: "crown-db-d19a3.appspot.com",
        messagingSenderId: "264172996072",
        appId: "1:264172996072:web:eeb0e4fcaf126716ae505d",
        measurementId: "G-FNDDQ9M7K5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;