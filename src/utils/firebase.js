// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyZC4SVbkgqxy3qFP16QvIgQWJkELXVm8",
  authDomain: "realestate-63063.firebaseapp.com",
  projectId: "realestate-63063",
  storageBucket: "realestate-63063.appspot.com",
  messagingSenderId: "958300695737",
  appId: "1:958300695737:web:159be62f3b173551f4bf68",
  measurementId: "G-81WL0M42FM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
