import React from "react";
import DetailInfo from "../../components/product/DetailInfo";
import ProductInfo from "../../components/product/ProductInfo";
import SellerInfo from "../../components/product/SellerInfo";

const ProductView = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto space-y-16">
        <div className="h-[32rem] w-7/12 border border-zinc-300 rounded-lg">
          <ProductInfo />
        </div>
        <div className="w-7/12 border border-zinc-300 rounded-lg">
          <DetailInfo />
        </div>
      </div>
    </>
  );
};

export default ProductView;
