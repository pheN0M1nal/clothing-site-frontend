import React from "react";
import { useParams } from "react-router-dom";
import DetailInfo from "../../components/product/DetailInfo";
import ProductInfo from "../../components/product/ProductInfo";

import { getproductById } from "../../store/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "../../components/Spinner";
import { useEffect } from "react";
const ProductView = () => {
  const params = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getproductById(params.id));
  }, []);
  const { loading, singleProduct } = useSelector(state => state.singleProduct);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col items-center justify-center mx-auto space-y-16">
          <div className="h-[32rem] w-7/12 border border-zinc-300 rounded-lg">
            <ProductInfo />
          </div>
          <div className="w-7/12 border border-zinc-300 rounded-lg">
            <DetailInfo />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductView;
