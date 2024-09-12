import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './index.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper cursor-pointer"
      >
        <SwiperSlide className=' h-[15vh] font-bold text-2xl '>Wide Range </SwiperSlide>
        <SwiperSlide className=' h-[15vh] font-bold text-2xl '>Best in Class Safty Features</SwiperSlide>
        <SwiperSlide className=' h-[15vh] font-bold text-2xl '>Enhancing the Brand Value of you Property</SwiperSlide>
        <SwiperSlide className=' h-[15vh] font-bold text-2xl '>Slot Less Bottom Track</SwiperSlide>
        <SwiperSlide className=' h-[15vh] font-bold text-2xl '>Wide Range and Ready to install Facility</SwiperSlide>
        <SwiperSlide className=' h-[15vh] font-bold text-2xl '>Services Provided Across 365 Days</SwiperSlide>
        <SwiperSlide className=' h-[15vh] font-bold text-2xl '>Advance Design With Safty and Speed</SwiperSlide>
        <SwiperSlide className=' h-[15vh] font-bold text-2xl '>Power Saving and Low Operation Codt</SwiperSlide>
      </Swiper>
    </>
  );
}
