import React, { useState } from 'react'
import './Shop.css'
import { Link } from 'react-router-dom';
import Shopimage from './Shop Assets/shop.png'
import BackToTop from '../../components/BackToTop/BackToTop'
import Analogdata from './AnalogData';
import MechanicalData from './MechanicalData';
import AutomatData from './AutomatData';
import Footer from '../../components/Footer/Footer'
import { AiFillStar } from 'react-icons/ai';

const Shop = ({handleAddProduct}) => {
  const [active,setActive] = useState("Analog-Part")
 
  return (
    <>
    <div className='shop-part'>

      <div className='shop-text'>
        <p>COLLECTION</p>

      </div>
      <img className='shop-image' src={Shopimage}></img>


   


    </div>
    <div className='product-categories'>
      <ul >
        <li className={active === "Analog-Part" ? 'active' : ''}  onClick={()=>{setActive("Analog-Part")}}>ANALOG</li>
        <li className={active === "Mechanical-Part" ? 'active' : ''} onClick={()=>{setActive("Mechanical-Part")}}>MECHANICAL</li>
        <li className={active === "Automat-Part" ? 'active' : ''} onClick={()=>{setActive("Automat-Part")}}>AUTOMAT</li>
      </ul>
    
    </div>



{active === "Analog-Part" && 
<div className='watches-container'>
    {Analogdata.map(function (item) {
        return (
            <div className='product-main-container' key={item.id}>
         <Link to={`/watch/Analog/${item.id}`}>
                <div className='product-container'>
                    <img className='product-image' src={item.image} alt={item.name} />
                    <div className='product-info'>
                        <p className='product-name'>{item.name}</p>
                        <p className='product-price'>{item.price}</p>
                        <p className='rates'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </p>
                        <p className='product-material'>{item.material}</p>
                    </div>
                </div>
                </Link>
                        <button onClick={()=>handleAddProduct(item)} className='product-button'>ADD TO CART</button>
            </div>
        );
    })}
</div>}





{active === "Mechanical-Part" &&
<div className='watches-container'>
    {MechanicalData.map(function (item) {
        return (
            <div className='product-main-container' key={item.id}>
              <Link to={`/watch/Mechanical/${item.id}`}>
                <div className='product-container'>
                    <img className='product-image' src={item.image} alt={item.name} />
                    <div className='product-info'>
                        <p className='product-name'>{item.name}</p>
                        <p className='product-price'>{item.price}</p>
                        <p className='rates'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </p>
                        <p className='product-material'>{item.material}</p>
                    </div>
                </div>
                </Link>
                        <button onClick={()=>handleAddProduct(item)}  className='product-button'>ADD TO CART</button>
            </div>
        );
    })}
</div>}






{active === "Automat-Part" &&
<div className='watches-container'>
    {AutomatData.map(function (item) {
        return (
            <div className='product-main-container' key={item.id}>
                        <Link to={`/watch/Automat/${item.id}`}>
                <div className='product-container'>
                    <img className='product-image' src={item.image} alt={item.name} />
                    <div className='product-info'>
                        <p className='product-name'>{item.name}</p>
                        <p className='product-price'>{item.price}</p>
                        <p className='rates'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </p>
                        <p className='product-material'>{item.material}</p>
                    </div>
                </div>
                </Link>
                        <button  onClick={()=>handleAddProduct(item)} className='product-button'>ADD TO CART</button>
            </div>
        );
    })}
</div>}





<Footer></Footer>
<BackToTop></BackToTop>
    </>
  )
}

export default Shop