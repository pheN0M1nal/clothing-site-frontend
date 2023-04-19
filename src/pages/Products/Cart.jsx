import React from "react";

import Item from "../../components/cart/Items";

import { useState } from "react";

import { Link } from "react-router-dom";
import Bill from "../../components/cart/Bill";

function Cart() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Dots Shirt",
      size: "Large",
      rating: "4.5/5",
      quantity: 1,
      price: "$660",
    },
    {
      id: 2,
      name: "Abstract Shirt",
      size: "Large",
      rating: "3.5/5",
      quantity: 1,
      price: "$550",
    },
    {
      id: 3,
      name: "Customized Pant",
      size: "Medium",
      rating: "5/5",
      quantity: 1,
      price: "$710",
    },
  ]);

  const deleteItem = id => {
    setItems(items.filter(item => item.id !== id));
  };

  //const addProduct = item => {};
  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-6 space-x-0 mx-auto md:flex-row md:space-x-10 md:space-y-0">
        {/* Left Side Cart */}
        <div>
          {/* Heading + Back Button */}
          <span className="text-zinc-500">
            <i className="ri-arrow-left-s-line cursor-pointer"></i>Shopping
            Continue
          </span>

          {/* Heading Bar */}

          <div className="bg-zinc-300 h-[0.10rem] w-full mt-5"></div>
          <div className="mt-2 text-sm">Shopping cart</div>
          {/* Total Items in Cart */}
          <span className="text-xs text-zinc-600">
            You have {items.length} items in your cart
          </span>
          {/* Product Lists & Info in Cart */}

          {items.length > 0 ? (
            <Item items={items} onDelete={deleteItem} />
          ) : (
            <>
              <br />
              <Link to="/" className="text-blue-400 hover:text-blue-700">
                Exlplore More
              </Link>
            </>
          )}
        </div>
        {/* Right Side Payment Info */}
        <div className="w-[290px] h-[450px] bg-zinc-600 rounded-2xl">
          <Bill />
        </div>
      </div>
    </>
  );
}

export default Cart;
