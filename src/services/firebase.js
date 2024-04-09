// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCZ4McjW-6vwugLAvZRbPhs30IsgX9Zkk",
  authDomain: "sweet-magic-a4a41.firebaseapp.com",
  projectId: "sweet-magic-a4a41",
  storageBucket: "sweet-magic-a4a41.appspot.com",
  messagingSenderId: "933136776149",
  appId: "1:933136776149:web:cf9b367984a0fa5ef09b5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)