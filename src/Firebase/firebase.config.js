// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// ==============================================
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDHHiKF6T-vjcG3w0yVGpznkvZJP-CGBp4",
//   authDomain: "art-and-craft-b9a10.firebaseapp.com",
//   projectId: "art-and-craft-b9a10",
//   storageBucket: "art-and-craft-b9a10.appspot.com",
//   messagingSenderId: "686391774382",
//   appId: "1:686391774382:web:122c0cb544969d5fe9f13f"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);