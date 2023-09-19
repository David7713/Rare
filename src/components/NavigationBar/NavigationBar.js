import React, { useState } from 'react'
import './NavigationBar.css'
import {Link} from 'react-router-dom';
import {FaUser} from 'react-icons/fa'
import {RiShoppingBasketFill} from 'react-icons/ri'
import {BiSolidTimeFive} from 'react-icons/bi'
import {FaTimes} from 'react-icons/fa'
import {SlMenu} from 'react-icons/sl'
const NavigationBar = () => {

  const [isMobile,setIsMobile] = useState(false)
  return (
    <div>

  <div className='container'>
  <Link to={"/"} >
  <div className='logo'>
      <p className='logoIcon'><BiSolidTimeFive ></BiSolidTimeFive> <span className='brandName'>RARE</span></p>

     </div>
</Link>
 




        <ul    className={isMobile ? "pages-mobile" :'pages'}
    onClick={()=>setIsMobile(false)}  >
<Link to={"/"} className='home'>
  <li>Home</li>
</Link>
<Link to={"/shop"} className='shop'>
  <li>Shop</li>
</Link>
<Link to={"/about"} className='about'>
  <li>About</li>
</Link>
<Link to={"/contact"} className='contact'>
  <li>Contact</li>
</Link>

<Link to={"/registration"} className='registration-mobile'>
        <li className='userIcon'>Registration</li>
</Link>
<Link to={"/cart"} className='cart-mobile'>
<li className='basketIcon'>Cart</li>
</Link>


        </ul>
  



    <div className='user'>
        <ul>
        <Link to={"/registration"} className='registration'>
        <li className='userIcon'><FaUser></FaUser></li>
</Link>
<Link to={"/cart"} className='cart'>
<li className='basketIcon'><RiShoppingBasketFill></RiShoppingBasketFill></li>
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