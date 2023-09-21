import React, { useState, useContext,useEffect } from 'react'
import { TweetContext } from './TweetContext';

const AddTweet = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tweets, setTweet] = useContext(TweetContext);

    const updateTitle = (e) => {
        setTitle(e.target.value);
    }
    const updateContent = (e) => {
        setContent(e.target.value);
    }
    const addTweet = (e) => {
        e.preventDefault();
        setTweet((prev) => [...prev, { title: title, content: content, likes: 0, id: tweets.length }]);
        const new_tweets = tweets.map(tweet=>tweet); // create the copy of tweets content []
        const allTweets = new_tweets;
        allTweets.push({ title: title, content: content, likes: 0, id: tweets.length });

        localStorage.setItem('tweets', JSON.stringify(allTweets));
    }

    return (
        <form onSubmit={addTweet}>
            <input type="text" name="title" value={title} onChange={updateTitle} />
            <input type="text" name="content" value={content} onChange={updateContent} />
            <button>Submit</button>
        </form>
    )
}
export default AddTweet

