import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2IYjftlxWqG8tDQh8FFl1whUOBK3hFVk",
  authDomain: "coderreactjsblackandstore.firebaseapp.com",
  projectId: "coderreactjsblackandstore",
  storageBucket: "coderreactjsblackandstore.appspot.com",
  messagingSenderId: "507141756764",
  appId: "1:507141756764:web:325e0b3e17438aab0dd399",
};

// Initialize Firebase
// eslint-disable-next-line
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <App />
  //</React.StrictMode>
);
