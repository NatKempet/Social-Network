import React, { useContext } from 'react'
import Tweet from './Tweet';
import { TweetContext } from './TweetContext';
import { db } from '../Firebase/firebase'

const TweetList = () => {
    const [tweets, setTweet] = useContext(TweetContext);
    return (
        <div>
            {tweets?.map(tweet => (
                <Tweet title={tweet.title} content={tweet.content} likes={tweet.likes} key={tweet.id} />
            ))}
        </div>
    )
}

export default TweetList

import React, { useContext } from 'react'
import Tweet from './Tweet';
import { TweetContext } from './TweetContext';

const TweetList = () => {
    const [tweets, setTweet] = useContext(TweetContext);
    return (
        <div>
            {tweets?.map(tweet => (
                <Tweet title={tweet.title} content={tweet.content} likes={tweet.likes} key={tweet.id} />
            ))}
        </div>
    )
}

export default TweetList
