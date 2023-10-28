import React,{useContext} from "react";
import { TweetContext } from "./TweetContext";
import "./style.css";

const DeleteButton = () => {
  const [tweets, setTweet] = useContext(TweetContext);
  return (
    <button 
      className="btn post"
      onClick={() => {
        setTweet([]);
        localStorage.removeItem("tweets");
      }}
    >
      Reset Databases
    </button>
  );
};

export default DeleteButton;
