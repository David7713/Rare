import React, { useState } from 'react'
import './NavigationBar.css'
import {Link} from 'react-router-dom';
import {FaUser} from 'react-icons/fa'
import {RiShoppingBasketFill} from 'react-icons/ri'
import {FaTimes} from 'react-icons/fa'
import {BiSolidTimeFive} from 'react-icons/bi'
import {BsWatch} from 'react-icons/bs'
import {SlMenu} from 'react-icons/sl'
import Cart from '../../pages/Cart/Cart';
const NavigationBar = ({cartItems,handleAddProduct,handleCartClear,handleRemoveProduct}) => {

  const [isMobile,setIsMobile] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div>

  <div className='container'>
  <Link to={"/"} >
  <div className='logo'>
      <p className='logoIcon'><BsWatch ></BsWatch> <span className='brandName'>RARE</span></p>

     </div>
</Link>
 




        <ul    className={isMobile ? "pages-mobile" :'pages'}
    onClick={()=>setIsMobile(false)}  >
<Link to={"/"} className='home'>
  <li>HOME</li>
</Link>
<Link to={"/shop"} className='shop'>
  <li>SHOP</li>
</Link>
<Link to={"/about"} className='about'>
  <li>ABOUT</li>
</Link>
<Link to={"/contact"} className='contact'>
  <li>CONTACT</li>
</Link>

<Link to={"/registration"} className='registration-mobile'>
        <li className='userIcon'>REGISTRATION</li>
</Link>
<Link to={"/cart"} className='cart-mobile'>
<li className='basketIcon'>CART</li>
</Link>


        </ul>
  



    <div className='user'>
        <ul>
        <Link to={"/registration"} className='registration'>
        <li className='userIcon'><FaUser></FaUser></li>
</Link>
<Link to="/cart" className="cart" >
        <li className="basketIcon">
          <RiShoppingBasketFill></RiShoppingBasketFill>
        </li>
<li className='cart-length'>{cartItems.length === 0 ? "" : cartItems.length}</li>
</Link>
    
        </ul>
    </div>
        <button className='mobile-menu-icon'
        onClick={()=>setIsMobile(!isMobile)}>

          {isMobile ? <FaTimes></FaTimes> : <SlMenu></SlMenu>}
        </button>
   
  </div>


    </div>


  )
}

export default NavigationBar