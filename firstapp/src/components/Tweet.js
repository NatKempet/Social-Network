import './Tweet.css';
import { useState } from 'react';

const action = (e) => {
    console.log(e.target.innerHTML);
}

const Tweet = (props) => {
    const handleLike = () => {
        setLikes(likes + 1);
    }
    const [likes, setLikes] = useState(props.likes);

    return (
        <div className="Tweet">
            <h1 onClick={(e) => action(e)}>{props.title}</h1>
            <p>{props.content}</p>
            <p>Likes: {likes}</p>
            <button onClick={handleLike}>Like</button>

        </div>
    );
}
export default Tweet;