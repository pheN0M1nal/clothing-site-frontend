import React from "react";
import Description from "./Description";
import ProductViewNavbar from "./ProductViewNavbar";

const DetailInfo = () => {
  return (
    <>
      <div className="space-y-7">
        <ProductViewNavbar />
        <Description />
      </div>
    </>
  );
};

export default DetailInfo;
