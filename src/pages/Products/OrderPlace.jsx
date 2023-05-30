import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logo } from "../../assets/svg/logo";

import { placeOrderAction } from "../../store/actions/billingActions";

const OrderPlace = () => {
  const shippingDetails = useSelector(state => state.billingInfo);

  const userDetails = useSelector(state => state.userDetails);
  const { user } = userDetails;
  const cartItems = useSelector(state => state.cartItems);
  const totalBill = localStorage.getItem("userBill")
    ? JSON.parse(localStorage.getItem("userBill"))
    : 0;

  const orderDetails = {
    id: user.id,
    name: user.myName,
    email: user.email,
    phNum: shippingDetails.number,
    address: shippingDetails.address,
    state: shippingDetails.state,
    city: shippingDetails.city,
    postalCode: shippingDetails.postalCode,
    products: cartItems, //array of products
  };
  const dispatch = useDispatch();
  const verifyPayment = () => {
    dispatch(placeOrderAction(orderDetails));
  };

  return (
    <>
      <div className="flex flex-col items-center sm:w-full h-full">
        <div className="flex items-center justify-center sm:w-3/4">
          <div className="flex flex-col my-12 p-3 w-80 md:w-[500px]">
            <div className="shadow-lg rounded-xl">
              <div className="p-8">
                <div className="flex flex-col space-y-5">
                  <div className="flex text-2xl font-mono font-semibold space-x-2 mt-8">
                    <span>{logo()}</span>
                    <span>STee</span>
                  </div>

                  <span className="text-xs text-zinc-500">
                    Welcome to Final Confirmation !!!
                  </span>
                  <span className="text-4xl font-medium">Finalize Order</span>
                </div>
                <div className="mt-8">
                  <div>
                    <div className="relative mt-3">
                      <label className="text-sm font-mono text-zinc-700">
                        Your Name
                      </label>

                      <div className="mt-2 w-full h-8 rounded-md text-zinc-500  text-sm">
                        {user?.myName}
                      </div>
                    </div>

                    <div className="relative mt-3">
                      <label className="text-sm font-mono text-zinc-700">
                        Your Email
                      </label>

                      <div className="mt-2 w-full h-8 rounded-md text-zinc-500  text-sm">
                        {user?.email}
                      </div>
                    </div>

                    <div className="relative mt-3">
                      <label className="text-sm font-mono text-zinc-700">
                        Your Number
                      </label>

                      <div className="mt-2 w-full h-8 rounded-md text-zinc-500 text-sm">
                        {shippingDetails?.number}
                      </div>
                    </div>

                    <div className="relative mt-3">
                      <label className="text-sm font-mono text-zinc-700">
                        Shipping Address
                      </label>

                      <div className="flex items-center mt-2 w-full h-8 rounded-md text-zinc-500 text-sm">
                        {shippingDetails?.address}
                      </div>
                    </div>

                    <div className="relative mt-3">
                      <label className="text-sm font-mono text-zinc-700">
                        State, City
                      </label>

                      <div className="mt-2 w-full h-8 rounded-md text-zinc-500 text-sm">
                        {shippingDetails?.state?.concat(
                          ", " + shippingDetails?.city
                        )}
                      </div>
                    </div>

                    <div className="relative mt-3">
                      <label className="text-sm font-mono text-zinc-700">
                        Postal Code
                      </label>

                      <div className="mt-2 w-full h-8 rounded-md text-zinc-500  text-sm">
                        {shippingDetails?.postalCode}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center bg-slate-600 w-40 rounded-3xl">
          <button
            className="p-2 text-xs text-[#D2FF28] transition-all duration-200"
            onClick={verifyPayment}
          >
            Confirm Order <br /> Total: ${totalBill}
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderPlace;
