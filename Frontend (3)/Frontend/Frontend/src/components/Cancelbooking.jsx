import React, { useState } from "react";
import Lottie from "react-lottie"; // Import Lottie from react-lottie
import cancelAnimation from "../assets/Animation - 1722850381212.json"; // Adjust path as necessary

const CancelBooking = () => {
  const [bookingId, setBookingId] = useState("");
  const [reason, setReason] = useState("");

  const handleCancel = (e) => {
    e.preventDefault();
    // Add logic to handle the booking cancellation
    console.log("Booking ID:", bookingId);
    console.log("Cancellation Reason:", reason);
    // Reset form fields
    setBookingId("");
    setReason("");
    // Optionally, display a success message or redirect the user
  };

  return (
    <div className="min-h-screen   bg-gradient-to-br from-gray-800   text-white flex items-center justify-center p-4">
      <div className="flex items-center max-w-7xl w-full bg-gray-900 bg-opacity-80 rounded-xl shadow-lg p-8 backdrop-filter backdrop-blur-lg">
        {/* Left Side: Lottie Animation */}
        <div className="hidden md:flex flex-shrink-0 items-center justify-center p-4">
          <Lottie
            options={{
              animationData: cancelAnimation, // Pass animation data
              loop: true,
              autoplay: true,
            }}
            style={{ height: '300px', width: '300px' }}
          />
        </div>
        {/* Right Side: Cancel Booking Form */}
        <div className="flex-grow p-4">
          <h1 className="text-3xl font-bold mb-6 text-center animate-fadeIn">
            Cancel Your Booking
          </h1>
          <form onSubmit={handleCancel} className="space-y-6">
            <div>
              <label
                htmlFor="bookingId"
                className="block text-sm font-medium mb-1 animate-fadeIn"
              >
                Booking ID
              </label>
              <input
                type="text"
                id="bookingId"
                value={bookingId}
                onChange={(e) => setBookingId(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 bg-gray-700 bg-opacity-80 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-transform transform-gpu hover:scale-105"
                placeholder="Enter your booking ID"
              />
            </div>
            <div>
              <label
                htmlFor="reason"
                className="block text-sm font-medium mb-1 animate-fadeIn"
              >
                Reason for Cancellation
              </label>
              <textarea
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 bg-gray-700 bg-opacity-80 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-transform transform-gpu hover:scale-105"
                rows="4"
                placeholder="Explain the reason for cancellation"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-transform transform-gpu hover:scale-105 animate-fadeIn"
            >
              Cancel Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CancelBooking;
