import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIvHWuoX9wzO2ok2uewyIl6QYaleuiV_I",
    authDomain: "auth-register-dca66.firebaseapp.com",
    projectId: "auth-register-dca66",
    storageBucket: "auth-register-dca66.appspot.com",
    messagingSenderId: "82988133754",
    appId: "1:82988133754:web:24635e1d054fc4e1cf7ac3"
  };
  // Initialize Firebase
  const init = firebase.initializeApp(firebaseConfig);
  export const firebaseAuthentication = init.auth();