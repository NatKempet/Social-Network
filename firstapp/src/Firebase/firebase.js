import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth,GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA4dyyvIaDe54yQ9vqcwDtu4aBJtMTuk3o",
  authDomain: "web-social-network-7bcaf.firebaseapp.com",
  projectId: "web-social-network-7bcaf",
  storageBucket: "web-social-network-7bcaf.appspot.com",
  messagingSenderId: "946238496342",
  appId: "1:946238496342:web:2261f2724276fe9a7d25f7",
  measurementId: "G-66LFBDXFJ8"
};

// Sorry Nat I replace this with Prof's code
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
export const googleProvider = new GoogleAuthProvider({
  prompt: 'select_account',
});
