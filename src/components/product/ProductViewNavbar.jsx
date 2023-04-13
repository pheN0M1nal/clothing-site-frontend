import React from "react";

const ProductViewNavbar = () => {
  return (
    <>
      <div className="flex items-center  w-full h-12 text-zinc-500 search">
        <div className="mx-7 space-x-8">
          <span>Description</span>
          <span>Reviews</span>
        </div>
      </div>
    </>
  );
};

export default ProductViewNavbar;
