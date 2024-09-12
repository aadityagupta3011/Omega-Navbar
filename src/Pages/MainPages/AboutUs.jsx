import React from 'react'
import Navbar from '../components/Navbar'
import image2 from "../images/image2.png"
import FourthSwiper from "../components/FourthSwiper.jsx"

const AboutUS = () => {
  return (
    <>
    
    <Navbar/>
    <section>
      
    <div className="relative min-h-[480px] bg-[#121c22]">
  <div className="absolute inset-0 z-0">
    <img 
      src={image2} 
      alt="" 
      className="w-full h-full object-cover" 
    />
  </div>
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-white absolute left-5 text-4xl md:text-5xl lg:text-6xl font-bold">
        About Us
      </h1>
    </div>
  </div>
</div>
    </section>

    <section className="py-10 bg-white">

      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Column - Image */}
          <div className="w-full lg:w-1/2">
            <img
              loading="lazy"
              decoding="async"
              width="460"
              height="600"
              src="https://omega-elevators.com/sukookee/2024/08/about-us-1.jpg"
              alt="About Us"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column - Text */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h4 className="text-2xl font-semibold text-gray-800">
              A Little About Us
            </h4>
            <h6 className="text-lg font-bold text-gray-700">
              A note from our founder
            </h6>
            <div className="h-4"></div>
            <p className="text-gray-900 font-bold italic">
              “When you see Omega’s Elevators in motion, you witness the
              performance of a machine that takes you to heights of engineering
              excellence. Come, share a world of imagination in unmatched speed
              with total safety”. – Kumarpal M. Desai, MTech IIT
            </p>
            <p className="text-gray-700">
              OMEGA Elevators is recognized as one of the most advanced and
              trusted elevators brands nationwide known for reliability,
              efficiency, and the highest standards of quality. The foundation
              of our success lies in our differentiated hi-tech technology,
              unwavering commitment to quality, and a dedicated focus on
              customer satisfaction. Our team takes pride in delivering
              exceptional service to our customers in India and abroad.
            </p>
            <p className="text-gray-700">
              Our success story traces back to the visionary dream of Mr.
              Kumarpal M. Desai, the founder of Omega, who foresaw the need for
              vertical transportation ahead of his time. Just after we started
              our journey, elevators became mandatory for all buildings with G+3
              (ground plus 3 floors). Throughout our journey, we have always
              adhered to a customer-centric policy. The founding family members
              and the original 56 employees fondly recall one of the early
              elevator models, the <b>‘Alpha Model’</b>. It was a budget-friendly
              design, a plain vanilla model for the community that could be mass
              produced. This helped urbanization and commercial development in
              the 80’s.
            </p>
            <p className="text-gray-700">
              <b>OMEGA is now one of the top 5 elevators manufacturers in India.</b> 
              We have our installed base and company centers all across India, 
              from the east to the west and north to the south. We have customers 
              across several sectors such as high-rise buildings, automobile, 
              commercial, residential buildings, notable celebrity homes, 
              integrated multi-unit townships, pharmaceuticals, heavy equipment 
              manufacturing, bungalows, hospitals, healthcare, manufacturing, 
              and government buildings including the Gujarat Vidhansabha, the 
              Rashtrapati Bhavan at New Delhi, the nation’s capital. Proudly 
              embodying the <b>‘Make in India’</b> spirit, we operate as a vertically 
              integrated production facility and continuously strive to advance 
              with cutting-edge technology.
            </p>
            <p className="text-gray-700">
              Our commitment to stay at the forefront of innovation is evident 
              in our <b>Smart Elevator technology, AI integration, touchless interfaces,</b> 
              and the incorporation of the latest elevator technology trends. 
              OMEGA’s technological foresight and dedication to excellence has 
              solidified our position as a leading force in the elevator industry.
            </p>

            {/* Icon List */}
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 19.4 19.4"
                  className="w-5 h-5 mr-2 fill-current text-blue-500"
                >
                  <g transform="translate(1120.5 4876.904)">
                    <g transform="translate(2 2)">
                      <path d="M-1113.4-4866.4L-1113.4-4866.4c-0.3,0.3-0.8,0.3-1.1,0l-2.4-2.4c-0.3-0.3-0.3-0.8,0-1l0,0c0.3-0.3,0.8-0.3,1.1,0l1.9,1.9   l0.5,0.5C-1113.2-4867.1-1113.2-4866.7-1113.4-4866.4z"></path>
                      <path d="M-1108.8-4871.1l-4.7,4.7l0,0c-0.3,0.3-0.8,0.3-1,0l-0.5-0.5l1.1-1.1l4.1-4.2c0.3-0.3,0.8-0.3,1,0l0,0   C-1108.5-4871.9-1108.5-4871.4-1108.8-4871.1z"></path>
                      <path d="M-1112.8-4878.9c-7.3,0-9.7,2.4-9.7,9.7c0,7.3,2.4,9.7,9.7,9.7c7.3,0,9.7-2.4,9.7-9.7   C-1103.1-4876.5-1105.6-4878.9-1112.8-4878.9z M-1112.8-4860.5c-6.6,0-8.8-2.2-8.8-8.8c0-6.6,2.2-8.8,8.8-8.8   c6.6,0,8.8,2.2,8.8,8.8S-1106.2-4860.5-1112.8-4860.5z"></path>
                    </g>
                  </g>
                </svg>
                An ISO 9001:2015 and ISO 45001-2018 and CE Certified Company
              </li>
              <li className="flex items-center text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 19.4 19.4"
                  className="w-5 h-5 mr-2 fill-current text-blue-500"
                >
                  <path d="M0 0h19.4v19.4H0z" fill="none" />
                </svg>
                Branches all over India in 45 locations
              </li>
              <li className="flex items-center text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 19.4 19.4"
                  className="w-5 h-5 mr-2 fill-current text-blue-500"
                >
                  {/* Add the appropriate SVG path content here */}
                  <path d="M0 0h19.4v19.4H0z" fill="none" />
                  {/* Your SVG content for other items */}
                </svg>
                Designed, Installed, and Maintained more than 15,000 Elevators
              </li>
              <li className="flex items-center text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 19.4 19.4"
                  className="w-5 h-5 mr-2 fill-current text-blue-500"
                >
                  {/* Add the appropriate SVG path content here */}
                  <path d="M0 0h19.4v19.4H0z" fill="none" />
                  {/* Your SVG content for other items */}
                </svg>
                Factory set up at Asangaon, Mumbai – India
              </li>
              <li className="flex items-center text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 19.4 19.4"
                  className="w-5 h-5 mr-2 fill-current text-blue-500"
                >
                  {/* Add the appropriate SVG path content here */}
                  <path d="M0 0h19.4v19.4H0z" fill="none" />
                  {/* Your SVG content for other items */}
                </svg>
                Sole Distributor of IGV SPA Italy
              </li>
              <li className="flex items-center text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 19.4 19.4"
                  className="w-5 h-5 mr-2 fill-current text-blue-500"
                >
                  {/* Add the appropriate SVG path content here */}
                  <path d="M0 0h19.4v19.4H0z" fill="none" />
                  {/* Your SVG content for other items */}
                </svg>
                Exporter of Elevators to more than 8 countries
              </li>
            </ul>
            <div>
        <FourthSwiper />
              

            </div>
          </div>
        </div>


      </div>

    </section>


    <section className="relative w-full bg-[#E1E6E9] overflow-hidden">
      <div className="flex flex-col items-center gap-8 py-12 px-4 md:px-0 max-w-screen-xl mx-auto">
        {/* Vision Section */}
        <div className="flex flex-col md:flex-row justify-between w-full">
          {/* Vision Content */}
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold">Vision</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>
                  We envision becoming the most prominent and leading
                  manufacturer of Vertical Transportation Solutions with the
                  commitment to provide user-friendly, comfortable,
                  cost-effective products to our clients/customers with a
                  world-class service experience.
                </strong>
              </li>
              <li>
                <strong>
                  We strive to offer our customers the best and most innovative
                  products and services, a wide range of design selections, and
                  the utmost comfort during their lift car ride. We are
                  consistently the most customer-centric company globally, where
                  customers can find and discover anything they want to buy
                  regarding their vertical transportation requirements.
                </strong>
              </li>
            </ul>
          </div>

          {/* Mission Content */}
          <div className="w-full md:w-1/2 space-y-4 mt-8 md:mt-0 bg-gray-900 p-10 text-white">
            <h2 className="text-3xl font-bold text-red-800">Mission</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>
                  Our mission is to provide customers with safe, smooth elevator
                  experiences that prioritize quality and accessibility. As an
                  Indian multinational corporation, Omega is dedicated to
                  delivering excellent services to customers and clients,
                  ensuring satisfaction with Omega Elevator products.
                </strong>
              </li>
              <li>
                <strong>
                  We aim to lead in innovation, technology, speed, and safety,
                  creating elevators that combine the best technology with
                  customized user-friendly design. Omega Elevators innovates to
                  be a trendsetter and market leader in the industry by offering
                  cutting-edge solutions that enhance the overall elevator
                  experience for users.
                </strong>
              </li>
            </ul>
          </div>
        </div>

        
      </div>
    </section>

    <section className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap -mx-4">
        {/* Text Column */}
        <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
          <div className="space-y-6">
            <div>
              <p className="text-base font-normal">
                <span>
                  Founded in 1985, and now, with a rich experience of almost 4
                  decades Omega Elevators, a CE certified Indian MNC, with
                  expertise in elevators and escalators is a leader in the
                  vertical transportation industry. Proven as one of the most
                  reliable, safe, and trusted partners for our clients across
                  the globe, we operate through a network of several branches
                  with locations in all the major states and cities of India.
                  Internationally, we have presence in several countries like
                  UAE, Kenya, Tanzania, Uganda, Congo, Bhutan, Bangladesh, Egypt,
                  Kuwait, Saudi Arabia, Mauritius, Nepal, Sri Lanka, Sweden,
                  Germany, and Switzerland.
                </span>
              </p>
            </div>

            <div>
              <p className="text-base font-normal">
                <span>
                  Omega Elevators had global certifications such as&nbsp;
                </span>
                <strong>
                  ISO 9001:2015, ISO 45001:2018, QRO (Quality Research
                  Organization) ISO 14001:2015, BS EN 81-20:2020 and BS EN
                  81-50:2020
                </strong>
                <span>
                  . We have successfully installed more than&nbsp;
                </span>
                <strong>45,000 elevators</strong>
                <span>
                  worldwide and are satisfactorily elevating more than 10 million
                  people a day.
                </span>
              </p>
            </div>

            <div>
              <p className="text-base font-normal">
                <span>
                  Omega Elevators is not just a company but a family, with a
                  workforce of over&nbsp; 2000 employees and a production
                  capacity of over 300 elevators per month. We have our
                  headquarters, corporate office and production plant in
                  Ahmedabad, Gujarat. Our manufacturing facility is equipped
                  with the latest and most advanced technology for smooth, safe,
                  and speedy elevator manufacturing. Omega Elevators displays the
                  real “Engineered Art” backed by advanced and unparalleled
                  technical expertise. It’s a combination of the best technology
                  and modern design of elevator, with attractive interiors that
                  adds a touch of elegance and sophistication to your building and
                  premises.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Image Column */}
        <div className="w-full md:w-1/2 px-4">
          <div className="flex justify-center">
            <img
              src="https://omega-elevators.com/sukookee/2024/09/DSC_4086-2.2-757x1024.jpg"
              alt="Elevator"
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
              width="757"
              height="1024"
            />
          </div>
        </div>
      </div>
    </section>

    </>

  )
}

export default AboutUS