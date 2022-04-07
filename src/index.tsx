import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './comp/routes/Routes';
import './App.css'
import * as firebase from 'firebase/app'
import { AuthProvider } from './comp/providers/AuthProvider';

firebase.initializeApp({
  apiKey: "AIzaSyDndNmyi8mmTf79_ts8dr2qnDPH-j4EDLs",
  authDomain: "social-a5297.firebaseapp.com",
  projectId: "social-a5297",
  storageBucket: "social-a5297.appspot.com",
  messagingSenderId: "596029691197",
  appId: "1:596029691197:web:422dd0c2617a7fc8e42154"
})


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Routes/>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


