import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume, faFax, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'; // Import the icons
import Navbar from './Navbar';
import Footer from './Footer';
import Feedback from './Feedback';


const Contact = () => {
  return (
    <div className="min-h-screen bg-black-100">
      <Navbar />

      <div className="pt-20 container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row gap-10">
        {/* Contact Information Section */}
        <div className="flex-1 my-5 bg-black-100 p-6 rounded-lg shadow-md">
          <div className="media">
            <div className="media-body grid gap-2">
              <h1 className="text-4xl font-bold">Contact Us & Leave a Review</h1>
              <h2 className="text-xl font-semibold">Let us know what you think</h2>
              <p className="text-lg">We are here to help you with any questions you may have.</p>
            </div>
          </div>
          <div className="flex flex-col gap-10 mt-8">
            <div className="flex items-center gap-4">
              <div className="icon rounded-full flex items-center justify-center text-4xl h-20 w-20 border-neutral-900 border-2 bg-white">
                <FontAwesomeIcon icon={faPhoneVolume} />
              </div>
              <div className="det">
                <h3 className="text-xl font-semibold">Call us directly</h3>
                <p className="text-lg">(+91)8248097916</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="icon rounded-full flex items-center justify-center text-4xl h-20 w-20 border-neutral-900 border-2 bg-white">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="det">
                <h3 className="text-xl font-semibold">Mail us</h3>
                <p className="text-lg">bharani19@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="icon rounded-full flex items-center justify-center text-4xl h-20 w-20 border-neutral-900 border-2 bg-white">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div className="det">
                <h3 className="text-xl font-semibold">Visit our place</h3>
                <p className="text-lg">EB Colony <br />Palakad Main Road <br/> Kuniyamuthur, Coimbatore</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="flex-1 bg-black-800 p-14 rounded-lg text-white">
          <div className="header">
            <div className="text-4xl my-5 flex gap-5 flex-wrap justify-between font-bold">
              <p>Let's Meet</p>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full">
            <form className="grid lg:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="border-gray-600 border-2 focus:outline-none input input-bordered bg-gray-900 text-white"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="border-gray-600 border-2 focus:outline-none input input-bordered bg-gray-900 text-white"
                  required
                />
              </div>
              <div className="col-span-full">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="border-gray-600 border-2 focus:outline-none input input-bordered bg-gray-900 text-white"
                    required
                  />
                </div>
              </div>
              <div className="form-control col-span-full">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  rows="5"
                  className="border-gray-600 h-full border-2 textarea textarea-bordered bg-gray-900 text-white"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="form-control mt-3 col-span-full">
              <button className="mt-5 bg-sky-600 hover:bg-sky-700 transition-colors duration-200 capitalize text-lg px-8 py-3 rounded-full text-white shadow-md">
              Send Message
            </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <Feedback/>
      <Footer />
    </div>
  );
};

export default Contact;
