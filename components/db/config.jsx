// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyCixFa1gz1ZNAXQ0Ioe7Vu5lLp6KwUIqDg",
  authDomain: "facebookclone-f6467.firebaseapp.com",
  projectId: "facebookclone-f6467",
  storageBucket: "facebookclone-f6467.firebasestorage.app",
  messagingSenderId: "44581350680",
  appId: "1:44581350680:web:342620618941579354826d",
  measurementId: "G-F6TS6XVC12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);