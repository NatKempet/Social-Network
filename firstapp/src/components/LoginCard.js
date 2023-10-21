import React, { useState } from 'react';
import './LoginCard.css';
import heartImage from './LoginHTML/heart.png';
import akImage from './LoginHTML/AK.png';
import joker from './LoginHTML/joker.jpg';
import Auth from './Auth';

const LoginCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <>
            <div id="up"></div>
            <div id="down"></div>
            <div id="left"></div>
            <div id="right"></div>
            <h1>K</h1>
            <h2>K</h2>

            <img id="pic1" src={heartImage} alt="Heart" />
            <img id="pic2" src={heartImage} alt="Heart" />
            <img id="pic3" src={akImage} alt="AK" />


            <div
                className={`flip-card1 ${isFlipped ? 'flipped' : ''}`}
                // onClick={flipCard}
            >

                <div className="flip-card1-inner">
                    <div className="flip-card1-front">
                        <h3>LOGIN</h3>
                        <div className="lineup"></div>
                        <div className="linedown"></div>
                        <div className="lineleft"></div>
                        <div className="lineright"></div>
                        <div className='Auth'><Auth /></div>

                    </div>
                    <div className="flip-card1-back">
                        <h4>SIGN IN</h4>
                        <h7>K</h7>
                        <h8>K</h8>
                        <div className="lineup1"></div>
                        <div className="linedown1"></div>
                        <div className="lineleft1"></div>
                        <div className="lineright1"></div>
                    </div>
                </div>
            </div>

            <img id="joker" src={joker} alt="joker" />
        </>
    );
};

export default LoginCard;
