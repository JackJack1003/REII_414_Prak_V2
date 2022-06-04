import React, { useState } from 'react';
import banner1 from './assets/banner1.png';
import banner2 from './assets/banner2.png';
import banner3 from './assets/banner3.png';

function Banner() {
  const bannerData = [
    { image: banner1 },
    { image: banner2 },
    { image: banner3 },
  ];
  const [current, setCurrent] = useState(0);
  const length = bannerData.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="banner">
      <button onClick={prevSlide}> Prev </button>
      <button onClick={nextSlide}> Next </button>
      {bannerData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && <img src={slide.image} />}
          </div>
        );
      })}
    </div>
  );
}

export default Banner;
