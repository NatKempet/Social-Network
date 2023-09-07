import './Tweet.css';
const Tweet = (props) =>{
     return (
     <div className="Tweet">
         <h1>{props.title}</h1>
         <p>{props.content}</p>
         <p>Likes:{props.likes}</p>
         </div>);
         }
export default Tweet;
