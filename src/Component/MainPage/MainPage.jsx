import React from 'react'
import './MainPage.css'
import {useNavigate} from 'react-router-dom'
const MainPage = () => {
  const navigate=useNavigate()
  const handleNavigation=()=>{
navigate('/product?value=')
  }
  return (
    <div className="main">
    
    <div className="main-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
        <p>new</p>
             <p>Collections</p>
        <p>for everyone</p>
        </div>
   
    <div className="main-latest-btn">
      <div onClick={handleNavigation}>GO SHOPPING</div>
      </div>
    </div>
    <div className="main-right">
    <img src='./img/hero_image.png' alt="" />
    </div>
        </div>
  )
}

export default MainPage