import './ver1/homepage.css'; //  TODO Remove this line
import React from 'react';
import spider from './ver1/spider.png'
<<<<<<< HEAD
import { Auth } from './auth';
=======
>>>>>>> 1c2ee9a06f2b568d944a35647b08f2577153a56e

const App = () => {
  return (
<>
  <div className="containner">
<<<<<<< HEAD
    <Auth />
=======
>>>>>>> 1c2ee9a06f2b568d944a35647b08f2577153a56e
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
  </div>
</>

  );
}

export default App;
