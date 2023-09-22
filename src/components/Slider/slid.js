import React from 'react';
import './Slider.css';
import HeroSlider, { Slide, ButtonsNav } from 'hero-slider';
import slider1 from '../Slider/Slider Assets/slider1.png';
import slider2 from '../Slider/Slider Assets/slider2.png';
import slider3 from '../Slider/Slider Assets/slider3.png';


const Slider = () => {
  const slider1Url = `url(${slider1})`;
  const slider2Url = `url(${slider2})`;
  const slider3Url = `url(${slider3})`;

  const imageStyle = {
    width: '100%',
    height: '100vh',
  };

  return (
    <div>
      <HeroSlider
        slidingAnimation="left_to_right"
        orientation="horizontal"
        initialSlide={1}
        onBeforeChange={(previousSlide, nextSlide) =>
          console.log('onBeforeChange', previousSlide, nextSlide)
        }
        onChange={(nextSlide) => console.log('onChange', nextSlide)}
        onAfterChange={(nextSlide) => console.log('onAfterChange', nextSlide)}
        style={{
          backgroundColor: 'rgba(0,0,0,0.33)',
        }}
        settings={{
          slidingDuration: 250,
          slidingDelay: 100,
          shouldAutoplay: true,
          shouldDisplayButtons: true,
          autoPlayDuration: 1000,
        }}
      >
        <Slide background={{ backgroundImage: slider1Url, ...imageStyle }} className="slider-image"></Slide>
        <Slide background={{ backgroundImage: slider2Url, ...imageStyle }} className="slider-image"></Slide>
        <Slide background={{ backgroundImage: slider3Url, ...imageStyle }} className="slider-image"></Slide>

        <ButtonsNav /> {/* Use the ButtonsNav component without inline styles */}
      </HeroSlider>
    </div>
  );
};

export default Slider;
