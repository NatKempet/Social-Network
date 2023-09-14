import "./App.css";
import { useState } from "react";
import Tweet from "./components/tweets";
import Footer from "./components/footer";
import Nav from "./components/nav";
import TweetList from "./components/tweetList";

function App() {
  const [count, setcount] = useState(0);
  return (
    <>
      <Nav />
      <Tweet title="yay" likes={count} />
      <TweetList title="yay" likes={count} />
      <div>
        <p>You clicked {count} times</p>
        <button
          onClick={() => {
            setcount(count + 1);
          }}
        >
          Click me
        </button>
      </div>
    </>
  );
}

export default App;