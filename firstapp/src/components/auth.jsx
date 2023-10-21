import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../Firebase/firebase";
import { useState } from "react";
import googleLogin from "./google.png";
import "./style.css";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(auth?.currentUser?.email);

  const signIn = async () => { // sign up to server
    await createUserWithEmailAndPassword(auth, email, password);
  };
  const logOut = async () => { // log out off the firebase
    await signOut(auth);
  };
  const signInWithGoogle = async () => { // sign in with google
    await signInWithPopup(auth, googleProvider);
  };

  return (
    <div>
      <input
        className="auth-Email"
        placeholder="Email.."
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        className="auth-Password"
        placeholder="Password.."
        type="password"
        onChange={(e) => [setPassword(e.target.value)]}
      />
      <br></br>
      <button className="auth-sign-in-btn" onClick={signIn}>Sign in</button>
      <button className="auth-sign-out-btn" onClick={logOut}>Sign out</button>
      <br />
      <img
      className="auth-sign-in-img"
        src={googleLogin}
        style={{ width: 150, height: 40 }}
        onClick={signInWithGoogle}
      />
    </div>
  );
};

export default Auth;
