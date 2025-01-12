// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs4ni_a6yPJvTg8u1xKeh16QgEJHDkltA",
  authDomain: "worldofballon-2dc37.firebaseapp.com",
  projectId: "worldofballon-2dc37",
  storageBucket: "worldofballon-2dc37.firebasestorage.app",
  messagingSenderId: "220593436803",
  appId: "1:220593436803:web:1da225d9db664ee2b443b6",
  measurementId: "G-LRTYFE6ZLY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)