import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import autoplay styles

import './index.css';

// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';

import image1 from '../images/image3.png';
import image2 from '../images/image4.png';
import image3 from '../images/image5.png';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true} // Enables infinite loop
        autoplay={{
          delay: 3000, // Delay between slides in milliseconds (3 seconds)
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]} // Add Autoplay module
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image1} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
