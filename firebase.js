// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF3171Tcb-0R-2YoZ_CR2yJWtxKaltrTQ",
  authDomain: "react-poke-app-db89f.firebaseapp.com",
  projectId: "react-poke-app-db89f",
  storageBucket: "react-poke-app-db89f.appspot.com",
  messagingSenderId: "968557554866",
  appId: "1:968557554866:web:96bfcad47e77ecbe4bedab",
  measurementId: "G-DVTXDV80WX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;