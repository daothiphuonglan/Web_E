import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Page/Shop';
import ShopCategory from './Page/ShopCategory';
import Product from './Page/Product';
import Cart from './Page/Cart';
import LoginSignup from './Page/LoginSignup';
function App() {
  return (

    <div>

      <BrowserRouter>
      
      <NavBar></NavBar>


      <Routes>

        <Route path="/" element={<Shop></Shop>}/>
         <Route path="/mens" element={<ShopCategory category="men"></ShopCategory>}/>
         <Route path="/womens" element={<ShopCategory category="women"></ShopCategory>}/>
         <Route path='/kids' element={<ShopCategory category="kid"></ShopCategory>}/>
         <Route path='/product' element={<Product></Product>}/>
         <Route path=':productId' element={ <Product></Product>}/>
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      
      </BrowserRouter>

      
     
    </div>
  );
}

export default App;
