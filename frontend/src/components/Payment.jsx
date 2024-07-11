import React from 'react';
import { useLocation } from 'react-router-dom';

const PaymentPage = () => {
  const { state } = useLocation();
  const { course } = state;

  const handlePayment = (event) => {
    event.preventDefault();
    // Handle payment logic here
    alert('Payment Successful!');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
     
      <div className="flex flex-col items-center justify-center flex-1 px-6 mt-10">
        <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Enter Payment Details</h2>
          <form onSubmit={handlePayment} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Card Number</label>
              <input
                type="text"
                className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600"
                required
              />
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">Expiry Date</label>
                <input
                  type="text"
                  className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600"
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2">CVV</label>
                <input
                  type="text"
                  className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Card Holder Name</label>
              <input
                type="text"
                className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Billing Address</label>
              <textarea
                className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded mt-4 hover:bg-blue-600"
            >
              Pay Now
            </button>
          </form>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Payment Summary</h2>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <p className="text-lg">Total Amount: $100.00</p>
          <p className="text-lg">{course.title}</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
