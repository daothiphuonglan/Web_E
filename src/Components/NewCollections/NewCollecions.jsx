import React from 'react';
import './NewCollecion.css'
import data_product from '../Assert/data';
import Item from '../Item/Item';
const NewCollecions = () => {
    return (
        <div className="new-collections">
            <h1>New Collections</h1>
            <hr/>
            <div className="collections">
               {data_product.map((data,index)=>{
                  return (  
                    <Item key={index} id={data.id} name={data.name} image={data.image}  new_price={data.new_price} old_price={data.old_price}></Item>
                  )
               })}
            </div>
        </div>
    );
};

export default NewCollecions;