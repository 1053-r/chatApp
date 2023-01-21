import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDEf-B5445FCv36a5UoMCKE3LL7kOCfKF8",
  authDomain: "classchat-92a4d.firebaseapp.com",
  projectId: "classchat-92a4d",
  storageBucket: "classchat-92a4d.appspot.com",
  messagingSenderId: "770835429944",
  appId: "1:770835429944:web:e57c6808b145ddacc904cd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();