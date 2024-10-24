'use client';

import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto mt-4  ">
      <Slider {...settings}>
        <div>
          <Image
            src="/images/slider.png"
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', maxHeight: '425px' }}
          />
        </div>
        <div>
          <Image
            src="/images/slider.png"
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', maxHeight: '425px' }}
          />
        </div>
      </Slider>
    </div>
  );
}
