import React from 'react';
import './Popular.css';
import data from './PopularData';

import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const Popular = () => {
  const breakpoints = {
    1024: {
      slidesPerView: 4, // For Large Screens
    },
    768: {
      slidesPerView: 2, // For tablets
    },
    480: {
      slidesPerView: 1, // For mobile devices
    },
  };

  return (
    <div className='popular-component'>
      <p className='popular-watches'>Popular In Store</p>
      <Swiper
        className='slider-container'
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode, Navigation]}
        spaceBetween={-50}

        navigation={true}
        breakpoints={breakpoints}
      >
        {data.map(function (item) {
          return (

            <SwiperSlide className='swipSlide1' key={item.id}>
              <Link to={`/watch/Analog/${item.id}`}>
                <div className='box'>
                  <img className='watch-image' src={item.image} alt={item.name} />
                  <div className='watch-info'>
                    <p className='watch-name'>{item.name}</p>
                    <p className='watch-price'>{item.price}</p>
                    <p className='rates'>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </p>
                    <p className='watch-metal'>{item.metal}</p>
                    <button className='watch-button'>Explore Now</button>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Popular;
