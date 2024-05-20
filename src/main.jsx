import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkovrElSjlTIUJiRN1rE9FXbfRDnAs4TQ",
  authDomain: "react-coder-46eb7.firebaseapp.com",
  projectId: "react-coder-46eb7",
  storageBucket: "react-coder-46eb7.appspot.com",
  messagingSenderId: "932301053927",
  appId: "1:932301053927:web:cc260a9c81e75adf3d6742"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Exporta la instancia de Firestore

export { db };
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
