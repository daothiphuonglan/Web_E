import React from 'react';
import './Popular.css'
import data_product from '../Assert/data.js'
import Item from '../Item/Item.jsx';
const Popular = () => {
    return (
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
             
             <hr></hr>

             <div className="popular-item">
                 {data_product.map((data, index)=>{
                    return (  
                        <Item  key={index} id={data.id} name={data.name} image={data.image}  new_price={data.new_price} old_price={data.old_price}></Item>
                    )
                 })}
             </div>


        </div>
    );
};

export default Popular;