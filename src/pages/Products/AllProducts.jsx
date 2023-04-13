import React from "react";
import { useState } from "react";
import FilterBar from "../../components/FilterBar";
import ProductCard from "../../components/product/ProductCard";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-5 max-w-full subcateg">
        <div className="flex items-center justify-center mx-auto">
          {/* Search Bar */}
          <FilterBar />
        </div>
        {/* Navigation Info */}
        <div className="absolute left-10 top-24 lg:top-32 w-full text-sm text-zinc-400">
          Home &gt; Best Product Category &gt; Best Product Category &gt;
        </div>

        <div className="absolute left-16 top-40 text-sm search">
          <span>12,911 items in Best Product Category</span>
        </div>

        <div className="absolute left-16 top-56 text-sm w-4/5">
          <div className="flex items-center justify-between">
            <span className="text-zinc-400 border-collapse border border-blue-300">
              3-5 stars
            </span>
            <button className="cursor-pointer text-blue-400">
              Clear all filter
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-7 items-center justify-center p-40">
          {products.map(product => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default AllProducts;
