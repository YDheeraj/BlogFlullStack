// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "blog-b29d4.firebaseapp.com",
  projectId: "blog-b29d4",
  storageBucket: "blog-b29d4.appspot.com",
  messagingSenderId: "595661741712",
  appId: "1:595661741712:web:86fe246e986e914e26c215",
  measurementId: "G-18K5BH7E6Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);