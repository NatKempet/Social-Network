import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Tweet from './components/tweets'
import Footer from './components/footer'

function App() {
  const [selectedIndex, setSelectedIndex] = useState("yay");
  const myElements = (
    <>
    <ul>
      <li>sos</li>
      <li>sdsd</li>
    </ul>
    </>
  )
  let x = 11;
  return <>
  <Tweet title = "lol"/>
  <Tweet />
  <Footer />
  </>
  };


export default App;
