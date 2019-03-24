import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage'
import 'firebase/firestore'
const config = {
    apiKey: "AIzaSyCw32g6WdOwTFSGt7c3FYF2HutwYkAgp8k",
    authDomain: "inoichi-97330.firebaseapp.com",
    databaseURL: "https://inoichi-97330.firebaseio.com",
    projectId: "inoichi-97330",
    storageBucket: "inoichi-97330.appspot.com",
    messagingSenderId: "851575516206"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export default firebase;