import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./Firebase/firebase";
import { useState } from "react";

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
    </div>
  );
};
