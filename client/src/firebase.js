// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "blog-website-c2dad.firebaseapp.com",
  projectId: "blog-website-c2dad",
  storageBucket: "blog-website-c2dad.appspot.com",
  messagingSenderId: "941600711510",
  appId: "1:941600711510:web:3218c09223fd468f8bacf7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
