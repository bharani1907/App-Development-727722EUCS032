import React from 'react';
import birthdayVideo from '../assets/videos/Birthday.mp4'; // Adjust the path as needed

const Video = () => {
  return (
    <div className="flex justify-center items-center bg-gray-900 py-8">
      <video
        className="w-full h-80 sm:h-96 md:h-[540px] lg:h-[600px] rounded-xl"
        src={birthdayVideo} // Use the imported video here
        controls
        autoPlay
        loop
        muted
        title="Birthday Surprise Ideas"
      />
    </div>
  );
};

export default Video;
