import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
import '../components/loginComponents/login.css'
import AKImage from '../components/loginComponents/AK.png'
import heartImage from '../components/loginComponents/heart.png'
import jokerImage from '../components/loginComponents/joker.jpg'


const Login = () => {
  const [isFlipped, setFlipped] = useState(false);

  const flipCard = () => {
    setFlipped(!isFlipped);
  };

  return (
    <>
      <div className='background'>
        <div id="up" />
        <div id="down" />
        <div id="left" />
        <div id="right" />
        <h1>K</h1>
        <h2>K</h2>
        <img id="pic1" src={heartImage} />
        <img id="pic2" src={heartImage} />
        <img id="pic3" src={AKImage} />
        <div className={`flip-card1 ${isFlipped ? 'flipped' : ''}`} onClick={flipCard}>
          <div className="flip-card1-inner">
            <div className="flip-card1-front">
              <h3>LOGIN</h3>
              <h5>K</h5>
              <h6>K</h6>
              <div className="lineup" />
              <div className="linedown" />
              <div className="lineleft" />
              <div className="lineright" />
            </div>
            <div className="flip-card1-back">
              <h4>SIGN IN</h4>
              <h7>K</h7>
              <h8>K</h8>
              <div className="lineup1" />
              <div className="linedown1" />
              <div className="lineleft1" />
              <div className="lineright1" />
            </div>
          </div>
          <img id="joker" src={jokerImage} alt="joker" />
        </div>
      </div>

    </>
  )
}

export default Login