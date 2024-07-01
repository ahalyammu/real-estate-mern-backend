// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c449d.firebaseapp.com",
  projectId: "mern-estate-c449d",
  storageBucket: "mern-estate-c449d.appspot.com",
  messagingSenderId: "237669263618",
  appId: "1:237669263618:web:c98c804427513d8b4afa1b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);