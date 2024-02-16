// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq5yqNni4fRwSOtyZGh6v3HjEkjKmqks8",
  authDomain: "realtor-clone-project-45cf8.firebaseapp.com",
  projectId: "realtor-clone-project-45cf8",
  storageBucket: "realtor-clone-project-45cf8.appspot.com",
  messagingSenderId: "1039248936529",
  appId: "1:1039248936529:web:4c020271a17426d18e7270"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()