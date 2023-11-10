import React from 'react';
import './ProductDisplay.css'
import { AiFillStar} from 'react-icons/ai';
import { BsStarHalf} from 'react-icons/bs';
import { ShopContext } from '../../Context/ShopContext';
import { useContext } from 'react';
const ProductDisplay = (props) => {
    const {product} = props;

    const {addToCart}= useContext(ShopContext)
    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                     <img src={product.image}/>
                     <img src={product.image}/>
                     <img src={product.image}/>
                     <img src={product.image}/>
                </div>

                <div className="productdisplay-img">
                     <img className='productdisplay-main-img' src={product.image}/>
                </div>
            </div>

            <div className="productdisplay-right">

                <h1>{product.name}</h1>

                <div className='productdisplay-right-stars'>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <BsStarHalf/>
                    <p>122</p>
                </div>


                <div className="productdisplay-right-prices">
                     <div className="productdisplay-right-price-old">&{product.old_price}</div>
                     <div className="productdisplay-right-price-new">&{product.new_price}</div>
                </div>

                <div className="productdisplay-right-description">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages.
                </div>

                <div className="productdisplay-right-sizes">
                     <h1>Select Size</h1>

                     <div className='productdisplay-right-sizes'>
                         <div>S</div>
                         <div>M</div>
                         <div>L</div>
                         <div>XL</div>
                         <div>XXL</div>
                     </div>
                </div>

                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>

                 <p className='productdisplay-right-category'>
                    <span>Category: </span>
                    Women
                 </p>
            </div>
        </div>
    );
};

export default ProductDisplay;