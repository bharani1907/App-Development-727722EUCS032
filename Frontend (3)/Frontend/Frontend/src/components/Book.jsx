import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CancelBooking from './Cancelbooking';
import Venues from './Venues';

const Venuepics = () => {
  return (
    <div>
      <div className="carousel carousel-center rounded-box">
        <div className="carousel-item">
          <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Venue 1" />
        </div>
        <div className="carousel-item">
          <img src="https://up.yimg.com/ib/th?id=OIP.EZ2B95yksNwilZZ_VFqdsgHaFm&pid=Api&rs=1&c=1&qlt=95&w=161&h=12" alt="Venue 2" />
        </div>
        <div className="carousel-item">
          <img src="https://media.gettyimages.com/id/497317250/photo/new-year-party.jpg?s=612x612&w=0&k=20&c=ssF8Nl4srRSnNhToYI0GlUznz3xVVJunOnaIe1ukllA=" alt="Venue 3" />
        </div>
        <div className="carousel-item">
          <img src="https://media.gettyimages.com/id/1218374936/photo/luxurious-restaurant-and-nightclub-in-bosporus-istanbul-turkey.jpg?s=612x612&w=0&k=20&c=9H_6Y1MWSJ5hxmvWtezWFCWn6HLCFTuRpRWVItWbgFY=" alt="Venue 4" />
        </div>
        <div className="carousel-item">
          <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Venue 5" />
        </div>
        <div className="carousel-item">
          <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" alt="Venue 6" />
        </div>
        <div className="carousel-item">
          <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp" alt="Venue 7" />
        </div>
      </div>
    </div>
  );
};

const ServiceBookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    venue: '',
    service: '',
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
    const { name, phone, email, date, venue, service } = formData;
    setIsValid(name && phone && email && date && venue && service);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      navigate('/payment');
    }
  };

  return (
    <div className="container flex gap-10 lg:flex-row flex-col p-10 md:p-20 bg-blue-900 mx-auto rounded-lg"
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
                className="border-yellow-300 border-2 focus:outline-none input input-bordered"
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
                className="border-yellow-300 border-2 focus:outline-none input input-bordered"
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
                className="border-yellow-300 border-2 focus:outline-none input input-bordered"
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
                className="border-yellow-300 border-2 focus:outline-none input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Venue</span>
              </label>
              <input
                type="text"
                name="venue"
                className="border-yellow-300 border-2 focus:outline-none input input-bordered bg-blue-800 text-white"
                value={formData.venue}
                onChange={handleChange}
                placeholder="Enter venue name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Services</span>
              </label>
              <select
                name="service"
                className="border-yellow-300 border-2 focus:outline-none input input-bordered bg-blue-800 text-white"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="" disabled></option>
                <option value="Elegent Venue">Elegent Venue</option>
                <option value="Customized Invitation">Customized Invitation</option>
                <option value="Enchanting Decoration">Enchanting Decoration</option>
                <option value="Gourmet Catering">Gourmet Catering</option>
                <option value="Creative Cakes and Deserts">Creative Cakes and Deserts</option>
                <option value="Live Entertainment">Live Entertainment</option>
                <option value="All Services">All Services</option>
              </select>
            </div>
            <div className="form-control col-span-full">
              <label className="label">
                <span className="label-text text-white">Message</span>
              </label>
              <textarea
                name="message"
                className="border-yellow-300 h-full border-2 textarea textarea-bordered"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                
              ></textarea>
            </div>
            <div className="form-control mt-3 col-span-full">
              <button
                type="submit"
                className={`mt-5 ${isValid ? 'bg-yellow-600 hover:bg-yellow-700' : 'bg-gray-600 cursor-not-allowed'} transition-colors duration-200 capitalize text-lg px-8 py-3 rounded-full text-white shadow-md`}
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

const Book = () => {
  return (
    <div className="min-h-screen bg-blue-900">
      <Navbar />
      <div className="container mx-auto py-10 px-4 mt-20">
        <Venuepics />
        <ServiceBookingForm />
        <CancelBooking />
        <Footer />
      </div>
    </div>
  );
};

export default Book;
