// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmKYrtqBuQl0SQPlnmIQDyHKZ39iZfKXw",
  authDomain: "netflix-gpt-d1451.firebaseapp.com",
  projectId: "netflix-gpt-d1451",
  storageBucket: "netflix-gpt-d1451.appspot.com",
  messagingSenderId: "134475082885",
  appId: "1:134475082885:web:0528a1f2e63f22eae50dec",
  measurementId: "G-ZK3SMQZCMP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
