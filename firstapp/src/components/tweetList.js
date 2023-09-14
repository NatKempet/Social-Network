import React, { useState, useContext } from "react";
import Tweet from "./tweets";
import { TweetContext } from "./TweetContext";

const TweetList = () => {
  const [tweets, setTweet] = useContext(TweetContext);
  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet
          title={tweet.title}
          content={tweet.content}
          likes={tweet.likes}
          key={tweet.id}
        />
      ))}
    </div>
  );
};
export default TweetList;
