import React from 'react'
import './About.css'
import Footer from '../../components/Footer/Footer';
import BackToTop from '../../components/BackToTop/BackToTop';
import AboutImage from './About Assets/about.png'
import WatchStyleImage from './About Assets/watch-style.png'
import HandMadeImage from './About Assets/hand-made.jpg'
import {FiWatch} from 'react-icons/fi'
import {BsWatch} from 'react-icons/bs'
import {GiCheckMark} from 'react-icons/gi'
import {BsShieldFillCheck} from 'react-icons/bs'
import {MdStarRate} from 'react-icons/md'
import {MdOutlineCompareArrows} from 'react-icons/md'
import {AiFillCheckCircle} from 'react-icons/ai'
import {TbDeviceWatchBolt} from 'react-icons/tb'
const About = () => {
  return (
    <div>


<div className='about-part'>

<div className='about-text'>
  <p>ABOUT US</p>
</div>
<img className='about-image' src={AboutImage}></img>

</div>
<div className='watch-style-part'>
    <div className='watch-style-text-part'>
     <h1>Extraordinary watch style</h1>
    <span>Your Passion is Watch Products</span>
    <p>Our watches are more than just timekeepers; they are reflections of your style and taste.  <br></br> Crafted with precision and passion, Rare watches embody luxury and sophistication, making.<br></br> a statement with every tick. Rare watches are a testament to opulence and refinement.<br>
    </br> Explore our collection today and adorn your wrist with the epitome of style: </p>
   
    <ul>
      <li> <FiWatch></FiWatch>&nbsp;Latest Designs </li>
      <li><BsWatch></BsWatch>&nbsp;Brands that Matter</li>
      <li> <GiCheckMark></GiCheckMark>&nbsp;Quality that Inspiress</li>
    </ul>
    </div>
  <img className='watch-style-image' src={WatchStyleImage}></img>
</div>


   <p className='journey-part'>Our Journey So Far...</p>

    <div className='about-box-container'>

        <div><FiWatch className='box-icon'></FiWatch>
          <span>Founded in 2010</span>
          <p> Established in 2010, we have a rich history  <br></br>of crafting exceptional timepieces <br></br>combining traditional craftsmanship <br></br> with modern design.
</p>
        
        </div>
        <div>
        <BsShieldFillCheck className='box-icon'></BsShieldFillCheck>
          <span>Trusted by Millions</span>
          <p>  Our brand is trusted by millions worldwide <br></br>a testament to our commitment<br></br> to quality, reliability, <br></br> and customer satisfaction
</p>
        </div>
        <div>
        <MdStarRate className='box-icon'></MdStarRate>
          <span>Quality that Speaks</span>
          <p>   Our watches speak volumes through<br></br>their superior quality, attention to detail<br></br> and exquisite craftsmanship <br></br> making a statement on your wrist.
</p>
        </div>
        <div>
        <MdOutlineCompareArrows className='box-icon'></MdOutlineCompareArrows>
          <span>Defining Fashion </span>
          <p> We redefine fashion and apparel<br></br>trends, blending style with functionality<br></br> a in our watches  <br></br>  and ready-made apparels.
</p>
        </div>
        <div>
        <AiFillCheckCircle className='box-icon'></AiFillCheckCircle>
          <span>Apparels and Readymades</span>
          <p> Explore our curated collection of readymade apparel<br></br>quickshop essentials, and trendy accessories<br></br> all designed for fashion  <br></br> enthusiasts on the go.
</p>
        </div>
        <div>
        <TbDeviceWatchBolt className='box-icon'></TbDeviceWatchBolt>
          <span>Quickshop Accessories</span>
          <p> Elevate your style with our meticulously<br></br>curated accessories, designed to<br></br>complement your look  <br></br> and add a touch of sophistication. 
</p>
        </div>
    </div>





    <div className='hand-made-part'>
    <img className='hand-made-image' src={HandMadeImage}></img>


    <div className='hand-made-text'>
      <p>Handmade Elegance by Rare</p>
      <span>At Rare, we take pride in the artistry of our timepieces. Crafted with passion and precision,<br></br> our watches are meticulously handmade by skilled artisans. Each watch is a <br></br> testament to our commitment to craftsmanship and attention to detail. <br></br>Explore the world of Rare, where every tick is a symphony of dedication and elegance.</span>
    </div>

    </div>

<Footer></Footer>
<BackToTop></BackToTop>

    </div>
  )
}

export default About