
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKliPd8-oh86Jw2qyIMcxNCkELIzYk2eo",
  authDomain: "ecommerce-made-by-waleed.firebaseapp.com",
  projectId: "ecommerce-made-by-waleed",
  storageBucket: "ecommerce-made-by-waleed.appspot.com",
  messagingSenderId: "360742740473",
  appId: "1:360742740473:web:faa5a1512ca5f4ebfe1d28",
  measurementId: "G-QEXEYM2QHN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {app,auth,db}
