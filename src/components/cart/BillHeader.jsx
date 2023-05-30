import React from "react";
import stripe from "../../assets/images/stripe.png";
const BillHeader = () => {
  return (
    <>
      <div className="flex flex-col items-center space-y-4 text-white ">
        <span>Payment Details</span>
        {/* Paypal */}
        <div className="flex flex-row items-center space-x-2">
          <img src={stripe} alt="" className="h-12 w-12" />
          <span className="text-xs">is our Official Payment Partner.</span>
        </div>
      </div>
    </>
  );
};

export default BillHeader;
