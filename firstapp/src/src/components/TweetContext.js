import React, { useState, createContext, useEffect } from 'react'
export const TweetContext = createContext();
export const TweetProvider = (props) => {
    const [tweets, setTweet] = useState(JSON.parse(localStorage.getItem('tweets')) || []);
    useEffect(() => {console.log(tweets)},[tweets]);
    return (
        <TweetContext.Provider value={[tweets, setTweet]}>
            {props.children}
        </TweetContext.Provider>
    )
}

export default TweetContext