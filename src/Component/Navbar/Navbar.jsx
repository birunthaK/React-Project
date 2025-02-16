import React, { useState } from 'react'
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom'



const Navbar = ({cart}) => {
    const [input,setInput]=useState('')
    
   
  return (
    <>
    <div className="navbar">
    <div className="header">

       <div className="header-left">
        <h1>QuickCart</h1>
       </div>
       <div className="header-center">
<li><Link to='/'>Home </Link> </li>
<li><Link to={`/product?value=${encodeURIComponent(input)}`}>Product</Link></li>

    </div>
       <div className="header-right">
        <div className="search">
            <div className="search-left">
                <input type="text" placeholder='search' onChange={(e)=>{setInput(e.target.value)}} value={input}/>
            <span ><i class="fa-solid fa-magnifying-glass"></i></span>
            </div>
            <div className="search-right">
               <Link to='/cart'><span className='cart-count'>{cart.length}</span><button className='cart-len'><i class="fa-solid fa-bag-shopping"></i></button></Link> 
               <Link to='/login'> <button><i class="fa-solid fa-user"></i></button></Link>
            </div>
        </div>
       </div>
    </div>
    
  </div>

 </>
  )
}

export default Navbar