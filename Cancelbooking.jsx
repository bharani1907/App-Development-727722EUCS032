import React, { useState } from "react";

const CancelBooking = () => {
  const [bookingId, setBookingId] = useState("");
  const [reason, setReason] = useState("");

  const handleCancel = (e) => {
    e.preventDefault();
    // Here you can add logic to handle the booking cancellation
    console.log("Booking ID:", bookingId);
    console.log("Cancellation Reason:", reason);
    // Reset form fields
    setBookingId("");
    setReason("");
    // Optionally, display a success message or redirect the user
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Cancel Your Booking
        </h1>
        <form onSubmit={handleCancel} className="space-y-4">
          <div>
            <label htmlFor="bookingId" className="block text-sm font-medium">
              Booking ID
            </label>
            <input
              type="text"
              id="bookingId"
              value={bookingId}
              onChange={(e) => setBookingId(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="reason" className="block text-sm font-medium">
              Reason for Cancellation
            </label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Cancel Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default CancelBooking;
