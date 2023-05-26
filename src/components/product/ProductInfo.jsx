import React from "react";
import { useState } from "react";

import { DynamicStar } from "react-dynamic-star";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../store/actions/cartActions";

const ProductInfo = ({ product }) => {
  const [stock, setStock] = useState(product.quantity && product?.quantity[0]);
  const [activeBtn, setActiveBtn] = useState("L");

  const loginInfo = useSelector(state => state.userLogin.userInfo);
  const items = useSelector(state => state.cartItems);
  const dispatch = useDispatch();

  const onClick = () => {
    var flag = false;
    items.map(item => {
      if (item._id === product._id.concat(activeBtn)) {
        flag = true;
      }
      return item;
    });

    var actualQty = 0;
    if (activeBtn === "L") {
      actualQty = product.quantity && product?.quantity[0];
    }
    if (activeBtn === "M") {
      actualQty = product.quantity && product?.quantity[1];
    }
    if (activeBtn === "S") {
      actualQty = product.quantity && product?.quantity[2];
    }

    var data = {
      _id: product._id.concat(activeBtn),
      productImage: product.image[0],
      productName: product.productName,
      size: activeBtn,
      quantity: actualQty,
      price: product.price,
      rating: product && product?.rating,
      purchaseQty: 1,
    };

    stock < 1
      ? toast.error("No stock available")
      : flag
      ? toast.error("Already in the cart")
      : stock > 1 && dispatch(addToCart(data));
  };

  const changeStock = (item, index) => {
    setActiveBtn(item);
    setStock(product.quantity && product.quantity[index]);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto space-y-10 lg:flex-row sm:space-x-4 sm:space-y-0 w-[288px] sm:w-full my-2 lg:w-[98%]">
        <div className="flex flex-col sm:flex-row space-x-2 lg:w-[70%]">
          {/* Image and Add to Cart Button */}
          <div className="flex items-center justify-center h-[19rem] min-w-[300px] sm:w-64 sm:h-64 lg:h-[19rem] lg:w-[20%] border border-zinc-300 lg:mx-4 lg:my-4 rounded-lg">
            <img
              src={product.image && product.image[0]}
              alt=""
              className="h-72 w-72 sm:w-60 sm:h-60 lg:h-[95%] lg:w-[95%] rounded-lg"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col mx-8 my-4 space-y-2 w-[288px] sm:w-full lg:w-[80%]">
            {stock > 0 && (
              <div className="flex items-center text-xs text-lime-500">
                <i className="ri-check-line"></i>
                <span className="">In stock</span>
              </div>
            )}
            {stock < 1 && (
              <div className="flex items-center text-xs text-red">
                <i className="ri-check-line"></i>
                <span className="">Out of stock</span>
              </div>
            )}
            <span className="w-72 sm:w-full lg:w-72">
              Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
            </span>

            <div className="flex space-x-2 sm:space-x-4 lg:space-x-2 text-zinc-400 lg:w-full">
              {/* Rating Starts */}
              <div className="flex fex-row items-end space-x-2">
                <DynamicStar
                  rating={product?.avgRating}
                  outlined={true}
                  outlinedColor={"#D2FF28"}
                  fullStarColor={"#D2FF28"}
                  height={20}
                  width={13}
                />
                {/* Rating */}
                <span>{product?.avgRating}</span>
              </div>
              {/* Reviews */}
              <div className="flex fex-row space-x-1">
                <i className="ri-chat-1-line"></i>
                <span>{product?.noOfReviews}</span>
                <span>reviews</span>
              </div>
              {/* Sold Items */}
              <div className="flex fex-row space-x-1">
                <i className="ri-shopping-basket-line"></i>
                <span>{product?.noOfSales}</span>
                <span>sold</span>
              </div>
            </div>

            {/* Pricing */}
            <div className="flex items-center justify-center w-24 h-10 bg-zinc-600 text-lime-400">
              ${product?.price}
            </div>

            {/* Product Sizes */}
            <div className="flex items-center justify-center w-24 h-10 text-zinc-700">
              {product.size &&
                product?.size.map((item, index) => (
                  <button
                    key={item}
                    onClick={() => {
                      changeStock(item, index);
                    }}
                    className={`w-20 h-10 cursor-pointer text-center border ${
                      activeBtn === item ? "bg-slate-300" : ""
                    }`}
                  >
                    {item}
                  </button>
                ))}
            </div>

            {/* Price, Type, Material, Design */}
            <div className="flex space-x-2">
              <span className="text-zinc-400 w-40 lg:w-auto">Price:</span>
              <span className="text-zinc-600 w-44 lg:w-auto">Negotiable</span>
            </div>

            <div className="w-[300px] sm:w-full lg:w-auto h-[0.1rem] bg-zinc-300"></div>

            <div className="flex space-x-2">
              <span className="text-zinc-400 w-40 lg:w-auto">Type:</span>
              <span className="text-zinc-600 w-44 lg:w-auto">
                Classic shoes
              </span>
            </div>

            <div className="flex space-x-2">
              <span className="text-zinc-400 w-40 lg:w-auto">Material:</span>
              <span className="text-zinc-600 w-44 lg:w-auto">
                Plastic material
              </span>
            </div>

            <div className="flex space-x-2">
              <span className="text-zinc-400 w-40 lg:w-auto">Design:</span>
              <span className="text-zinc-600 w-44 lg:w-auto">Modern nice</span>
            </div>

            <div className="w-[300px] sm:w-full lg:w-auto h-[0.1rem] bg-zinc-300"></div>

            {/* Customization, Protection, Warranty */}
            <div className="flex space-x-2">
              <span className="text-zinc-400 w-40 lg:w-auto">
                Customization:
              </span>
              <span className="text-zinc-600 w-36 sm:w-44 lg:w-auto">
                Customized logo and design custom packages
              </span>
            </div>

            <div className="flex space-x-2">
              <span className="text-zinc-400 w-40 lg:w-auto">Protection:</span>
              <span className="text-zinc-600 w-36 sm:w-44 lg:w-auto">
                Refund Policy
              </span>
            </div>

            <div className="flex space-x-2">
              <span className="text-zinc-400 w-40 lg:w-auto">Warranty:</span>
              <span className="text-zinc-600 w-36 sm:w-44 lg:w-auto">
                2 years full warranty
              </span>
            </div>

            <div className="w-[300px] sm:w-full lg:w-auto h-[0.1rem] bg-zinc-300"></div>
          </div>
        </div>
        {/* Shipping Details and Supplier Info */}
        <div className="flex flex-col min-w-[320px] space-y-2 lg:w-auto">
          <div className="flex flex-col items-center justify-center mx-auto min-w-[288px] sm:w-80 h-[21rem] lg:flex-wrap border border-zinc-300 rounded-lg">
            {/* Supplier Info */}
            <div className="flex items-center w-72 sm:w-72 h-20 lg:w-auto">
              <i className="ri-registered-line fa-3x"></i>
              <div className="flex flex-col text-zinc-500">
                <span>Supplier</span>
                <span>Guanjoi Trading LLC</span>
              </div>
            </div>
            <div className="flex flex-col space-y-3 h-28 m-2">
              {/* Location */}
              <div className="flex text-zinc-500">
                <i className="ri-global-line w-7"></i>
                <span className="text-zinc-500">Germany, Berlin</span>
              </div>
              <div className="flex text-zinc-500">
                <i className="ri-shield-check-line w-7"></i>
                <span>Verified Seller</span>
              </div>
              <div className="flex text-zinc-500">
                <i className="ri-global-line w-7"></i>
                <span>Worldwide Shipping</span>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-3">
              {/* Inquiry Button */}
              <button className="w-[275px] sm:w-[18.5rem] h-10 text-[#D2FF28] bg-slate-600 rounded-md hover:bg-slate-800">
                Send inquiry
              </button>
              <button className="w-[275px] sm:w-[18.5rem] h-10 text-zinc-600 border border-zinc-400 rounded-md hover:bg-slate-600 hover:text-white">
                Seller's profile
              </button>
            </div>
          </div>
          {/* Add to cart Button */}
          <div className="flex items-center justify-center w-80">
            <button
              onClick={onClick}
              className="w-[275px] sm:w-[18.5rem] h-10 text-[#D2FF28] bg-slate-600 rounded-md cursor-pointer hover:bg-slate-800"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
