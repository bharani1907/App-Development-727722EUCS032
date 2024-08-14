import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PaymentInvoice = ({ paymentDetails }) => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    // Store payment details in the backend
    axios.post("http://localhost:9000/api", paymentDetails)
      .then(response => {
        console.log("Payment stored successfully:", response.data);
        navigate('/');
      })
      .catch(error => {
        console.error("Error storing payment:", error);
      });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-500">
      <h3 className="text-3xl text-center text-blue-700 font-bold mb-6">Payment Receipt</h3>
      <div className="flex flex-col text-gray-700 gap-4 mb-8">
        <div className="flex justify-between items-center">
          <span className="font-semibold">Email:</span>
          <span>{paymentDetails.email}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">Country:</span>
          <span>{paymentDetails.country}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">Zip Code:</span>
          <span>{paymentDetails.zipCode}</span>
        </div>
        {paymentDetails.cardNumber && (
          <div className="flex justify-between items-center">
            <span className="font-semibold">Card Number:</span>
            <span>**** **** **** {paymentDetails.cardNumber.slice(-4)}</span>
          </div>
        )}
        {paymentDetails.upiId && (
          <div className="flex justify-between items-center">
            <span className="font-semibold">UPI ID:</span>
            <span>{paymentDetails.upiId}</span>
          </div>
        )}
      </div>
      <div className="text-center">
        <button
          onClick={handleReturnHome}
          className="px-6 py-3 bg-blue-600 text-white font-bold rounded-md shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentInvoice;
