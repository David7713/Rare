import React from 'react'
import './Parallax.css'
import { Link } from 'react-router-dom'
import parallaxBackground from './Parallax Assets/ParallaxBackground.png'
import watch from './Parallax Assets/watchimg.png'
const Parallax = () => {
    return (
        <div className='wrapper'>
            <div className='parallax-part'>
                <img className='parallax-image' src={parallaxBackground} alt='mechanism'></img>
                <h1 className='parallax-title'>Discover the Essence of Luxury</h1>
                <Link to={"/shop"} >   <button className='shop-button'>SHOP NOW</button> </Link>

            </div>
            <section className='watch-section'>
                <p className='watch-section-info'>
                    <span className='watch-name'>Roman or Numeral</span>
                    Limited Edition of 200 pieces world-wide. Watch Big Bang, 361.PE.2010.RW.1104 The stainless steel case and band are thick and prominent, creating a durable feel on the wrist. However, the dial is much more whimsical <br></br> <br></br>
                    Accurate and Comfortable Imported Japanese quartz movement ensures precise time keeping. Its classic design of multi display watches and comfortable silicone material can provide to users excellent outdoor experiences
                    <Link to={"/shop"} > <button className='watch-button'>SHOP NOW</button></Link></p>
                <img className='watch-img' src={watch} alt='Luxury-Watch'></img>
            </section>

        </div>
    )
}

export default Parallax