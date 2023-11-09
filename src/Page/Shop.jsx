import React from 'react';
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import NewCollecions from '../Components/NewCollections/NewCollecions.jsx';
import NewsLetter from '../Components/NewsLetter/NewsLetter.jsx';

const Shop = () => {
    return (
        <>
           <Hero></Hero>
           <Popular/>
           <Offers/>
           <NewCollecions/>
           <NewsLetter/>
        </>
    );
};

export default Shop;