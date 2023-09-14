import './ver1/homepage.css'; //  TODO Remove this line
import React from 'react';
import spider from './ver1/spider.png'
import { Auth } from './auth';

const App = () => {
  return (
<>
  <div className="containner">
  
    <h>Home</h>
    <ul>
      <li>
        <a href="#">Foryou</a>
      </li>
      <li>
        <a href="#">Following</a>
      </li>
    </ul>
    <div className="menu">
      <div className="spd">
        <img className="spider" src={spider} alt="spider" />
      </div>
      <div className="clickable-icon">
        <lord-icon
          style={{ transform: "translateY(6px)" }}
          className="home"
          src="https://cdn.lordicon.com/osuxyevn.json"
          trigger="hover"
          colors="primary:#f0f7ff"
        />
        <p>Home</p>
      </div>
      <div className="clickable-icon">
        <lord-icon
          style={{ transform: "translateY(6px)" }}
          className="search"
          src="https://cdn.lordicon.com/xfftupfv.json"
          trigger="hover"
          colors="primary:#f0f7ff"
        />
        <p>Search</p>
      </div>
      <div className="clickable-icon">
        <lord-icon
          style={{ transform: "translateY(6px)" }}
          className="favorite"
          src="https://cdn.lordicon.com/pnhskdva.json"
          trigger="hover"
          colors="primary:#f0f7ff"
        />
        <p>Favorite</p>
      </div>
      <div className="clickable-icon">
        <lord-icon
          style={{ transform: "translateY(6px)" }}
          className="communities"
          src="https://cdn.lordicon.com/bhfjfgqz.json"
          trigger="hover"
          colors="primary:#f0f7ff"
        />
        <p>Communities</p>
      </div>
      <div className="clickable-icon">
        <lord-icon
          style={{ transform: "translateY(6px)" }}
          className="notifications"
          src="https://cdn.lordicon.com/psnhyobz.json"
          trigger="hover"
          colors="primary:#f0f7ff"
        />
        <p>Notifications</p>
      </div>
      <div className="clickable-icon">
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
    <tweet/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Auth />
  </div>
</>

  );
}

export default App;
