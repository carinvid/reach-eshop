
import firebase from "./firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAaaJ4geaJLdm3vEJDVQdKakiiHMPUa35Y",
    authDomain: "eshop-e127d.firebaseapp.com",
    projectId: "eshop-e127d",
    storageBucket: "eshop-e127d.appspot.com",
    messagingSenderId: "496084156781",
    appId: "1:496084156781:web:85ab2f0100d162e8941a64",
    measurementId: "G-RDJL5MX95R"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
