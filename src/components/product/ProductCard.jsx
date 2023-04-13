import React from "react";
import shoe from "../../assets/images/irene-kredenets-dwKiHoqqxk8-unsplash.jpeg";
import "remixicon/fonts/remixicon.css";
import { useState } from "react";
const ProductCard = () => {
  // const ProductCard = ({ product }) => {

  return (
    <>
      <div className="flex flex-col items-center h-72 w-48 shadow-lg text-[10px] rounded-md">
        <div className="h-44 w-32 mt-2">
          {/* image */}
          {/* <img src={product.path[0]} alt="" className="w-24 h-24" /> */}
          <img src={shoe} alt="" className="h-48 rounded-sm" />
        </div>
        <div className="flex items-center justify-center w-16 h-8 text-white bg-black rounded-3xl">
          $98.34
        </div>
        <div className="border-t border-black mt-7 w-32 font-medium text-[12px] ">
          {/* Product Price */}
          {/* <h4>${product.price}</h4> */}
          {/* product name */}
          {/* <h3>{product.name}</h3> */}
          <div className="flex flex-row justify-between mt-3">
            <h3>Customized Shirt</h3>
            <i className="ri-heart-line cursor-pointer"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
