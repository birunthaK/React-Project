import React from 'react'
import './Feature.css'
const Feature = () => {
  return (
  <div className="feature">
    <div className='feature-heading'>
        <h1>FEATURED PRODUCTS</h1>
      <p>View All</p>
    </div>
    <div className="feature-container">
        <div className="feature-box">
            <h2>NEW</h2>
            <img src="./img/feature1.png" alt="" />
        </div>
        <div className="feature-box">
            <h2>NEW</h2>
            <img src="./img/feature2.png" alt="" />
        </div>
        <div className="feature-box">
            <h2>NEW</h2>
            <img src="./img/feature3.png" alt="" />
        </div>
        <div className="feature-box">
            <h2>NEW</h2>
            <img src="./img/feature4.png" alt="" />
        </div>
        </div>
    <div className="feature-content">
        <div className="content">
            <h2>HEADPHONES F5 BLACK</h2>
            <h4>₹999</h4>
        </div>
        <div className="content">
            <h2>SPEAKER BEATS PILL</h2>
            <h4>₹2990</h4>
        </div>
        <div className="content">
            <h2>APPLE AIR PODS</h2>
            <h4>₹4999</h4>
        </div>
        <div className="content">
            <h2>SMARTWATCH F9 NEGRO</h2>
            <h4>₹10,099</h4>
        </div>
    </div>

  
  </div>
  )
}

export default Feature