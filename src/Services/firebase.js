import firebase from "firebase";

/*
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIvHWuoX9wzO2ok2uewyIl6QYaleuiV_I",
  authDomain: "auth-register-dca66.firebaseapp.com",
  projectId: "auth-register-dca66",
  storageBucket: "auth-register-dca66.appspot.com",
  messagingSenderId: "82988133754",
  appId: "1:82988133754:web:24635e1d054fc4e1cf7ac3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// export const firebaseAuthentication = init.auth();

*/
const firebaseConfig = {
  apiKey: "AIzaSyAbObs8Ums5IR9T60qmBg5XPJyjJg_egWs",
  authDomain: "challenge-chapter-9.firebaseapp.com",
  databaseURL:
    "https://challenge-chapter-9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "challenge-chapter-9",
  storageBucket: "gs://challenge-chapter-9.appspot.com",
  messagingSenderId: "181962930568",
  appId: "1:555192045235:web:64de2ab27e37402ef86ac6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
