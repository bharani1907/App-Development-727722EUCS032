import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import Swiper modules
import "swiper/swiper-bundle.css";
import { Link } from "react-router-dom";

// Sample images
{/*import banner1 from "../../public/Banner.png";
import banner2 from "../../public/bellown.png";
import banner3 from "../../public/favicon.png";*/}

function Banner() {
  return (
    <div
      className="flex justify-center items-center banner_section min-h-screen w-full py-20 px-0 box-border bg-black bg-opacity-90"
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="container mx-auto overflow-hidden h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex lg:flex-row flex-col lg:gap-10 justify-center items-center mt-20 lg:mt-0">
            {/* Text Content */}
            <div className="flex-1 flex lg:justify-start justify-center order-1 lg:order-0">
              <div className="gap-4  lg:text-start text-center w-full grid p-6 rounded-lg shadow-lg">
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                  Elegant Venue
                </h1>
                <h3 className="text-lg md:text-2xl text-gray-300 leading-[50px]">
                  Birthday party venue rental, setup and teardown, catering with
                  a customizable menu, professional decoration with drapes and
                  lights, high-quality sound and lighting setup.
                </h3>
                <div>
                  <Link to="/book">
                  <button className="mt-5 bg-sky-600 hover:bg-sky-700 transition-colors duration-200 capitalize text-lg px-8 py-3 rounded-full text-white shadow-md">
                  Book Now
                </button>
                </Link>
                </div>
              </div>
            </div>
            {/* Image Content */}
            <div className="flex-1 flex w-full lg:justify-start justify-center order-0 lg:order-1 max-w-full max-h-[700px] relative">
              <img
                src="https://images.pexels.com/photos/18060956/pexels-photo-18060956/free-photo-of-decorated-15th-birthday-party-venue.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="w-[600px] h-[600px] rounded-full"
                alt="Elegant Venue"
              />
              {/*<img
                src="https://i.ibb.co/TbbK9TJ/Elegant-Venue.jpg"
                className="rounded-3xl top-0 absolute w-[50%] h-[50%] object-cover"
                alt="Elegant Venue"
              />*/}
            </div>
          </div>
        </SwiperSlide>
        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex lg:flex-row flex-col lg:gap-10 justify-center items-center mt-20 lg:mt-0">
            {/* Text Content */}
            <div className="flex-1 flex lg:justify-start justify-center order-1 lg:order-0">
              <div className="gap-4  lg:text-start text-center w-full grid p-6 rounded-lg shadow-lg">
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                  Customized Invitations
                </h1>
                <h3 className="text-lg md:text-2xl text-gray-300 leading-[50px]">
                  Birthday party design customization based on the theme,
                  printing of high-quality invitations, and timely delivery to
                  the provided addresses.
                </h3>
                <div>
                  <Link to="/book">
                  <button className="mt-5 bg-sky-600 hover:bg-sky-700 transition-colors duration-200 capitalize text-lg px-8 py-3 rounded-full text-white shadow-md">
                  Book Now
                </button>
                </Link>
                </div>
              </div>
            </div>
            {/* Image Content */}
            <div className="flex-1 flex w-full lg:justify-start justify-center order-0 lg:order-1 max-w-full max-h-[700px] relative">
              <img
                src="https://media.istockphoto.com/id/1353171631/vector/vector-birthday-elegant-greeting-card-with-realistic-helium-balloons.jpg?s=612x612&w=0&k=20&c=aGHTBIWaG2civQGyuE2UJ45Jss9RPMnKtEz0zuHKEPg="
                 className="w-[600px] h-[600px] rounded-full"
                alt="Customized Invitations"
              />
              {/*<img
                src="https://i.ibb.co/LnQJt7W/Customized-Invitations.jpg"
                className="rounded-3xl top-0 absolute w-[98%] h-[98%] object-cover"
                alt="Customized Invitations"
              />*/}
            </div>
          </div>
        </SwiperSlide>
        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex lg:flex-row flex-col lg:gap-10 justify-center items-center mt-20 lg:mt-0">
            {/* Text Content */}
            <div className="flex-1 flex lg:justify-start justify-center order-1 lg:order-0">
              <div className="gap-4  lg:text-start text-center w-full grid p-6 rounded-lg shadow-lg">
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                  Enchanting Decorations
                </h1>
                <h3 className="text-lg md:text-2xl text-gray-300 leading-[50px]">
                  Birthday party creative decoration setup with drapes, fairy
                  lights, themed centerpieces, beautifully arranged table
                  settings, and ambiance enhancement.
                </h3>
                <div>
                  <Link to ="/book">
                  <button className="mt-5 bg-sky-600 hover:bg-sky-700 transition-colors duration-200 capitalize text-lg px-8 py-3 rounded-full text-white shadow-md">
                  Book Now
                </button>
                 </Link>
                </div>
              </div>
            </div>
            {/* Image Content */}
            <div className="flex-1 flex w-full lg:justify-start justify-center order-0 lg:order-1 max-w-full max-h-[700px] relative">
              <img
                src="https://images.pexels.com/photos/1042152/pexels-photo-1042152.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  className="w-[600px] h-[600px] rounded-full"
                alt="Enchanting Decorations"
              />
              {/*<img
                src="https://i.ibb.co/hRrHPYr/Enchanting-Decorations.jpg"
                className="rounded-3xl top-0 absolute w-[98%] h-[98%] object-cover"
                alt="Enchanting Decorations"
              />*/}
            </div>
          </div>
        </SwiperSlide>
        {/* Slide 4 */}
        <SwiperSlide>
          <div className="flex lg:flex-row flex-col lg:gap-10 justify-center items-center mt-20 lg:mt-0">
            {/* Text Content */}
            <div className="flex-1 flex lg:justify-start justify-center order-1 lg:order-0">
              <div className="gap-4  lg:text-start text-center w-full grid p-6 rounded-lg shadow-lg">
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                  Gourmet Catering
                </h1>
                <h3 className="text-lg md:text-2xl text-gray-300 leading-[50px]">
                  Birthday party menu planning, preparation of gourmet
                  appetizers, main courses, and desserts, professional serving
                  staff, and catering setup and cleanup.
                </h3>
                <div>
                  <Link to="/book">
                  <button className="mt-5 bg-sky-600 hover:bg-sky-700 transition-colors duration-200 capitalize text-lg px-8 py-3 rounded-full text-white shadow-md">
                  Book Now
                </button>
                </Link>
                </div>
              </div>
            </div>
            {/* Image Content */}
            <div className="flex-1 flex w-full lg:justify-start justify-center order-0 lg:order-1 max-w-full max-h-[700px] relative">
              <img
                src="https://media.istockphoto.com/id/937483290/photo/server-holding-a-tray-of-appetizers-at-a-banquet.jpg?s=612x612&w=0&k=20&c=npgO7U825B6xuIehGCcmVCTGPo56HCHvw4_q_u3mmKU="
                 className="w-[600px] h-[600px] rounded-full"
                alt="Gourmet Catering"
              />
              {/*<img
                src="https://i.ibb.co/dL1VvRB/Gourmet-Catering.jpg"
                className="rounded-3xl top-0 absolute w-[98%] h-[98%] object-cover"
                alt="Gourmet Catering"
              />*/}
            </div>
          </div>
        </SwiperSlide>
        {/* Slide 5 */}
        <SwiperSlide>
          <div className="flex lg:flex-row flex-col lg:gap-10 justify-center items-center mt-20 lg:mt-0">
            {/* Text Content */}
            <div className="flex-1 flex lg:justify-start justify-center order-1 lg:order-0">
              <div className="gap-4  lg:text-start text-center w-full grid p-6 rounded-lg shadow-lg">
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                  Creative Cakes and Desserts
                </h1>
                <h3 className="text-lg md:text-2xl text-gray-300 leading-[50px]">
                  Birthday party custom cake design based on the theme, baking
                  and delivery of the cake, and a variety of delightful pastries
                  and desserts.
                </h3>
                <div>
                  <Link to="/book">
                  <button className="mt-5 bg-sky-600 hover:bg-sky-700 transition-colors duration-200 capitalize text-lg px-8 py-3 rounded-full text-white shadow-md">
                  Book Now
                </button>
                </Link>
                </div>
              </div>
            </div>
            {/* Image Content */}
            <div className="flex-1 flex w-full lg:justify-start justify-center order-0 lg:order-1 max-w-full max-h-[700px] relative">
              <img
                src="https://images.pexels.com/photos/913136/pexels-photo-913136.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="w-[600px] h-[600px] rounded-full"
                alt="Creative Cakes and Desserts"
              />
              {/*<img
                src="https://i.ibb.co/vmM4gF4/Creative-Cakes-and-Desserts.jpg"
                className="rounded-3xl top-0 absolute w-[98%] h-[98%] object-cover"
                alt="Creative Cakes and Desserts"
              />*/}
            </div>
          </div>
        </SwiperSlide>
        {/* Slide 6 */}
        <SwiperSlide>
          <div className="flex lg:flex-row flex-col lg:gap-10 justify-center items-center mt-20 lg:mt-0">
            {/* Text Content */}
            <div className="flex-1 flex lg:justify-start justify-center order-1 lg:order-0">
              <div className="gap-4  lg:text-start text-center w-full grid p-6 rounded-lg shadow-lg">
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                  Live Entertainment
                </h1>
                <h3 className="text-lg md:text-2xl text-gray-300 leading-[50px]">
                  Birthday party booking and coordination of live band or DJ,
                  magician's performance, interactive games setup, and
                  entertainment management.
                </h3>
                <div>
                  <Link to="/book">
                  <button className="mt-5 bg-sky-600 hover:bg-sky-700 transition-colors duration-200 capitalize text-lg px-8 py-3 rounded-full text-white shadow-md">
                  Book Now
                  
                </button>
                 </Link>
                </div>
              </div>
            </div>
            {/* Image Content */}
            <div className="flex-1 flex w-full lg:justify-start justify-center order-0 lg:order-1 max-w-full max-h-[700px] relative">
              <img
                src="https://t3.ftcdn.net/jpg/02/87/35/70/240_F_287357045_Ib0oYOxhotdjOEHi0vkggpZTQCsz0r19.jpg"
                className="w-[600px] h-[600px] rounded-full"
                alt="Live Entertainment"
              />
              {/*<img
                src="https://i.ibb.co/ckSwN6R/Live-Entertainment.jpg"
                className="rounded-3xl top-0 absolute w-[98%] h-[98%] object-cover"
                alt="Live Entertainment"
              />*/}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
