<<<<<<< HEAD
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
=======
import Button from './components/button';
import './ver1/homepage.css'; //  TODO Remove this line

const App = () => {
  return (
    <div className="containner">
      <ul>
        <li><a href="#gg">Foryou</a></li>
        <li><a href="#zz">Following</a></li>
      </ul>

      <div className="menu">
        <div id="menu">
          <Button topic={'Home'} src="https://cdn.lordicon.com/osuxyevn.json" trigger="hover" colors="primary:#f0f7ff"></Button>
          <Button topic={'Search'}src="https://cdn.lordicon.com/xfftupfv.json" trigger="hover" colors="primary:#f0f7ff"></Button>
          <Button topic={'Favorite'}src="https://cdn.lordicon.com/pnhskdva.json" trigger="hover" colors="primary:#f0f7ff"></Button>
          <Button topic={'Communities'}src="https://cdn.lordicon.com/bhfjfgqz.json" trigger="hover" colors="primary:#f0f7ff"></Button>
          <Button topic={'Notifications'}src="https://cdn.lordicon.com/psnhyobz.json" trigger="hover" colors="primary:#f0f7ff"></Button>
          <Button topic={'Messages'}src="https://cdn.lordicon.com/hpivxauj.json" trigger="hover" colors="primary:#f0f7ff"></Button>
        </div>
      </div>
    </div>
  );
}

export default App;
>>>>>>> ab06ec9c2978c326ac84ae0abd1397cd3c497824
