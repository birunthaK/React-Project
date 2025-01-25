import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../CSS/Product.css'
const Product = ({addToCart}) => {
  const location=useLocation()
  const queryParams=new URLSearchParams(location.search)
 const input=queryParams.get('value')
  console.log(input)
  const [products,setProducts]=useState([])
async function fetchData(){
  let getData=await fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(input)}`)
  // finalData=getData.json()
  let response=await getData.json()
  setProducts(response.products)
}
useEffect(()=>{
  fetchData()
},)
  return (
   <div className="product" style={{backgroundColor:"#d4d5d6"}}>

    {products.map((product)=>{
const{title,description,thumbnail,price,rating}=product;
return(
  <>
  <div className="data-container">
    <center>
 <img src={thumbnail} alt="" width='150px'/>
<div style={{textAlign:'center'}}>
  <p>
    <span style={{color:'rgb(9, 173, 9)'}}>Title:</span>
    <span>{title}</span>
  </p>
</div>
<div style={{textAlign:'center'}}>
  <p>
    <span style={{color:'rgb(9, 173, 9)'}}>Description:</span>
    <span style={{color:'grey'}}>{description}</span>
  </p>
</div>
<div style={{textAlign:'center'}}>
  <p>
    <span style={{color:'rgb(9, 173, 9)'}}>Rating:</span>
    
   <span><i id='i' class="fa-solid fa-star"></i></span>
   <span>{rating}</span>
  </p>
</div>
<div style={{textAlign:'center'}}>
  <p>
    <span style={{color:'rgb(9, 173, 9)'}}>Price:</span>
    <span> ₹{price}</span>
    <span style={{color:'green'}}> 50% off</span>
  </p>
</div>
<button onClick={() => addToCart(product)} >Add to Cart</button>

 {/* <p>Title: {title}</p> */}
 {/* <p>{title}</p> */}
 {/* <p>Description: {description}</p> */}
 {/* <p>Rating: {rating}</p> */}
 {/* <p>Price:Rs {price}</p> */}
 </center>
 </div>
</>

)
    })
  }
{/* <img src={}/> */}

       </div>
  )
}

export default Product