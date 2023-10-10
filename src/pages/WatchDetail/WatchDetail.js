import React, { useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './WatchDetail.css'
import {AiFillEye} from "react-icons/ai"
const WatchDetail = ({ watches,handleAddProduct,item }) => {
  const { id, category } = useParams();
const [number,setNumber] = useState(10)
const [active,setActive] = useState("Description-Part")
useEffect(() => {
    const interval = setInterval(() => {
      setNumber(prevNumber => prevNumber + 3);
      setTimeout(() => {
        setNumber(prevNumber => prevNumber - 1);
      }, 1500);
    }, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures the effect runs once after the initial render


  // Find the correct watch based on category
  const watch = watches.find((item) => item.id === parseInt(id, 10));
  const colorStyle = {
    backgroundColor: watch.color // Set background color based on watch color
  };
  if (!watch) {
    return <div>Watch not found</div>;
  }

  return (
    <div>
        <div className='watch-detail-container'>

            <div><img className='watch-detail-image' src={watch.image}></img></div>


            <div className='watch-detail-text' > 
                    <div><p className='watch-name'>{watch.name}</p></div>
                <div><p>Price</p> <p> {watch.price}</p></div>
                <div><p>Vendor</p> <p> {watch.name}</p></div>
                <div><p>Type</p> <p> {watch.type}</p></div>
                <div><p>Size</p> <p> {watch.size}</p></div>
                <div><p>Color</p>  <div className='color-box' style={colorStyle}></div></div>
                <div><p>Material</p> <p> {watch.material}</p></div>
                <div><p>Availability</p> <p> {watch.availability}</p></div>
                <button onClick={() => handleAddProduct(watch)} className='product-button'>ADD TO CART</button>
               <div> <AiFillEye className='watch-detail-icon'></AiFillEye> {number} People are viewing now</div>


            </div>

        



        </div>
        <div className='product-categories'>
      <ul >
        <li className={active === "Description-Part" ? 'active' : ''}  onClick={()=>{setActive("Description-Part")}}>Description</li>
        <li className={active === "Shipping-Part" ? 'active' : ''} onClick={()=>{setActive("Shipping-Part")}}>Shipping & Return</li>
        <li className={active === "Review-Part" ? 'active' : ''} onClick={()=>{setActive("Review-Part")}}>Review</li>
      </ul>
    
    </div>


    {active === "Description-Part" && <div className='watch-detail-description-part'>
        
        <p>Step into a world where timekeeping becomes an art. Our watch brand stands at the intersection of classic craftsmanship and modern innovation,<br></br>
       offering a collection that embodies timeless elegance redefined. Each piece is meticulously designed, fusing intricate details with cutting-edge technology. <br></br>watches not only adorn your wrist but tell a story of sophistication and grace. Crafted from premium materials and powered by precision movements, they are more <br></br>than just timepieces; they are heirlooms in the making. Discover the allure of our watches, where every tick echoes the legacy of exquisite watchmaking.</p>

       <span>Craftsmanship and Quality</span>
       <ol>
        <li>Precision Craftsmanship</li>
        <li>High-Quality Materials</li>
        <li>Quality Assurance:</li>
        <li>Personalization </li>
       </ol>
        
        
        <p>Enter a realm where time is not just measured but celebrated. Our watch brand embodies the artistry of time, where every watch is a masterpiece waiting<br></br> to adorn your wrist. Each piece is meticulously crafted by skilled artisans, capturing the essence of precision and creativity. From intricate dial patterns <br></br>to thoughtfully designed cases, our watches exude elegance and sophistication. The seamless integration of form and function is our hallmark, ensuring <br></br>that every watch not only tells time but also tells a story. Immerse yourself in the artistry of time, and let our watches be the canvas upon which your unique moments are painted.</p>
        
        
       <span>Luxurious Materials</span>
       <ol>
        <li>Functional Elegance</li>
        <li>Modern Sophistication</li>
        <li>Innovative Designs</li>
        <li>Personalization </li>
       </ol>
        
        </div>}

    {active === "Shipping-Part" && <div>





</div>}

    {active === "Review-Part" && <div>
        Bye Guyz</div>}
    </div>
  );
};

export default WatchDetail;

{/* <div className='watch-detail-headers'>
    <p className='watch-name'>{watch.name}</p>
  
<p>Price</p>
<p>Vendor</p>
<p>Type</p>
<p>Size</p>
<p>Colour</p>
<p>Material</p>
<p>Colour</p>
<p>Availability</p>
</div>

<ul>


    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>

</ul> */}
{/* <h1>{watch.name}</h1>
<p>Price: {watch.price}</p>
<p>Metal: {watch.metal}</p>
Add more details as needed */}