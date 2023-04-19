import React from "react";
import Description from "./Description";
import ProductViewNavbar from "./ProductViewNavbar";
import Reviews from "./Reviews";

const DetailInfo = ({ descr }) => {
  return (
    <>
      <div className="space-y-7">
        <ProductViewNavbar />
        <Description descr={descr} />
        <ProductViewNavbar />
        <Reviews />
      </div>
    </>
  );
};

export default DetailInfo;
