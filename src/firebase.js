import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyC85LRHRiBaNLpFNgLRHi2upxiAdvJYjQI",
    authDomain: "ecommerce-coder-react.firebaseapp.com",
    projectId: "ecommerce-coder-react",
    storageBucket: "ecommerce-coder-react.appspot.com",
    messagingSenderId: "97397857798",
    appId: "1:97397857798:web:b83108d8d97bd955fa2d87"
});

export const getFirebase = () => {

}

export const getFirestore = () => {
    return firebase.firestore(app)
}