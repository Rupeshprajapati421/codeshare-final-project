import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6talore1H7p1HlPaGo6y2ONGqE_N29tc",
  authDomain: "signin-3bb4b.firebaseapp.com",
  projectId: "signin-3bb4b",
  storageBucket: "signin-3bb4b.firebasestorage.app",
  messagingSenderId: "1075362711228",
  appId: "1:1075362711228:web:50664b904190c147e0f2b9",
  measurementId: "G-SPB50HFQKL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);