import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth,GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCsarY_ixkr4ISfh0Lg4K0987ge6UBaLOQ",
  authDomain: "web-social-network-a6d5d.firebaseapp.com",
  databaseURL: "https://web-social-network-a6d5d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "web-social-network-a6d5d",
  storageBucket: "web-social-network-a6d5d.appspot.com",
  messagingSenderId: "1043304872400",
  appId: "1:1043304872400:web:417dea19894c6dfce461d5",
  measurementId: "G-5JHM4TV6F5"
};

// Sorry Nat I replace this with Prof's code
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
export const googleProvider = new GoogleAuthProvider()
