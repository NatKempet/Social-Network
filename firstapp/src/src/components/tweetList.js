import React, { useContext, useEffect, useState } from "react";
import Tweet from "./Tweet";
import { TweetContext } from "./TweetContext";
import { db } from "../Firebase/firebase";
import { getDocs, collection, addDoc,deleteDoc,doc,updateDoc } from "firebase/firestore";
import { auth } from "../Firebase/firebase";
import "./style.css";

const TweetList = () => {
  const getTweetsCollection = collection(db, "Post");
  const [post, setPost] = useState([]);
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [likes, setLikes] = useState(0);
  const [user, setUser] = useState("");
  const getTweets = async () => {
    const data = await getDocs(getTweetsCollection);
    const filteredData = data.docs.map((doc) => ({ // filter the data from firebase
      ...doc.data(),
      id: doc.id,
    }));
    setPost(filteredData);
  };
  const addTweets = async () => { //add the tweets 
    await addDoc(getTweetsCollection, {
      Title: title,
      Description: description,
      Like: likes,
      email: auth?.currentUser?.email,
    });
    getTweets(); // get the tweets and update it
  };

  const remove = async(id) => {
    const eventDoc = doc(db, "Post", id);
    await deleteDoc(eventDoc);
  }
  const updateLikes = async(id,lol,currentUser) => {
    const likesId = doc(db, "Post", id);
    if(currentUser == user){
      return null;
    }else{
      setUser(currentUser);
      updateDoc(likesId, {
        Like: lol + 1
    })
    }
 
  }
  useEffect(() => {
    getTweets();
  })
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
        
          <div className="winTweet">
            <div className="" style={{ color: "white" }}>tweet:{tweet.email}</div>
            <div className="" style={{ color: "white" }}>title:{tweet.Title}</div>
            <div className="" style={{ color: "white" }}>Likes:{tweet.Like}</div>
            <button onClick={() => remove(tweet.id)}>Delete</button>
            <button onClick={() => {
              const currentLikes = tweet.Like;
              updateLikes(tweet.id, currentLikes,tweet.email);
            }}>Like</button>
          </div>
          
        
      ))}
    </div>
  );
};

export default TweetList;
