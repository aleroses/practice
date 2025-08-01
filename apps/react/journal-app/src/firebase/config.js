import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClS8Dtp-O686mpBJW6-4EwgwASeKqFLMw",
  authDomain: "journalapp-72f2d.firebaseapp.com",
  projectId: "journalapp-72f2d",
  storageBucket: "journalapp-72f2d.firebasestorage.app",
  messagingSenderId: "339972861287",
  appId: "1:339972861287:web:4ac56da1de5f56a6bc53c2",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
