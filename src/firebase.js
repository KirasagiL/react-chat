import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIGry-ZQmD8HI0Q3cYJpgf7kYfqELwJoE",
  authDomain: "chatapp-ab90f.firebaseapp.com",
  projectId: "chatapp-ab90f",
  storageBucket: "chatapp-ab90f.appspot.com",
  messagingSenderId: "1072117210243",
  appId: "1:1072117210243:web:79481d232aaed075888fb6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
