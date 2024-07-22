// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS81iKcuySzmO0_ozGzXGmGnHvZdavZbE",
  authDomain: "equinox-af001.firebaseapp.com",
  projectId: "equinox-af001",
  storageBucket: "equinox-af001.appspot.com",
  messagingSenderId: "887443593880",
  appId: "1:887443593880:web:3723303af9748d0522ceed",
  measurementId: "G-DJYNBYVP2T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db=getFirestore(app);
// const analytics = getAnalytics(app);
export  {auth,db};