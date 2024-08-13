import React from 'react';
import Navbar from './Navbar';
import Hcard from './Hcard';
import Footer from './Footer';

const Service = () => {
  return (
    <div className=''>
    <div className="min-h-screen  bg-sky-700" > {/* Full screen height with custom background */}
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
