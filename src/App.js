
import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Pages/Home';

import Login from './Component/Pages/Login';
import Cart from './Component/Pages/Cart';
import Product from './Component/Pages/Product';
import SignUp from './Component/SignUp/SignUp';

// import Product from './Components/Product';
// import Navbar from './Components/Navbar';
// import Login from './Components/Login';
// import Cart from './Components/Cart';


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const removeFromCart=(index)=>{
   const removeList=[...cart]
   removeList.splice(index,1)

    setCart(removeList)
  }
  return (
  
  <BrowserRouter>

  <Navbar cart={cart}/>
  <Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/product' element={<Product addToCart={addToCart} cart={cart} />}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/cart' element={<Cart cart={cart}  removeFromCart={removeFromCart}/>}></Route>
<Route path='/signup' element={<SignUp/>}></Route>

  </Routes>
  </BrowserRouter>
//   <Router>
  //  <Navbar/>
  //   <Routes>
  //     <Route path="/" element={<Product addToCart={addToCart} />} />
  //     <Route path="/login" element={<Login/>} />
  //     <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart}/>}/>
  //   </Routes>
  // </Router>

  );

}

export default App;
