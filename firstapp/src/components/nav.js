import React, { useContext } from 'react'
import { TweetContext } from './TweetContext';

const Nav = () => {
    const [tweets, setTweets] = useContext(TweetContext);
    return (
        <div>
            <h3>Profile: Ken</h3>
            <p>Number of Tweets: {tweets.length}</p>
        </div>
    )
}

export default Nav

