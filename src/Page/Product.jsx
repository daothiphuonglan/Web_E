import React, { createContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import BreadCrum from '../Components/BreadCrum/BreadCrum';

const Product = () => {
    const {all_product} = createContext(ShopContext)
    const {productId}= useParams();
    const product = all_product.find((e)=> e.id=== productId)
    return (
        <div>

            <BreadCrum product={product}/>

            <h1>Hi</h1>
            
        </div>
    );
};

export default Product;