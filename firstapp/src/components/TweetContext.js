import React, { useState, createContext } from "react";
export const tweetContext = createContext();
export const TweetProvider = (props) => {
  const [tweets, setTweet] = useState([
    { title: "Hello", content: "React!", likes: 2, id: 0 },
    { title: "2nd Tweet", content: "What a world!", likes: 6, id: 1 },
  ]);
  return (
    <tweetContext.Provider value={[tweets, setTweet]}>
      {props.children}
    </tweetContext.Provider>
  );
};