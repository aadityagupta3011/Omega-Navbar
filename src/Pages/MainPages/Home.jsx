import React from "react";
import Navbar from "../components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Pagination, Navigation } from "swiper/modules";
import SecondSwiper from "../components/SecondSwiper.jsx"
import ThirdSwiper from "../components/ThirdSwiper.jsx";
import image1 from "../imagesSwiper/image1.jpg";
import image2 from "../imagesSwiper/image2.jpg";
import image3 from "../imagesSwiper/image3.jpg";
import image4 from "../imagesSwiper/image4.jpg";
import image5 from "../imagesSwiper/image5.jpg";
import image6 from "../imagesSwiper/image6.jpg";
import image7 from "../imagesSwiper/image7.jpg";
import image8 from "../images/image1.png"


const Home = () => {
  return (
    <>
      <Navbar />
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-[100vh]">
        <SwiperSlide>
          <img src={image1} alt="Slide 1" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="Slide 1" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="Slide 1" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="Slide 1" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt="Slide 1" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src={image6} alt="Slide 1" />{" "}
        </SwiperSlide>
        <SwiperSlide>
          <img src={image7} alt="Slide 1" />{" "}
        </SwiperSlide>
      </Swiper>
      <section className="relative py-[145px] md:py-[115px] p-5">
      <div className="container mx-auto md:flex">
        {/* Left Column */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">
              <span>All-rounders give more…</span>
              <br />
              <span className="text-red-600">Speed Sophistication Safety</span>
            </h2>
          </div>

          <div className="mb-8">
            <img 
              src={image8} 
              alt="Map" 
              className="w-full h-auto" 
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="mb-8">
            <p className="text-justify font-bold">
              The elevator industry innovation enabled a solution to the housing crisis for the rising population with the vertical wonder, called elevators. Omega, in the true champion style, is taking the baton forward. We, at Omega Elevators are determined to play a leading role in the coming century to support the community growth and development.
            </p>
          </div>

          <div>
            <p className="text-justify">
              Our complete range of Elevators/Escalators and Parking Solutions are manufactured with total solid system integration adhering to all the quality and safety standards. We are a vertically integrated company with state-of-the-art infrastructure. Various equipment like Gearless Motors, Driving Sheaves, Cars, Overspeed Governors, Door Locks, Microprocessor Controllers, Guide Rails, and many other necessary components are manufactured using the most modern production methods under one roof in a fully equipped plant located in Ahmedabad, India. Omega Elevators embodies the ‘Make in India’ spirit with technical sophistication and excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
    <SecondSwiper />
<section>
  
    <ThirdSwiper  />

<div className="flex items-center justify-center">
  <span className="text-red-700 font-bold  text-9xl">Since 1985</span>
</div>
</section>
<section className="relative mt-24 mb-0 md:mt-32 lg:mt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap -mx-4">
          {/* Column 1 */}
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div className="relative">
              <img
                loading="lazy"
                decoding="async"
                width="685"
                height="778"
                src="https://omega-elevators.com/sukookee/2024/08/Timeline.png"
                className="w-full h-auto"
                alt=""
              />
              {/* Icon (hidden on various screen sizes) */}
              <div className="absolute top-0 right-0 hidden lg:block xl:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="w-6 h-6"
                >
                  <path d="M14.374,15.999 L5.562,15.999 L5.562,14.374 L13.238,14.374 L0.0,1.135 L1.137,0.1 L14.374,13.236 L14.374,5.562 L15.999,5.562 L15.999,14.374 L15.999,15.999 L14.374,15.999 Z"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="mb-6">
              <h4 className="text-2xl font-bold">OMEGA ELEVATORS</h4>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Since 1985</h3>
            </div>
            <div className="mb-6">
              <p className="text-justify font-bold">
                OMEGA Elevators is the name, one can safely associate with the
                most advanced and trusted elevator brands across the country.
                Differentiated innovative hi-tech technology, quality and
                customer satisfaction are the key elements that have helped us
                scale new heights of success.
              </p>
            </div>
            <div className="mb-6">
              <p className="text-justify">
                Omega Elevators is a hallmark of reliability and outstanding
                service in the elevator industry, known for delivering superior
                service to customers in India and abroad. Our commitment to
                punctuality and excellence in providing top-notch products has
                earned us widespread satisfaction amongst our clients. The
                company’s origin traces back to the foresight of our founder, Mr.
                Kumarpal M. Desai, who anticipated the increasing need for
                vertical transportation solutions well ahead of his time.
                Inspired by his innovative foresight, Omega Elevators consistently
                leads in setting high standards in the elevator sector.
              </p>
            </div>
            <div>
              <a
                className="inline-flex items-center px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
                href="https://omega-elevators.com/about-us/"
                target="_blank"
                rel="noopener noreferrer"
              >
                More About Omega
                <svg
                  viewBox="0 0 13 20"
                  className="ml-2"
                >
                  <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="my-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold">UNIQUE SELLING POINTS</h2>
          <p className="mt-4 text-2xl font-bold">
            We have always believed in creating our own technical differentiation, unique selling points, data driven insights, and strong after-sales service which has helped us to grow exponentially in the vertical transportation industry for over four decades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <h5 className="text-xl font-semibold underline">Get more, with fewer resources</h5>
            </div>
            <p className="text-gray-700">
              We have engineered our elevators with superior technology to make more spacious lifts despite having small lift shaft constraints.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <h5 className="text-xl font-semibold underline">Slot Less bottom sills</h5>
            </div>
            <p className="text-gray-700">
              Stainless steel slot less bottom sills for elevators. Elegant design and smooth elevator operation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <h5 className="text-xl font-semibold underline">Gearless Plus</h5>
            </div>
            <p className="text-gray-700">
              Smooth Travel, Zero Maintenance, Speed up to 5 m/sec. Eco-friendly, oil-free operation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <h5 className="text-xl font-semibold underline">Protection against power fluctuations</h5>
            </div>
            <p className="text-gray-700">
              The proprietary protection system is designed to protect the electronics within the control panel in case of power fluctuations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <h5 className="text-xl font-semibold underline">Emergency Rescue Button in Lift Car</h5>
            </div>
            <p className="text-gray-700">
              The emergency rescue button is designed for self-rescue operation under specific conditions for enhanced safety:
              <ul className="list-disc pl-5 mt-2">
                <li>The button is kept pressed continuously until the lift reaches the nearest floor.</li>
                <li>It operates if the elevator car and counterweight are in an unbalanced condition.</li>
              </ul>
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <h5 className="text-xl font-semibold underline">Eco - Friendly/ Green vertical design</h5>
            </div>
            <p className="text-gray-700">
              Our PMS motor manufactured and developed in-house is oil-free and features a sustainable, eco-friendly innovative technology design.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <h5 className="text-xl font-semibold underline">PLC based control system with close loop</h5>
            </div>
            <p className="text-gray-700">
              The control system comes with highly advanced features which ensure complete safety with smooth travel and a high level of floor levelling accuracy.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <h5 className="text-xl font-semibold underline">AI based 'self' elevator car parking on designated floor</h5>
            </div>
            <p className="text-gray-700">
              An important feature for high-end buildings with an AI-based travel pattern recognition algorithm resulting in intelligent elevator positioning/parking on different floors during different times of the day to reduce the waiting time.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <h5 className="text-xl font-semibold underline">LMS (Lift Monitoring System)</h5>
            </div>
            <p className="text-gray-700">
              LMS, also known as ‘Lift Monitoring System’ or ‘Smart Elevator,’ is a major accomplishment for Omega Elevators. This proprietary software developed by us makes the elevator a smart machine with several diagnostic and analytical capabilities.
            </p>
          </div>
        </div>
      </div>
    </section>



    
    </>
  );
};

export default Home;
