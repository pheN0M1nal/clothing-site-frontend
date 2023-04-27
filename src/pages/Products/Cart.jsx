import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import Bill from "../../components/cart/Bill";
import { deleteFromCart } from "../../store/actions/cartActions";
import Items from "../../components/cart/Items";
import { decQty, incQty } from "../../store/actions/cartActions";
import { toast } from "react-toastify";

const Cart = () => {
  var bill = 0;

  //getting cart data from local storage
  const { error, cartItems: items } = useSelector(state => state.cartItems);

  error && toast.error(error);

  //deleting data from cart regarding product id
  const dispatch = useDispatch();
  const deleteItem = id => {
    dispatch(deleteFromCart(id));
  };

  //calculating total bill and sending it to Bill component
  items.length > 0 &&
    items.map(item => {
      return (bill += item.price);
    });

  const decrementQty = id => {
    dispatch(decQty(id));
  };
  const incrementQty = id => {
    dispatch(incQty(id));
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-6 space-x-0 mx-auto md:flex-row md:space-x-10 md:space-y-0">
        {/* Left Side Cart */}
        <div>
          {/* Heading + Back Button */}
          <span className="text-zinc-500">
            <Link to="/">
              {" "}
              <i className="ri-arrow-left-s-line cursor-pointer"></i>Shopping
              Continue
            </Link>
          </span>

          {/* Heading Bar */}

          <div className="bg-zinc-300 h-[0.10rem] w-full mt-5"></div>
          <div className="mt-2 text-sm">Shopping cart</div>
          {/* Total Items in Cart */}
          <span className="text-xs text-zinc-600">
            You have {items.length} items in your cart
          </span>
          {/* Product Lists & Info in Cart */}

          {items.length > 0 && (
            <Items
              items={items}
              onDelete={deleteItem}
              onInc={incrementQty}
              onDec={decrementQty}
            />
          )}
        </div>
        {/* Right Side Payment Info */}
        <div className="w-[290px] h-[450px] bg-zinc-600 rounded-2xl">
          <Bill bill={bill} />
        </div>
      </div>
    </>
  );
};

export default Cart;
