// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, browserLocalPersistence } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq36lavDbwIKILjHM1-2hLfhvwonmrIzg",
  authDomain: "linkedin-react-93d32.firebaseapp.com",
  projectId: "linkedin-react-93d32",
  storageBucket: "linkedin-react-93d32.appspot.com",
  messagingSenderId: "894434390134",
  appId: "1:894434390134:web:181d1f86dae69a7e25ef57",
  measurementId: "G-Q2NYSGEPTS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = initializeAuth(app, {
  persistence: browserLocalPersistence
});