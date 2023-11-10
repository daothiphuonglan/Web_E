import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Page/Shop';
import ShopCategory from './Page/ShopCategory';
import Product from './Page/Product';
import Cart from './Page/Cart';
import LoginSignup from './Page/LoginSignup';
import banner_women from './Components/Assert/banner-women.jpg'
import banner_kid from './Components/Assert/banner-kid.jpg'
import banner_men from './Components/Assert/banner-men.jpg'
function App() {
  return (

    <div>

      <BrowserRouter>
      
      <NavBar></NavBar>


      <Routes>

        <Route path="/" element={<Shop></Shop>}/>
         <Route path="/mens" element={<ShopCategory banner={banner_men} category="men"></ShopCategory>}/>
         <Route path="/womens" element={<ShopCategory  banner={banner_women}  category="women"></ShopCategory>}/>
         <Route path='/kids' element={<ShopCategory   banner={banner_kid} category="kid"></ShopCategory>}/>
         <Route path="/product" element={<Product/>}>
         <Route path=':productId' element={<Product></Product>}/>
        </Route> 
            
         
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      
      </BrowserRouter>

      
     
    </div>
  );
}

export default App;
