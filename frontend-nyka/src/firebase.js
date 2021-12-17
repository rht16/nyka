// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBSojt-iCL1oAJYmJ0p6r2oWczUPvAZKv4",
  authDomain: "nykaa-d2ffc.firebaseapp.com",
  projectId: "nykaa-d2ffc",
  storageBucket: "nykaa-d2ffc.appspot.com",
  messagingSenderId: "442676514107",
  appId: "1:442676514107:web:5791b77ff4f11ebf08bb1e",
  measurementId: "G-B3M93ZT9HF"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;