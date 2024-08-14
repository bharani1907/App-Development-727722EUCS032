import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Sample decoration data
const decorationData = [
  {
    id: 1,
    name: "Fairy Lights",
    image: "https://m.media-amazon.com/images/I/619NJNwzFuL.AC_UF350,350_QL80.jpg",
    description: "Magical fairy lights that create a warm and enchanting ambiance for your event.",
  },
  {
    id: 2,
    name: "Elegant Drapes",
    image: "https://m.media-amazon.com/images/I/71am7qzWNtL.jpg",
    description: "Luxurious drapes that cascade gracefully to add a touch of elegance.",
  },
  {
    id: 3,
    name: "Floral Arrangements",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZxeYndU2WM_6InuIvY1sgPo9HcWj49MF1ug&s", 
    description: "Beautiful floral arrangements that bring color and freshness to your venue.",
  },
  {
    id: 4,
    name: "Hanging Lanterns",
    image: "https://m.media-amazon.com/images/I/51u5D5nEPKL.AC_UF1000,1000_QL80.jpg", 
    description: "Decorative lanterns that hang from the ceiling, adding a whimsical touch.",
  },
];

const EnchantingDecoration = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8"
    >
      <div className="max-w-7xl w-full bg-white shadow-2xl rounded-lg overflow-hidden mb-6 mt-10 p-6">
        <img
          src="https://m.media-amazon.com/images/I/71C8gZCgszL.jpg"
          alt="Enchanting Decorations"
          className="w-full h-96 object-cover mb-6"
        />
        <h2 className="text-5xl font-bold text-gray-800 mb-4 text-center">Enchanting Decorations</h2>
        <p className="text-xl text-gray-600 mb-6 text-center">
          Transform your venue into a magical wonderland with our Enchanting Decorations service. From cascading drapes to twinkling fairy lights, we create an unforgettable atmosphere for your special event.
        </p>
        <div className="mb-8">
          <h3 className="text-4xl font-semibold text-gray-800 mb-6 text-center">Types of Decorations</h3>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={2}
            pagination={{ clickable: true }}
            navigation
            loop
            className="w-full"
          >
            {decorationData.map((decoration) => (
              <SwiperSlide
                key={decoration.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={decoration.image}
                  alt={decoration.name}
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-2xl font-semibold text-gray-800 mb-2">{decoration.name}</h4>
                  <p className="text-gray-600">{decoration.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <p className="text-3xl font-semibold text-gray-900 text-center">Starting at 3000 Rupees</p>
      </div>
    </div>
  );
};

export default EnchantingDecoration;
