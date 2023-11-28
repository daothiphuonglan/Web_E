import React, { useContext } from 'react';
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext';
import { CiCircleRemove } from 'react-icons/ci';
const CartItem = () => {
    const {all_product,cartItems,removeCart, getTotalCartAmount} = useContext(ShopContext)
    return (
        <div className='cartitems'>
            <div className='cartitems-format cartitems-format-main'>
               
               <p>Products</p>
               <p>Title</p>
               <p>Price</p>
               <p>Quantity</p>
               <p>Total</p>
               <p>Remove</p>
            </div>

            <hr></hr>

            {all_product.map((e)=>{
                if(cartItems[e.id]>0)
                {
                    return <div>
                         
                         <div className="cartitems-format">
                              <img src={e.image}/>
                              <p>{e.name}</p>
                              <p>${e.new_price}</p>
                              
                             <button className="cartitems-quantity">{cartItems[e.id]}</button>
                             <p>{e.new_price*cartItems[e.id]}</p>
                            <CiCircleRemove className="w-8 h-8 bg-red-600" onClick={()=>{removeCart(e.id)}}></CiCircleRemove>
                        </div>

                    </div>
                }

                return null;
            })}

            <div className="cartitems-down">
                 <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtatal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr/>

                        <div className='cartitems-total-item'>
                                 <p>Shipping Fee</p>
                                 <p>Free</p>
                        </div>
                        <hr></hr>

                        <div className='cartitems-total-item'>
                          <h3>Total</h3>
                         <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>

                    <button>PROCEED TO CHECKOUT</button>
                 </div>

                 <div className='cartitems-promocode'>
                     <p>If you have a promo code, enter it here</p>

                     <div className='cartitems-promobox'>
                          <input type='text' placeholder='code'/>
                           <button>Submit</button>
                     </div>
                 </div>
            </div>

            
               
          

        </div>
    );
};

export default CartItem;