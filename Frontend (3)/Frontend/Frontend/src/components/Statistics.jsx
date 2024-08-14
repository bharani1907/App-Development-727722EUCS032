import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Statistics = () => {
AOS.init();

  const formatNumber = (value) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}k+`;
    }
    return value.toString();
  };

  return (
    <div
      data-aos="zoom-in"
      className="text-white my-20  p-10 rounded-lg container mx-auto aos-init aos-animate"
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="countdown_item font-bold text-center">
          <span className="text-8xl">
            <CountUp end={15000} duration={12} separator="," formattingFn={formatNumber} />
          </span>
          <p className="font-bold">Events Completed</p>
        </div>
        <div className="countdown_item font-bold text-center">
          <span className="text-8xl">
            <CountUp end={5000} duration={7} separator="," formattingFn={formatNumber} />
          </span>
          <p className="font-bold">Happy Clients</p>
        </div>
        <div className="countdown_item font-bold text-center">
          <span className="text-8xl">
            <CountUp end={45} duration={4} separator="," formattingFn={formatNumber} />
          </span>
          <p className="font-bold">Team Members</p>
        </div>
        <div className="countdown_item font-bold text-center">
          <span className="text-8xl">
            <CountUp end={15} duration={6} separator="," formattingFn={formatNumber} />
          </span>
          <p className="font-bold">Years Experience</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
