// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQnfLGzQZer51QJswq3szd42xldlI7ie0",
  authDomain: "usa-bookstore-6e9d8.firebaseapp.com",
  projectId: "usa-bookstore-6e9d8",
  storageBucket: "usa-bookstore-6e9d8.appspot.com",
  messagingSenderId: "11072636836",
  appId: "1:11072636836:web:388284017d80f9fd892331"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;