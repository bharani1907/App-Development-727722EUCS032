import React from 'react';
import Navbar from './Navbar';
import Hcard from './Hcard';
import Footer from './Footer';

const Service = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'rgb(17, 20, 39)' }}> {/* Full screen height with custom background */}
      <Navbar />
      <div className="container mx-auto py-10 px-4">
        <Hcard />
        <Footer/>
      </div>
    </div>
  );
};

export default Service;
