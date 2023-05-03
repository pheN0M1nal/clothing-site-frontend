import React from "react";
import BillHeader from "./BillHeader";
import PaymentDetails from "./PaymentDetails";
import UserDetails from "./UserDetails";
const Bill = ({ bill, placeOrder }) => {
  return (
    <>
      <div className="flex items-center justify-center mx-auto mt-3">
        <BillHeader />
        <UserDetails />
        <PaymentDetails totalbill={bill} placeOrder={placeOrder} />
      </div>
    </>
  );
};

export default Bill;
