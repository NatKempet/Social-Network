import React, { useContext, useEffect, useState } from "react";
import Tweet from "./Tweet";
import { TweetContext } from "./TweetContext";
import { db } from "../Firebase/firebase";
import { getDocs, collection } from "firebase/firestore";

const TweetList = () => {
  const [tweets, setTweet] = useContext(TweetContext);
  const getTweetsCollection = collection(db, "Post");
  const [post, setPost] = useState([]);
  useEffect(() => {
    const getTweets = async () => {
      const data = await getDocs(getTweetsCollection);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPost(filteredData);
      console.log(post);
    };
    getTweets();
  });
  return (
    <div>
      {tweets?.map((tweet) => (
        <Tweet
          title={post.title}
          content={post.description}
          likes={post.like}
          key={tweet.id}
        />
      ))}
    </div>
  );
};

export default TweetList;
