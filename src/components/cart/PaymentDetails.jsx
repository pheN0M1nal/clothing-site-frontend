import React from "react";

const PaymentDetails = ({ totalbill, placeOrder }) => {
  return (
    <>
      <div className="flex flex-col space-y-2 text-zinc-300 text-xs w-64">
        {/* Subtotal */}
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${totalbill}</span>
        </div>
        {/* Shipping */}
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>free</span>
        </div>
        {/* Tax */}
        <div className="flex justify-between">
          <span>Total(Tax incl.)</span>
          <span>${totalbill}</span>
        </div>
        {/* Checkout Buttons */}
        <div
          className="flex flex-row justify-between text-zinc-600 text-sm search p-3 rounded-lg cursor-pointer"
          onClick={() => placeOrder(totalbill)}
        >
          {/* Total Amount To be Paid */}
          <span>${totalbill}</span>
          <div className="flex items-center space-x-2 ">
            <button>Checkout</button>
            <i className="ri-arrow-right-line"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentDetails;
