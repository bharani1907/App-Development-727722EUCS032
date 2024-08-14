import React from "react";

const Liveenter = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white flex flex-col items-center justify-between">
      {/* Hero Section */}
      <div className="w-full relative">
        <img
          src="https://image.shutterstock.com/image-photo/crowd-partying-stage-lights-live-260nw-2297236461.jpg"
          alt="Live Entertainment"
          className="w-full h-96 object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black bg-opacity-75 flex items-center justify-center">
          <h2 className="text-5xl font-extrabold text-white drop-shadow-lg">
            Live Entertainment
          </h2>
        </div>
      </div>

      {/* Description Section */}
      <div className="p-8 text-center max-w-3xl mx-auto">
        <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
          Elevate your party with our Live Entertainment service. Whether you prefer the soulful tunes of a live band, 
          the energetic beats of a DJ, or something in between, we have you covered. Our performers are seasoned 
          professionals, bringing high energy and a vibrant atmosphere to every event. From intimate gatherings to grand 
          celebrations, our entertainment options are tailored to suit your unique taste and style.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex space-x-4 p-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-xs">
          <h3 className="text-xl font-semibold mb-4">Live Band</h3>
          <p className="text-gray-400">
            Experience the raw energy of a live band that will get your guests on their feet.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-xs">
          <h3 className="text-xl font-semibold mb-4">DJ</h3>
          <p className="text-gray-400">
            Our DJs spin the hottest tracks, keeping the dance floor alive all night.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-xs">
          <h3 className="text-xl font-semibold mb-4">Custom Acts</h3>
          <p className="text-gray-400">
            From soloists to group performances, we tailor entertainment to your event.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Liveenter;
