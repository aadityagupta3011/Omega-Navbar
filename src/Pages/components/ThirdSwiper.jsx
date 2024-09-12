import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './ThirdSwiper.css';

import image1 from '../LiftImages/image1.jpg'
import image2 from '../LiftImages/image2.jpg'
import image3 from '../LiftImages/image3.jpg'
import image4 from '../LiftImages/image4.jpg'
import image5 from '../LiftImages/image5.jpg'
import image6 from '../LiftImages/image6.jpg'
import image7 from '../LiftImages/image7.jpg'
import image8 from '../LiftImages/image8.jpg'
import image9 from '../LiftImages/image9.jpg'
import image10 from '../LiftImages/image10.jpg'


// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-12 "
      >
      <SwiperSlide > <img src={image1} alt="" /> </SwiperSlide>
      <SwiperSlide> <img src={image2} alt="" /> </SwiperSlide>
      <SwiperSlide><img src={image3} alt="" /></SwiperSlide>
      <SwiperSlide><img src={image4} alt="" /></SwiperSlide>
      <SwiperSlide><img src={image5} alt="" /></SwiperSlide>
      <SwiperSlide><img src={image6} alt="" /></SwiperSlide>
      <SwiperSlide><img src={image7} alt="" /></SwiperSlide>
      <SwiperSlide><img src={image8} alt="" /></SwiperSlide>
      <SwiperSlide><img src={image9} alt="" /></SwiperSlide>
      <SwiperSlide><img src={image10} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
