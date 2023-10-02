import React, { useContext, useEffect, useState } from "react";
import Tweet from "./Tweet";
import { TweetContext } from "./TweetContext";
import { db } from "../Firebase/firebase";
import { getDocs, collection,addDoc } from "firebase/firestore";

const TweetList = () => {
  const getTweetsCollection = collection(db, "Post");
  const [post, setPost] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [likes, setLikes] = useState(0);
  const getTweets = async () => {
    const data = await getDocs(getTweetsCollection);
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setPost(filteredData);
    console.log(post);
  };
  useEffect(() => {
    getTweets();
  });
  const addTweets = async() => {
    await addDoc(getTweetsCollection,{Title:title,Description:description,Like:likes} );
    getTweets();
  }
  return (
    <div>
      <input type="text" placeholder="Title" onChange={(e) => {setTitle(e.target.value)}}></input>
      <input type="text" placeholder="Description" onChange={(e) => {setDescription(e.target.value)}}></input>
      <button onClick={addTweets}>Submit Post</button>
      {post.map((tweet) => (
        <div>
        <div style={{color: "white"}}>title:{tweet.Title}</div>
        <div style={{color: "white"}}>description:{tweet.Description}</div>
        <div style={{color: "white"}}>Likes:{tweet.Like}</div>
        </div>
      ))}
    </div>
  );
};

export default TweetList;