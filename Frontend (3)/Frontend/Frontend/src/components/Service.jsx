import React from 'react';
import Navbar from './Navbar';
import Hcard from './Hcard';
import Footer from './Footer';

const Service = () => {
  return (
    <div className=''>
    <div className="services-section bg-gradient-to-r from-green-600 to-blue-400 py-12 " > {/* Full screen height with custom background */}
      <Navbar />
      <div className="container mx-auto py-10 px-4">
        <Hcard />
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Service;
