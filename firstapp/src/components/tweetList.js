import React, { useContext, useEffect } from 'react'
import Tweet from './Tweet';
import { TweetContext } from './TweetContext';
import { db } from '../Firebase/firebase';
import { getDocs, collection } from 'firebase/firestore';

const TweetList = () => {
    const getTweetsCollection = collection(db, "Post")
    useEffect(() => {
        const getTweets = async() =>{
            
        }
    })
    const [tweets, setTweet] = useContext([]);
    return (
        <div>
            {tweets?.map(tweet => (
                <Tweet title={tweet.title} content={tweet.content} likes={tweet.likes} key={tweet.id} />
            ))}
        </div>
    )
}

export default TweetList
