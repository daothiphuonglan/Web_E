import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';
import { BsShop } from 'react-icons/bs';
import {BsFillCartCheckFill} from 'react-icons/bs'
const NavBar = () => {
   
    return (
        <div className='navbar'>

            <div className="nav-logo">
                <BsShop></BsShop>
                <p>Shop</p>
            </div>

            <ul className="nav-menu">
                <li> <Link  style={{textDecoration:'none'}} to='/'>Shop</Link> </li>
                <li><Link style={{textDecoration:'none'}}  to='/mens'>Men</Link> </li>
                <li><Link style={{textDecoration:'none'}} to='/womens'>Women</Link></li>
                <li><Link style={{textDecoration:'none'}}  to='/kids'>Kids</Link></li>
            </ul>

            <div className="nav-login-cart">
             
            <Link style={{textDecoration:'none'}} to='/login'><button>Login</button></Link>
             
             <Link style={{textDecoration:'none'}} to='/cart'><BsFillCartCheckFill></BsFillCartCheckFill></Link>
             
             <div className="nav-cart-count">0</div>
            </div>
            
        </div>
    );
};

export default NavBar;