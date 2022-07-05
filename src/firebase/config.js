// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWEtRWRyBu7uXAWmTPfQMp5RrDtxjQTBM",
  authDomain: "code-shop-160d3.firebaseapp.com",
  projectId: "code-shop-160d3",
  storageBucket: "code-shop-160d3.appspot.com",
  messagingSenderId: "418494958098",
  appId: "1:418494958098:web:ec02b1d9ada7fd7efee6cb",
  measurementId: "G-D2ZXCJSWX2"
};

// Initialize Firebase
initializeApp(firebaseConfig);
getAnalytics();
