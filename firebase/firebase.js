import { initializeApp } from "firebase/app"
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendEmailVerification
} from "firebase/auth"
import {
    getDatabase,
    ref as firebaseref,
    set as firebaseset,
    child,
    get,
    onValue
} from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyBX4ot7h1mFtvP9Q01-ZZQtaUTW4ckboPE",
    authDomain: "chatapp-1ec20.firebaseapp.com",
    databaseURL: "https://chatapp-1ec20-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chatapp-1ec20",
    storageBucket: "chatapp-1ec20.appspot.com",
    appId: "1:718203491708:android:3b38399bd9f9e11cd800f9",
    messagingSenderId: "718203491708",
}
const app = initializeApp(firebaseConfig)
const auth = getAuth()
const firebaseDatabase = getDatabase()
export {
    auth,
    firebaseDatabase,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    firebaseref,
    firebaseset,
    sendEmailVerification,
    get,
    child,
    onValue
}