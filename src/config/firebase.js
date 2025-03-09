// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUex_rNg7xctAzvj7TmsSkhqNesEJcrBg",
  authDomain: "proyecto-react-js-coderh-c94e0.firebaseapp.com",
  projectId: "proyecto-react-js-coderh-c94e0",
  storageBucket: "proyecto-react-js-coderh-c94e0.firebasestorage.app",
  messagingSenderId: "372127063883",
  appId: "1:372127063883:web:ecab6d68776ec7e3cb52ce",
  measurementId: "G-4M2QT0S5LC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);