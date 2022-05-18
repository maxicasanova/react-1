import React from 'react';
import ReactDOM from 'react-dom';
import { initializeApp } from "firebase/app";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyA-UAl6zRXMG_KGIxV2LE5zpK5C9mqYnRI",
  authDomain: "proyectoreactmax.firebaseapp.com",
  projectId: "proyectoreactmax",
  storageBucket: "proyectoreactmax.appspot.com",
  messagingSenderId: "554410652350",
  appId: "1:554410652350:web:20e45cc40a074bd92ba4ef"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
