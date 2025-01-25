import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
   <div className="footer">
    <div className="footer-content">
        <h1>SHOFY</h1>
        <h3>Products Store</h3>
        <img src="./img/footerstore1.png" alt="" />
       <img src="./img/footerstore2.png" alt="" />
    </div>
    <div className="footer-content">
        <h1>EXPLORE</h1>
        <ul>
            <li>Home</li>
            <li>Featured</li>
            <li>New</li>
           </ul>
    </div>
    <div className="footer-content">
        <h1>OUR SERVICES</h1>
        <ul>
            <li>Pricing</li>
            <li>Free Shipping</li>
            <li>Gift Cards</li>
        </ul>
    </div>
    <div className="footer-content">
        <h1>FOLLOW</h1>
        <div className="logo-container">
<div className="logo">
        <ul>
            <li><i class="fa-brands fa-square-facebook"></i></li>
            <li><i class="fa-brands fa-instagram"></i></li>
            <li><i class="fa-brands fa-twitter"></i></li>
        </ul>
        </div>
        </div>
    </div>
   </div>
  )
}

export default Footer