import React, { useState, useEffect } from 'react';
import './WatchDetail.css'

import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer'
import BackToTop from '../../components/BackToTop/BackToTop'

import WatchDetailImage from './WatchDetail Assets/watchDetail.png'

import { AiFillEye } from "react-icons/ai"
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'

const WatchDetail = ({ watches, handleAddProduct, item }) => {

  const { id, category } = useParams();
  const [number, setNumber] = useState(10)
  const [active, setActive] = useState("Description-Part")
  useEffect(() => {
    const interval = setInterval(() => {
      setNumber(prevNumber => prevNumber + 3);
      setTimeout(() => {
        setNumber(prevNumber => prevNumber - 1);
      }, 1500);
    }, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);



  const watch = watches.find((item) => item.id === parseInt(id, 10));
  const colorStyle = {
    backgroundColor: watch.color // Set background color based on watch color
  };
  if (!watch) {
    return <div>Watch not found</div>;
  }

  return (
    <div>


      <div className='watch-detail-main-part'>
        <div className='watch-detail-main-text'>
          <p>PRODUCTS</p>

        </div>
        <img className='watch-detail-main-image' src={WatchDetailImage} alt='watch-detail-main-image'></img>



      </div>


      <div className='watch-detail-container'>
        <div><img className='watch-detail-image' src={watch.image}></img></div>
        <div className='watch-detail-text' >
          <div><p className='watch-detail-name'>{watch.name}</p></div>
          <div><p>Price</p> <p> {watch.price}</p></div>
          <div><p>Vendor</p> <p> {watch.name}</p></div>
          <div><p>Type</p> <p> {watch.type}</p></div>
          <div><p>Size</p> <p> {watch.size}</p></div>
          <div><p>Color</p>  <div className='color-box' style={colorStyle}></div></div>
          <div><p>Material</p> <p> {watch.material}</p></div>
          <div><p>Availability</p> <p> {watch.availability}</p></div>
          <button onClick={() => handleAddProduct(watch)} className='addToCart-button'>ADD TO CART</button>
          <div> <AiFillEye className='watch-detail-icon'></AiFillEye> {number}  People  are viewing now</div>
        </div>
      </div>

      <div className='product-categories'>
        <ul >
          <li className={active === "Description-Part" ? 'active' : ''} onClick={() => { setActive("Description-Part") }}>Description</li>
          <li className={active === "Shipping-Part" ? 'active' : ''} onClick={() => { setActive("Shipping-Part") }}>Shipping & Return</li>
          <li className={active === "Review-Part" ? 'active' : ''} onClick={() => { setActive("Review-Part") }}>Review</li>
        </ul>

      </div>


      {active === "Description-Part" && <div className='watch-detail-description-part'>
        <h4>Timeless Elegance, Exceptional Quality</h4>
        <p>Step into a world where timekeeping becomes an art. Our watch brand stands at the intersection of classic craftsmanship and modern innovation,
          offering a collection that embodies timeless elegance redefined.</p>
        <p> Each piece is meticulously designed, fusing intricate details with cutting-edge technology. watches not only adorn your wrist but tell a story of sophistication and grace. Crafted from premium materials and powered by precision movements, they are more than just timepieces; they are heirlooms in the making. Discover the allure of our watches, where every tick echoes the legacy of exquisite watchmaking.
        </p>
        <p>Enter a realm where time is not just measured but celebrated. Our watch brand embodies the artistry of time, where every watch is a masterpiece waiting<br></br> to adorn your wrist. Each piece is meticulously crafted by skilled artisans, capturing the essence of precision and creativity. From intricate dial patterns <br></br>to thoughtfully designed cases, our watches exude elegance and sophistication. The seamless integration of form and function is our hallmark, ensuring <br></br>that every watch not only tells time but also tells a story. Immerse yourself in the artistry of time, and let our watches be the canvas upon which your unique moments are painted.</p>

      </div>}

      {active === "Shipping-Part" && <div className='watch-detail-shipping-part'>
        <h4>Return Policy</h4>
        <p>You may return most new, unopened items within 30 days of delivery for a full refund. We'll also pay the return shipping costs if the return is a result of our error (you received an incorrect or defective item, etc.).<br></br></p>
        <p>You should expect to receive your refund within four weeks of giving your package to the return shipper, however, in many cases you will receive a refund more quickly. This time period includes the transit time for us to receive your return from the shipper (5 to 10 business days), the time it takes us to process your return once we receive it (3 to 5 business days), and the time it takes your bank to process our refund request (5 to 10 business days).</p>

        <h4>Shipping Details</h4>
        <p>We can ship to virtually any address in the world. Note that there are restrictions on some products, and some products cannot be shipped to international destinations.</p>
        <p>When you place an order, we will estimate shipping and delivery dates for you based on the availability of your items and the shipping options you choose. Depending on the shipping provider you choose, shipping date estimates may appear on the shipping quotes page.</p>
        <p>Please also note that the shipping rates for many items we sell are weight-based. The weight of any such item can be found on its detail page. To reflect the policies of the shipping companies we use, all weights will be rounded up to the next full pound.</p>



      </div>}

      {active === "Review-Part" && <div className='watch-detail-review-part'>
        <h4>Customer's Review</h4>
        <div className='watch-detail-main-review'>
          <span> <AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiOutlineStar></AiOutlineStar></span>
          <p>Based on 2 Review</p>
        </div>

        <div className='watch-detail-customer-review'>
          <span> <AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiOutlineStar></AiOutlineStar></span>
          <p>A Timepiece Marvel</p>
          <p>I recently purchased a watch from this e-commerce store, and I am utterly enamored with my new timepiece. The selection available on the website is a testament to their dedication to curating the finest watches in the market.</p>
          <p>David Harutyunyan on August 13,2023</p>
          <span> <AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiOutlineStar></AiOutlineStar></span>
          <p>Great Watch, Impressed!</p>
          <p>I bought a watch from this website, and it's really good. I'm impressed with the quality and how it looks. It's comfortable to wear and keeps time well. Happy with my purchase!</p>
          <p>Calvin Harris on September 23,2023</p>
        </div>
      </div>}
      <Footer></Footer>
      <BackToTop></BackToTop>
    </div>
  );
};

export default WatchDetail;

