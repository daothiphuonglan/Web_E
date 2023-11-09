import React from 'react';
import './Offers.css'
import pic_2 from '../Assert/pic_2.jpg'
const Offers = () => {
    return (
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>
                    Check Now
                </button>
            </div>

            <div className="offers-right">
                <img src={pic_2}/>
            </div>
        </div>
    );
};

export default Offers;