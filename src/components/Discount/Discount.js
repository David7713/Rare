import React from 'react';
import './Discount.css';

import Elegant from "./Discount Assets/Elegant.png";
import Luxury from "./Discount Assets/Luxury.png";
import Premium from "./Discount Assets/Premium.jpg";

const Discount = () => {
  return (
    <div>
      <div className='discount-container'>
        <div className='elegant'>
          <img  src={Elegant} alt="Elegant" />
          <div className="text-overlay">Elegant Watch Sale<br></br>
            20% Discount
          </div>
        </div>
        <div className='luxury'>
          <img src={Luxury} alt="Luxury" />
          <div className="text-overlay">Luxury Timepiece Deals
            <br></br>
            30% Discount

          </div>
        </div>
        <div className='premium'>
          <img src={Premium} alt="Premium" />
          <div className="text-overlay">Premium Watch Offers
            <br></br>
            25% Discount</div>
        </div>
      </div>
    </div>
  );
}

export default Discount;
