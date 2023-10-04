import React, { useState } from 'react';
import './Cart.css';
import { FaTimes } from 'react-icons/fa';
import Shop from '../Shop/Shop';

const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct, handleCartClear }) => {
  const totalPrice = cartItems.reduce((price, item) => price + parseInt(item.quantity) * parseFloat(item.price), 0);
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
       
      {isVisible && (
        <div className='boo'>
          <div className='cart-sidebar'>
            <button onClick={toggleVisibility}>
              <FaTimes />
            </button>
            <div className='cart-header'>
              {cartItems.length >= 1 && <button onClick={handleCartClear}>Clear Cart</button>}
              <p>Cart Items</p>
            </div>
            <div className='cart-items-list'>
              {cartItems.length === 0 ? (
                <p>No Items added in the cart</p>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className='cart-item'>
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                    <div className='quantity-buttons'>
                      <button onClick={() => handleRemoveProduct(item)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleAddProduct(item)}>+</button>
                    </div>
                    <div className='item-total'>
                      {item.quantity} * ${item.price}
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className='cart-total'>
              <p>Total price: {totalPrice} $</p>
            </div>
          </div>
            Hello
        </div>
      )}
    </>
  );
};

export default Cart;