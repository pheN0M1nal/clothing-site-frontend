import React from "react";
import BillHeader from "./BillHeader";
import PaymentDetails from "./PaymentDetails";
import UserDetails from "./UserDetails";
const Bill = ({ bill, placeOrder }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <BillHeader />
        <UserDetails />
        <PaymentDetails totalbill={bill} placeOrder={placeOrder} />
      </div>
    </>
  );
};

export default Bill;
