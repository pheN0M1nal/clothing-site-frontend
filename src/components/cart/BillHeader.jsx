import React from "react";
import paypal from "../../assets/images/paypal.png";
const BillHeader = () => {
  return (
    <>
      <div className=" text-white flex flex-col items-center space-y-4">
        <span>Payment Details</span>
        {/* Paypal */}
        <div className="flex flex-row items-center space-x-2">
          <img src={paypal} alt="" className="h-8 w-8" />
          <span className="text-xs">is our Official Payment Partner.</span>
        </div>
      </div>
    </>
  );
};

export default BillHeader;
