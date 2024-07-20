// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5XkJDZxQ7Bdb5Nd4jz7Pxq9Ben8j4JAs",
  authDomain: "netflix-688e9.firebaseapp.com",
  projectId: "netflix-688e9",
  storageBucket: "netflix-688e9.appspot.com",
  messagingSenderId: "293873843127",
  appId: "1:293873843127:web:a897e322af100dde404632",
  measurementId: "G-13QYV16L7J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
