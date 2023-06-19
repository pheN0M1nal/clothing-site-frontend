import React from "react"
import shoe from "../../assets/images/irene-kredenets-dwKiHoqqxk8-unsplash.jpeg"
import "remixicon/fonts/remixicon.css"

import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {
    return (
        <>
            <Link to={`/product/${product._id}`}>
                <div className="flex flex-col items-center h-72 w-48 shadow-lg text-[10px] rounded-md">
                    <div className="h-44 w-44 mt-2 object-cover">
                        {/* image */}
                        {/* <img src={product.path[0]} alt="" className="w-24 h-24" /> */}
                        <img
                            src={product.image && product?.image[0]}
                            alt=""
                            className="h-48 rounded-sm object-cover"
                        />
                    </div>
                    {/* Product Price */}
                    <div className="flex items-center justify-center w-16 h-8 text-white bg-black rounded-3xl">
                        ${product.price}
                    </div>
                    <div className="border-t border-black mt-7 w-32 font-medium text-[12px] ">
                        {/* product name */}
                        <div className="flex flex-row justify-between mt-3">
                            <h3>
                                {product.productName
                                    .substring(0, 15)
                                    .concat("...")}
                            </h3>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ProductCard
