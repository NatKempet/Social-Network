import React, { useState } from 'react';
import './LoginCard.css';

const LoginCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div
            className={`flip-card1 ${isFlipped ? 'flipped' : ''}`}
            onClick={flipCard}
        >

            <div className="flip-card1-inner">
                <div className="flip-card1-front">
                    <h3>LOGIN</h3>
                    <div className="lineup"></div>
                    <div className="linedown"></div>
                    <div className="lineleft"></div>
                    <div className="lineright"></div>
                </div>
                <div className="flip-card1-back">
                    <h4>SIGN IN</h4>
                    <div className="lineup1"></div>
                    <div className="linedown1"></div>
                    <div className="lineleft1"></div>
                    <div className="lineright1"></div>
                </div>
            </div>
        </div>
    );
};

export default LoginCard;
