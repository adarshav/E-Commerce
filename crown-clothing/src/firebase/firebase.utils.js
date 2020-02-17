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

export const userProfileDocument = async(userAuth, additionalData) =>{
    // if userAuth is false or doesnt exist it returns from the function
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log(snapShot);

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
             displayName,
             email,
             createdAt,
             ...additionalData   
            })
        } catch(error) {
            console.log(error.message, 'error message while creating user');
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;