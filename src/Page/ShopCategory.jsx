import React from 'react';
import './CSS/ShopCategory.css'
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { AiFillDownCircle } from 'react-icons/ai';
import Item from '../Components/Item/Item';
const ShopCategory = (props) => {
    const {all_product}= useContext (ShopContext)
    return (
        <div className="shop-category">

            <img className="shopcategory-banner" src={props.banner}/>
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>

                <div className='shopcategory-sort'>
                     Sort by  <AiFillDownCircle/>
                </div>

            </div>

            <div className="shopcategory-products">
                {all_product.map((data,index)=>{
                   if(props.category===data.category){
                       return (
                        <Item key={index} id={data.id} name={data.name} image={data.image}  new_price={data.new_price} old_price={data.old_price}></Item>
                       )
                   }else {
                    return null;
                   }
                })}
            </div>
            
        </div>
    );
};

export default ShopCategory;