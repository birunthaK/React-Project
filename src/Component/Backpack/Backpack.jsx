import React from 'react'
import './Backpack.css'
const Backpack = () => {
  return (
   <div className="backpack">
    <div className="backpack-left">
        <div className="backpack-img">
<img src="./img/backpackMan.png" alt="" srcset=""  height="270px"/>
        </div>
        <div className="backpack-content">
<h2>MEN</h2>
<h1>BACKPACK</h1>
<p>View Collection</p>
        </div>
    </div>
    <div className="backpack-right">
 <div className="backpack-img">
<img src="./img/backpackWoman.png" alt=""  height='270px'/>
        </div>
        <div className="backpack-content">
        <h2>WOMEN</h2>
<h1>BACKPACK</h1>
<p>View Collection</p> 
        </div>
    </div>
   </div>
  )
}

export default Backpack