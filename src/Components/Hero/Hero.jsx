import React from 'react';
import './Hero.css'
import { PiHandWavingBold } from 'react-icons/pi';
import {BsArrowRightCircleFill} from 'react-icons/bs'

import pic_1 from '../Assert/pic_1.jpg'
const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>New Arrivals Only</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>New</p>
                        <PiHandWavingBold/>
                    </div>

                    <p>collections</p>
                    <p>for everyone</p>
                </div>

                <div className="hero-latest-btn">
                    <div>Latest collection</div>
                    <BsArrowRightCircleFill></BsArrowRightCircleFill>
                     
                </div>
            </div>

            <div className="hero-right">
                 <img src={pic_1}/>
            </div>
        </div>
    );
};

export default Hero;