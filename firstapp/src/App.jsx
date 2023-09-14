import Button from './components/button';
import './ver1/homepage.css'; //  TODO Remove this line
import React from 'react';
import spider from './ver1/spider.png'

const App = () => {
  return (
<>
  <div id="containner">
    <h>Home</h>
    <ul>
      <li>
        <a href="#">For you</a>
      </li>
      <li>
        <a href="#">Following</a>
      </li>
    </ul>
    <div id="menu">
      <div className="spd">
        <img className="spider" src={spider} alt="spider" />
      </div>
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
      <button className="btn post">Post</button>
    </div>
  </div>
</>

  );
}

export default App;
