import './Slider.css';
import React, { useRef, useState } from 'react';
import slider1 from '../Slider/Slider Assets/slider1.png';
import slider2 from '../Slider/Slider Assets/slider2.png';
import slider3 from '../Slider/Slider Assets/slider3.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const Slider = () => {
  return (
<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          
          <div className='text-container'>
          <h1 className='watchName'>Alluring</h1>
          <p className='watchDiscount'>Exclusive Officer -20% Off This Week</p>
          <br></br>
          <span className='watchDescription'>Expanding the offering is the choice between a leather strap or a metal brace at <br></br>
                                              bringing the total new look. Black-tone stainless steel case with a blak rubber strap. <br></br>
                                              Scratch free saphire crystal.
   </span>

      <ul>
        <li className='watchDescription'>Starting @</li>
        <li className='watchPrice'>$250.00</li>
      </ul>
    

          <div className="buyButton">Buy Now</div>


          </div>
          
          
          
          
          <img src={slider1}></img>
     
        </SwiperSlide>
        <SwiperSlide>
        <div className='text-container2'>
          <h1 className='watchName'>Attractive</h1>
          <p className='watchDiscount'>Exclusive Officer -30% Off This Week</p>
          <br></br>
          <span className='watchDescription'>The watch bracelet gives a much far golder personality.Dress watch style.<br></br>
        Swiss made luxury watch.Stainless steel case with a brown leather strap.<br></br>
      Scratch resistant sapphire crystal
   </span>

      <ul>
        <li className='watchDescription'>Starting @</li>
        <li className='watchPrice'>$350.00</li>
      </ul>
    

          <div className="buyButton">Buy Now</div>


          </div>
          
          
          <img src={slider2}></img></SwiperSlide>
        <SwiperSlide>
        <div className='text-container3'>
          <h1 className='watchName'>Gorgious</h1>
          <p className='watchDiscount'>Exclusive Officer -30% Off This Week</p>
          <br></br>
          <span className='watchDescription'>The watch bracelet gives a much far golder personality.Dress watch style.<br></br>
        Swiss made luxury watch.Stainless steel case with a brown leather strap.<br></br>
      Scratch resistant sapphire crystal
   </span>

      <ul>
        <li className='watchDescription'>Starting @</li>
        <li className='watchPrice'>$100.00</li>
      </ul>
    

          <div className="buyButton">Buy Now</div>


          </div>
          
          <img src={slider3}></img></SwiperSlide>
     
      </Swiper>
  )
}

export default Slider