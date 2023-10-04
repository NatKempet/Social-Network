import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
import '../components/loginComponents/login.css'
import AKImage from '../components/loginComponents/AK.png'
import heartImage from '../components/loginComponents/heart.png'
import jokerImage from '../components/loginComponents/joker.jpg'
import joker2Image from '../components/loginComponents/Joker2.jpg'
import heart2Image from '../components/loginComponents/heart2.png'
import { Auth } from '../components/loginComponents/auth.jsx';



const Login = () => {

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
        <img id="pic4" src={joker2Image}/>
        
        

        <div id="form">
           <h3>SIGN IN</h3>
            <br />
            <br />
            <br />
            <br />
            <Auth />
              <h5>K</h5>
              <h6>K</h6>
              <img id="pic5" src={heart2Image}/>
              <img id="pic6" src={heart2Image}/>
              
             
              {/* <div> <Auth /> </div> */}
        </div>
         <img id="joker" src={jokerImage} alt="joker" />
        
      </div>

    </>
  )
}

export default Login