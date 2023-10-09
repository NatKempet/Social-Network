import "./ver1/homepage.css"; //  TODO Remove this line
import React, { useState, useEffect } from "react";
import spider from "./ver1/spider.png";
import { TweetProvider, TweetContext } from "./components/TweetContext";
import TweetList from "./components/tweetList";
import AddTweet from "./components/AddTweet";
import DeleteButton from "./components/DeleteButton";
import { db } from "./Firebase/firebase";
import {
  collection,
  onSnapshot,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";
import { Auth } from "./components/auth";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    onSnapshot(collection(db, "todos"), (snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }))
      );
    });
  }, [input]);

  const addTodo = (e) => {
    e.preventDefault();
    addDoc(collection(db, "todos"), {
      todo: input,
      timestamp: serverTimestamp(),
    });
    setInput("");
  };

  return (
    <TweetProvider>
      <>
        <div className="black-space"></div>
        <h9>J</h9>
        <h10>J</h10>
        <div id="containner">
          <div className="spd">
            <img className="spider" src={spider} alt="spider" />
          </div>

          <div id="card1"> </div>
            {/* <Auth /> */}
            <h className="homie">Home</h>
            <ul id="for-you">
              <li>
                <a href="#" className="for-you">
                  For you
                </a>
              </li>
              <li>
                <a href="#" className="following">
                  Following
                </a>
              </li>
            </ul>
         
          {/* <hr /> */}
          <div id="card2"></div>
          <div id="menu">
            <div id="clickable-icon">
              <lord-icon
                style={{ transform: "translateY(6px)" }}
                className="home"
                src="https://cdn.lordicon.com/osuxyevn.json"
                trigger="hover"
                colors="primary:#f0f7ff"
              />
              <p>Home</p>
            </div>
            <div id="clickable-icon">
              <lord-icon
                style={{ transform: "translateY(6px)" }}
                className="search"
                src="https://cdn.lordicon.com/xfftupfv.json"
                trigger="hover"
                colors="primary:#f0f7ff"
              />
              <p>Search</p>
            </div>
            <div id="clickable-icon">
              <lord-icon
                style={{ transform: "translateY(6px)" }}
                className="favorite"
                src="https://cdn.lordicon.com/pnhskdva.json"
                trigger="hover"
                colors="primary:#f0f7ff"
              />
              <p>Favorite</p>
            </div>
            <div id="clickable-icon">
              <lord-icon
                style={{ transform: "translateY(6px)" }}
                className="communities"
                src="https://cdn.lordicon.com/bhfjfgqz.json"
                trigger="hover"
                colors="primary:#f0f7ff"
              />
              <p>Communities</p>
            </div>
            <div id="clickable-icon">
              <lord-icon
                style={{ transform: "translateY(6px)" }}
                className="notifications"
                src="https://cdn.lordicon.com/psnhyobz.json"
                trigger="hover"
                colors="primary:#f0f7ff"
              />
              <p>Notifications</p>
            </div>
            <div id="clickable-icon">
              <lord-icon
                style={{ transform: "translateY(6px)" }}
                className="messages"
                src="https://cdn.lordicon.com/hpivxauj.json"
                trigger="hover"
                colors="primary:#f0f7ff"
              />
              <p>Messages</p>
            </div>
          </div>
          <DeleteButton /> {/* temporary */}


          <div className="tweetBox">
            <TweetList />
            {/* <hr className="hr2" /> */}
            <ul>
              {todos.map((item) => (
                <AddTweet className="new-tweets" key={item.id} arr={item} />
              ))}
            </ul>
          </div>


        </div>
      </>
    </TweetProvider>
  );
};

export default App;
