import React from 'react'
import '../CSS/Cart.css'
const Cart = ({cart,removeFromCart}) => {
 
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };
return (
 
<div className="cart-container">
<h2>Shopping Cart</h2>
{cart.length !== 0 ? (
  <>
    <div className="cart-items">
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          
          <img src={item.thumbnail} alt="" />
          <div>
            <h4>{item.title}</h4>
            <p>₹{item.price.toFixed(2)}</p>
            <hr />
          </div>
          
          <button onClick={() => removeFromCart(index)}>Remove</button>
        </div>
      ))}
    </div>
    <div className="cart-summary">
      <h3>Total Price: ₹{getTotalPrice()}</h3>
    </div>
  </>
) : (
  <p>Your cart is empty.</p>
)}
</div>
)
}

export default Cart