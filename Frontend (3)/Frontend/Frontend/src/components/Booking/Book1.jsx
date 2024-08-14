import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/Axiosconfig'; // Adjust the path as needed
import Navbar from '../Navbar';
import CancelBooking from '../Cancelbooking';

const Venuepics = () => {
  return (
    <div className="carousel carousel-center rounded-box">
      <div className="carousel-item">
        <img src="https://images.pexels.com/photos/17931470/pexels-photo-17931470/free-photo-of-flower-arrangements-and-a-birthday-cake-in-a-reception-hall.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Venue 1" />
      </div>
      <div className="carousel-item">
        <img src="https://images.pexels.com/photos/17931474/pexels-photo-17931474/free-photo-of-flower-arrangements-and-a-birthday-cake-in-a-reception-hall.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Venue 2" />
      </div>
      <div className="carousel-item">
        <img src="https://images.pexels.com/photos/17931471/pexels-photo-17931471/free-photo-of-flower-arrangements-at-a-15th-birthday-party.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Venue 3" />
      </div>
      <div className="carousel-item">
        <img src="https://images.pexels.com/photos/12689027/pexels-photo-12689027.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Venue 4" />
      </div>
      <div className="carousel-item">
        <img src="https://images.pexels.com/photos/17931473/pexels-photo-17931473/free-photo-of-flower-arrangements-and-a-birthday-cake-in-a-reception-hall.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Venue 5" />
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
    venue: 'GrandBallroom',
    price: '30000RS',
    message: '',
  });
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    validateForm();
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, phone, email, date } = formData;
    setIsValid(name && phone && email && date);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid) {
      try {
        const response = await axiosInstance.post('/bookings', formData);
        console.log('Booking successful:', response.data);
        navigate('/payment'); // Redirect to the payment page upon successful booking
      } catch (error) {
        console.error('Error booking:', error.response?.data || error.message);
        // Handle the error (e.g., display a message to the user)
      }
    }
  };

  return (
    <div className="container flex gap-10 lg:flex-row flex-col p-10 md:p-20 bg-gray-900 mx-auto rounded-lg" style={{ borderTopLeftRadius: '100px', borderBottomRightRadius: '100px' }}>
      <div className="flex-1 details grid gap-4 text-white">
        <h1 className="title text-4xl font-bold">Grand Ballroom</h1>
        <p className="text-lg mt-5">
        Welcome to our enchanting birthday party venue, where every celebration becomes a magical experience! Nestled in the heart of the city, our venue offers a perfect blend of elegance and fun, designed to create unforgettable memories for guests of all ages.

        As you step into the venue, you'll be greeted by a spacious and beautifully decorated hall, adorned with twinkling fairy lights and vibrant balloons that set the perfect festive mood. The venue features a customizable layout to accommodate both intimate gatherings and larger parties, ensuring that your celebration is just the way you envisioned it.
        </p>
        <h1 className="title text-2xl font-bold mt-5">What we do in this service?</h1>
        <p className="text-lg">
          Birthday party custom cake design based on the theme, baking and
          delivery of the cake, and a variety of delightful pastries and
          desserts.
        </p>
      </div>
      <div className="flex-1">
        <div className="header">
          <div className="text-4xl flex gap-5 flex-wrap justify-between font-bold text-white">
            <p>Book a date</p>
            
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
              <p className="text-lg bg-gray-800 text-white p-2 rounded-lg border-sky-300 border-2">
                {formData.venue}
              </p>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Price</span>
              </label>
              <p className="text-lg bg-gray-800 text-white p-2 rounded-lg border-sky-300 border-2">
                {formData.price}
              </p>
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
                className={`mt-5 ${
                  isValid ? 'bg-sky-600 hover:bg-sky-700' : 'bg-gray-600 cursor-not-allowed'
                } transition-colors duration-200 capitalize text-lg px-8 py-3 rounded-full text-white shadow-md`}
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

const Book1 = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar/> {/* Ensure this component is correctly imported and used */}
      <div className="container mx-auto py-10 px-4 mt-20">
        <Venuepics />
        <ServiceBookingForm />
        <CancelBooking/> {/* Ensure this component is correctly imported and used */}
      </div>
    </div>
  );
};

export default Book1;
