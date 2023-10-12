import React, { useState } from 'react'
import './NavigationBar.css'
import { Link,NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa'
import { RiShoppingBasketFill } from 'react-icons/ri'
import { FaTimes } from 'react-icons/fa'
import { BiSolidTimeFive } from 'react-icons/bi'
import { BsWatch } from 'react-icons/bs'
import { SlMenu } from 'react-icons/sl'
import Cart from '../../pages/Cart/Cart';
const NavigationBar = ({ cartItems, handleAddProduct, handleCartClear, handleRemoveProduct }) => {

  const [isMobile, setIsMobile] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div>

      <div className='container'>
        <Link to={"/"} >
          <div className='logo'>
            <p className='logoIcon'><BsWatch ></BsWatch> <span className='brandName'>RARE</span></p>

          </div>
        </Link>





        <ul className={isMobile ? "pages-mobile" : 'pages'}
          onClick={() => setIsMobile(false)}  >
          <NavLink to={"/"} className='home' activeClassName='active'>
            <li>HOME</li>
          </NavLink>
          <NavLink to={"/shop"} className='shop' activeClassName='active'>
            <li>SHOP</li>
          </NavLink>
          <NavLink to={"/about"} className='about' activeClassName='active'>
            <li>ABOUT</li>
          </NavLink>
          <NavLink to={"/contact"} className='contact' activeClassName='active'>
            <li>CONTACT</li>
          </NavLink>

          <NavLink to={"/registration"} className='registration-mobile' activeClassName='active'>
            <li className='userIcon'>REGISTRATION</li>
          </NavLink>
          <NavLink to={"/cart"} className='cart-mobile'activeClassName='active'>
            <li className='basketIcon'>CART</li>
          </NavLink>


        </ul>




        <div className='user'>
          <ul>
            <NavLink to={"/registration"} className='registration' activeClassName='active'>
              <li className='userIcon'><FaUser></FaUser></li>
            </NavLink>
            <NavLink to="/cart" className="cart" activeClassName='active'>
              <li className="basketIcon">
                <RiShoppingBasketFill></RiShoppingBasketFill>
              </li>
              <li className='cart-length'>{cartItems.length === 0 ? "" : cartItems.length}</li>
            </NavLink>

          </ul>
        </div>
        <button className='mobile-menu-icon'
          onClick={() => setIsMobile(!isMobile)}>

          {isMobile ? <FaTimes></FaTimes> : <SlMenu></SlMenu>}
        </button>

      </div>


    </div>


  )
}

export default NavigationBar