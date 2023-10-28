import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth,GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB7SC1m0W_7As4GXJPBukf_MUuZGT731jw",
  authDomain: "social-media-11c1d.firebaseapp.com",
  projectId: "social-media-11c1d",
  storageBucket: "social-media-11c1d.appspot.com",
  messagingSenderId: "183621205797",
  appId: "1:183621205797:web:97dcf76d1242521ae624cc",
  measurementId: "G-Y190G34MG9"
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
export const googleProvider = new GoogleAuthProvider({
  prompt: 'select_account',
});
