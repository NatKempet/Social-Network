import React, { useContext, useEffect, useState } from "react";
import Tweet from "./Tweet";
import { TweetContext } from "./TweetContext";
import { db } from "../Firebase/firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { auth } from "../Firebase/firebase";
import "./style.css";

const TweetList = () => {
  const getTweetsCollection = collection(db, "Post");
  const [post, setPost] = useState([]);
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [likes, setLikes] = useState(0);
  const getTweets = async () => {
    const data = await getDocs(getTweetsCollection);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setPost(filteredData);
  };
  const addTweets = async () => {
    await addDoc(getTweetsCollection, {
      Title: title,
      Description: description,
      Like: likes,
      email: auth?.currentUser?.email,
    });
    getTweets();
  };
  return (
    <div className="tweetList-posting">
      <input
        className="tweetList-Title"
        type="text"
        placeholder="Title...."
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <button
        className="tweetList-btn"
        onClick={() => {
          if (auth?.currentUser?.email === undefined) {
            alert("you are not logged in please try again");
          } else {
            addTweets();
          }
        }}
      >
        <h13 className="Post-Post">Post</h13>
      </button>
      {post.map((tweet) => (
        
          <div className="tweet-message">
            <h1 className="EMAIL" style={{ color: "white" }}>tweet:{tweet.email}</h1>
            <h1 className="TITLE" style={{ color: "white" }}>title:{tweet.Title}</h1>
            <h1 className="LIKE" style={{ color: "white" }}>Likes:{tweet.Like}</h1>
          </div>
          
        
      ))}
    </div>
  );
};

export default TweetList;
