import { createUserWithEmailAndPassword, signOut,signInWithPopup } from "firebase/auth";
import { auth,googleProvider } from "../Firebase/firebase";
import { useState } from "react";
import googleLogin from "./google.png";
import "../App.css"


export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(auth?.currentUser?.email);

  const signIn = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };
  const logOut = async () => {
    await signOut(auth);
  };
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  return (
    <div>
      <input
        placeholder="Email.."
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        placeholder="Password.."
        type="password"
        onChange={(e) => [setPassword(e.target.value)]}
      />
      <br></br>
      <button onClick={signIn}>Sign in</button>
      <button onClick={logOut}>Sign out</button>
      <br />
      <img src={googleLogin} style={{ width: 150, height: 40}} onClick={signInWithGoogle}/>"
    </div>
  );
};
