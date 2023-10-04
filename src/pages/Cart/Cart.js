import React, { useState } from 'react';
import './Cart.css';
import {Link} from 'react-router-dom';
import Shop from '../Shop/Shop';
import Cartimage from './Cart Assets/cart.png'
import Footer from '../../components/Footer/Footer';

const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct, handleCartClear }) => {
  const totalPrice = cartItems.reduce((price, item) => price + parseInt(item.quantity) * parseFloat(item.price), 0);



  return (
    <>
           <div className='cart-part'>

<div className='cart-text'>
  <p>YOUR SHOPPING CART</p>

</div>
<img className='cart-main-part-image' src={Cartimage}></img>





</div>

        <div className='cart-main-part'>
            <div className='cart-items-list'>
            {cartItems.length === 0 ? (
  <div className='empty-cart-part'>
    <p>Your cart is empty</p>
    <Link to={"/shop"} > <button>Continue Shopping</button>
    </Link>
  </div>
) : (
  <div>

    <div className='product-intro-part'>
      <ul className='cart-product-part'>
        <li>PRODUCT</li>
      </ul>
      <ul className='cart-quantity-total-part'>
      <li>QUANTITY</li>
      <li>TOTAL</li>

      </ul>

      </div>




    {cartItems.map((item) => (
      <div key={item.id} className='cart-item'>

        <div className='cart-image-text-part'>
        <img className='cart-image' src={item.image} alt={item.name} />
        <div className='cart-name-price-metal-part'>
        <p className='cart-item-name'>{item.name}</p>
        <p>Price:{item.price}</p>
        <p>Material:{item.metal}</p>
        </div>
        </div>

        
        <div className='quantity-buttons'>
          <button onClick={() => handleRemoveProduct(item)}>-</button>
          <button>{item.quantity}</button>
          <button onClick={() => handleAddProduct(item)}>+</button>
        
        </div>

        
        <div className='item-total'>
          {item.quantity} * {item.price}
        </div>
      </div>
    ))}
  </div>
)}

              
            </div>
            {cartItems.length === 0 ?<p></p>:
            <div className='cart-total'>
              <p>Total price: {totalPrice} $</p>
            </div>}




            <div className='cart-clear-checkout-part'>

              <p>Subtotal:{totalPrice}</p>
              <p>Taxes and shipping calculated at checkout</p>
              {cartItems.length === 0 ? <p></p>:
        <div className='cart-checkout-clear-buttons'>
        <button>Checkout</button>
              <div className='cart-header'>
              <button onClick={handleCartClear}>Clear Cart</button>
        </div>
              
            </div>}
            </div>
        </div>
      <Footer></Footer>
    </>
  );
};

export default Cart;