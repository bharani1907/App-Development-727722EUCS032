import React from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
 
AOS.init();


function Freebook() {
  
  return (
    <div className="container  mx-auto flex flex-col lg:flex-row  items-center gap-10 my-20">
      {/* Description Section */}
      <div
        data-aos-offset="300"
        data-aos="fade-right"
        data-aos-duration="800"
        className="flex-1 order-1 lg:order-0 aos-init aos-animate text-white p-6"
      >
        <div className="grid gap-4 lg:text-start text-center">
          <h1 className="text-2xl text-sky-400">Who we are</h1>
          <h1 className="text-5xl font-bold leading-tight">
            There’s nothing more magical than a child’s imagination
          </h1>
          <p className="text-gray-400 text-lg leading-8">
            Welcome to Nahid Birthday Party Planner, where dreams meet reality
            and every birthday celebration becomes a memorable masterpiece! We
            are a dedicated team of passionate individuals who believe in the
            magic of birthdays. Our mission is to turn your special day into an
            extraordinary event filled with joy, laughter, and cherished
            memories.
          </p>
          <div>
          <a href="/about">
            <button className="mt-5 bg-sky-600 hover:bg-sky-700 transition-colors duration-200 capitalize text-lg px-8 py-3 rounded-full text-white shadow-md">
            Discover More
           </button>
           </a>
           
          
            </div>
        </div>
      </div>

      {/* Image Section */}
      <div
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-duration="800"
        className="flex-1 order-0 lg:order-1 relative aos-init aos-animate"
      >
        <div className="relative h-full w-full">
          <img
            src="/public/Servicebanner.webp"
            alt="about us"
            className="absolute h-full w-full object-cover rounded-full shadow-lg"
          />
          <img
            src="/public/Servicebanner.webp"
            alt="overlay"
            className="relative h-full w-full object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Freebook;
