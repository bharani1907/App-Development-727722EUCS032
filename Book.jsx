import React, { useState } from 'react'; // Import useState
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate and Link
import Navbar from './Navbar';
import Footer from './Footer';
import CancelBooking from './Cancelbooking';
import Venues from './Venues';

// ServiceBookingForm Component
const ServiceBookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    venue: '',
    message: ''
  });
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateForm();
  };

  const validateForm = () => {
    const { name, phone, email, date, venue } = formData;
    setIsValid(name && phone && email && date && venue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      navigate('/payment');
    }
  };

  return (
    <div className="container flex gap-10 lg:flex-row flex-col p-10 md:p-20 bg-gray-900 mx-auto rounded-lg"
         style={{ borderTopLeftRadius: '100px', borderBottomRightRadius: '100px' }}>
      <div className="flex-1 details grid gap-4 text-white">
        <h1 className="title text-4xl font-bold">Creative Cakes and Desserts</h1>
        <p className="text-lg mt-5">
          Satisfy your sweet cravings with our Creative Cakes and Desserts service. Our pastry chefs are artists, crafting delightful confections that are not only delicious but also visually stunning. The centerpiece, your themed birthday cake, is a masterpiece of edible art, reflecting the essence of your celebration. Accompanying it are an assortment of pastries, each a small delight waiting to be savored. From intricate designs to exquisite flavors, our creations are bound to leave your guests enchanted and craving for more.
        </p>
        <h1 className="title text-2xl font-bold mt-5">What we do in this service?</h1>
        <p className="text-lg">
          Birthday party custom cake design based on the theme, baking and delivery of the cake, and a variety of delightful pastries and desserts.
        </p>
      </div>
      <div className="flex-1">
        <div className="header">
          <div className="text-4xl flex gap-5 flex-wrap justify-between font-bold text-white">
            <p>Book a date</p>
            <p>$250/100 Guests</p>
          </div>
        </div>
        <div className="card flex-shrink-0 w-full mt-4">
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="border-sky-300 border-2 focus:outline-none input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Phone</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="border-sky-300 border-2 focus:outline-none input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border-sky-300 border-2 focus:outline-none input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Pick a Date</span>
              </label>
              <input
                type="date"
                name="date"
                placeholder="Date"
                value={formData.date}
                onChange={handleChange}
                className="border-sky-300 border-2 focus:outline-none input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Venue</span>
              </label>
              <select
                name="venue"
                className="border-sky-300 border-2 focus:outline-none input input-bordered bg-gray-800 text-white"
                value={formData.venue}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Choose a venue</option>
                <option value="Grand Ballroom">Grand Ballroom</option>
                <option value="Ocean View Terrace">Ocean View Terrace</option>
                <option value="Garden Pavilion">Garden Pavilion</option>
                <option value="Rustic Barn">Rustic Barn</option>
                <option value="City Conference Center">City Conference Center</option>
                <option value="Skyline Rooftop">Skyline Rooftop</option>
                <option value="Lakeside Lodge">Lakeside Lodge</option>
                <option value="CozyLoft">CozyLoft</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Services</span>
              </label>
              <select
                name="service"
                className="border-sky-300 border-2 focus:outline-none input input-bordered bg-gray-800 text-white"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Choose a Service</option>
                <option value="Elegent Venue">Elegent Venue</option>
                <option value="Customized Invitation">Customized Invitation</option>
                <option value="Enchanting Decoration">Enchanting Decoration</option>
                <option value="Gourmet Catering">Gourmet Catering</option>
                <option value="Creative Cakes and Deserts">Creative Cakes and Deserts</option>
                <option value="Live Entertainment"></option>
               
              </select>
            </div>
            <div className="form-control col-span-full">
              <label className="label">
                <span className="label-text text-white">Message</span>
              </label>
              <textarea
                name="message"
                className="border-sky-300 h-full border-2 textarea textarea-bordered"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-control mt-3 col-span-full">
              <button
                type="submit"
                className={`mt-5 ${isValid ? 'bg-sky-600 hover:bg-sky-700' : 'bg-gray-600 cursor-not-allowed'} transition-colors duration-200 capitalize text-lg px-8 py-3 rounded-full text-white shadow-md`}
                disabled={!isValid}
              >
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Main Book Component
const Book = () => {
  return (
    <div className="min-h-screen bg-gray-900">
    <Navbar />
    <div className="container mx-auto py-10 px-4 mt-20"> {/* Added mt-20 to create space below the Navbar */}
     
      <Venues />
      <ServiceBookingForm />
      <CancelBooking />
      <Footer />

    </div>
  </div>
);
};


export default Book;
