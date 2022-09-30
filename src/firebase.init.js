// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDc2VSjeJBBL592ksDZ5daPYZEZ3w74VX4",
    authDomain: "labbaik-sir.firebaseapp.com",
    projectId: "labbaik-sir",
    storageBucket: "labbaik-sir.appspot.com",
    messagingSenderId: "768347300876",
    appId: "1:768347300876:web:5fa96c3a414ca60d0cba29",
    measurementId: "G-31Y5YE7L6Z"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;