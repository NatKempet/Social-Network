import "./Tweet.css";
import { useState } from "react";
const Tweet = (props) => {
  const [likes, setLikes] = useState(props.likes);
  const handleLike = () => {
    setLikes(likes + 1);
  };
  return (
    <div className="Tweet">
      {/* <h1>{props.title}</h1>
      <p>{props.content}</p>
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>Like</button> */}
      <h1>GOODDAY</h1>
      <p>GOODDAY</p>
    </div>
  );
};
export default Tweet;
