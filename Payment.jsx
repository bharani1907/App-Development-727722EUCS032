// src/components/Payment.jsx

import React, { useState } from "react";
import Lottie from "react-lottie";
import paymentAnimationData from "../assets/payment.json"; // Ensure you have this JSON file
import successAnimationData from "../assets/succes.json"; // Ensure you have this JSON file
import PaymentInvoice from "../components/PaymentInvoice"; // Assume you have a separate PaymentInvoice component

const Payment = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("credit");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showInvoice, setShowInvoice] = useState(false); // State for showing the invoice
  const [paymentDetails, setPaymentDetails] = useState({
    email: "",
    password: "",
    country: "",
    zipCode: "",
    cardNumber: "",
    cardHolder: "",
    expDate: "",
    cvv: "",
    upiId: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handlePayment = () => {
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      // Show invoice after success animation delay
      setTimeout(() => {
        setShowInvoice(true);
      }, 2000); // 2-second delay before showing the invoice
    }, 3000);
  };

  const isFormValid = () => {
    const { email, password, country, zipCode, cardNumber, cardHolder, expDate, cvv, upiId } = paymentDetails;

    if (selectedPaymentMethod === "credit") {
      return (
        email &&
        password &&
        country &&
        zipCode &&
        cardNumber &&
        cardHolder &&
        expDate &&
        cvv
      );
    } else if (selectedPaymentMethod === "upi") {
      return email && password && country && zipCode && upiId;
    }

    return false;
  };

  const paymentOptions = {
    loop: true,
    autoplay: true,
    animationData: paymentAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const successOptions = {
    loop: false,
    autoplay: true,
    animationData: successAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
  className="min-h-screen flex items-center justify-center bg-sky-500 px-4 relative"
  style={{
    backgroundImage: "url('/public/wp7094553.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
>
      {/* Overlay for processing */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-500 ${
          isProcessing || isSuccess ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* Success Animation and Invoice */}
      {isSuccess ? (
        showInvoice ? (
          <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 mt-6 transform transition-transform duration-500 relative z-10">
            <PaymentInvoice paymentDetails={paymentDetails} />
          </div>
        ) : (
          <div className="absolute z-50 flex w-full h-full bg-white flex-col items-center justify-center">
            <Lottie options={successOptions} height={500} width={500} />
            <p className="text-blue-600 font-bold text-xl mt-4">Payment Successful!</p>
          </div>
        )
      ) : (
        <div className="flex w-full max-w-7xl bg-white opacity-100 shadow-lg rounded-lg p-8 transform transition-transform duration-500 relative z-10">
          <div className="w-1/2 flex items-center  justify-center">
            <Lottie options={paymentOptions} height={500} width={600} />
          </div>
          <div className="w-1/2 pl-8">
            <h1 className="text-2xl text-black font-semibold mb-4"> PAYMENT DETAILS  </h1>
            <p className="text-blue-500 mb-6">
              Enhance your Memorable Birthday Celebration With us!!😍
            </p>

            {/* Payment Method */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2 text-black">Payment Method</h3>
              <div className="flex items-center ">
                <label className="flex items-center mr-6">
                  <input 
                    type="radio"
                    name="payment-method"
                    value="credit"
                    checked={selectedPaymentMethod === "credit"}
                    onChange={() => setSelectedPaymentMethod("credit")}
                    className="form-radio text-black mr-2"
                  />
                  <span className="flex items-center text-black">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                      alt="Credit/Debit card"
                      className="w-10 h-8 mr-2"
                    />
                    Credit Card
                  </span>
                </label>
                
                <label className="flex items-center ">
                  <input
                    type="radio"
                    name="payment-method"
                    value="upi"
                    checked={selectedPaymentMethod === "upi"}
                    onChange={() => setSelectedPaymentMethod("upi")}
                    className="form-radio text-blue-600 mr-2"
                  />
                  <span className="flex items-center text-black">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6f/UPI_logo.svg"
                      

                      alt="UPI"
                      className="w-10 h-9 mr-2 "
                    />
                    UPI
                  </span>
                </label>
              </div>
            </div>

            {/* Billing Details */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"

                  value={paymentDetails.email}
                  onChange={handleInputChange}
                  className="w-full border bg-gray-600 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-sky-400 text-white"
                  placeholder="Email Address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium  text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={paymentDetails.password}
                  onChange={handleInputChange}
                  className="w-full border bg-gray-600 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-sky-400 text-white"
                  placeholder="Password"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <select
                  name="country"
                  value={paymentDetails.country}
                  onChange={handleInputChange}
                  className="w-full border bg-gray-600 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-sky-400 text-white"
                >
                  <option value="">Select Country</option>
                  <option>USA</option>
                  <option>Canada</option>
                  <option>UK</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Billing Zip / Postal Code
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={paymentDetails.zipCode}
                  onChange={handleInputChange}
                  className="w-full border bg-gray-600 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-sky-400 text-white"
                  placeholder="Zip Code"
                />
              </div>
            </div>

            {/* Credit Card Info */}
            {selectedPaymentMethod === "credit" && (
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2 text-black">Credit Card Info</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="16 digit"
                      value={paymentDetails.cardNumber}
                      onChange={handleInputChange}
                      className="w-full border bg-gray-600 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-sky-400 text-white"
                      
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Card Holder Name
                    </label>
                    <input
                      type="text"
                      name="cardHolder"
                      value={paymentDetails.cardHolder}
                      onChange={handleInputChange}
                      className="w-full border bg-gray-600  border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-sky-400 text-white"
                      placeholder="Card Holder Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      name="expDate"
                      value={paymentDetails.expDate}
                      onChange={handleInputChange}
                      className="w-full border bg-gray-600 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-sky-400 text-white"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      value={paymentDetails.cvv}
                      onChange={handleInputChange}
                      className="w-full border bg-gray-600 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-sky-400 text-white"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* UPI Info */}
            {selectedPaymentMethod === "upi" && (
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2 text-black">UPI Payment Info</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    UPI ID
                  </label>
                  <input
                    type="text"
                    name="upiId"
                    value={paymentDetails.upiId}
                    onChange={handleInputChange}
                    className="w-full border bg-gray-600 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-sky-400 text-white"
                    placeholder="yourname@bankname"
                  />
                </div>
              </div>
            )}

            {/* Payment Button */}
            <div className="flex justify-center">
              <button
                onClick={handlePayment}
                disabled={!isFormValid() || isProcessing}
                className={`w-full bg-blue-600 text-white font-semibold py-2 rounded-md shadow-md hover:bg-blue-700 transition-colors ${
                  !isFormValid() || isProcessing ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isProcessing ? "Processing..." : "Proceed with Payment"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
