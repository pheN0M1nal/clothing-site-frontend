import React from "react";
import Description from "./Description";
import ProductViewNavbar from "./ProductViewNavbar";

const DetailInfo = ({ descr }) => {
  return (
    <>
      <div className="space-y-7">
        <ProductViewNavbar />
        <Description descr={descr} />
      </div>
    </>
  );
};

export default DetailInfo;
