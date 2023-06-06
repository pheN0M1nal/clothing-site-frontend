import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
const ProductImage = ({ image }) => {
  // const ZoomStyling = styled.div`
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;

  //   ${
  //     "" /* img {
  //     display: block;
  //     width: 300px;
  //     height: 300px;
  //     pointer-events: none;
  //     object-fit: cover;
  //     border-radius: 0.5rem;
  //   } */
  //   }
  // `;

  // const [zoom, setZoom] = useState({});

  // useEffect(() => {
  //   setZoom({
  //     backgroundImage: `url(${product?.image && product?.image[0]})`,
  //     backgroundPosition: "0% 0%",
  //   });
  // }, [product]);

  // const handleMouseMove = e => {
  //   const { left, top, width, height } = e.target.getBoundingClientRect();
  //   const x = ((e.pageY - left) / width) * 100;
  //   const y = ((e.pageY - top) / height) * 100;

  //   setZoom({
  //     backgroundPosition: `${x}% ${y}%`,
  //     backgroundImage: `url(${product?.image && product?.image[0]})`,
  //   });
  // };

  return (
    // <ZoomStyling>
    //   <figure onMouseMove={handleMouseMove} style={zoom}>
    <img
      src={image}
      alt=""
      className="h-72 w-72 sm:w-60 sm:h-60 lg:h-[100%] lg:w-[100%] rounded-lg pointer-events-none object-cover"
    />
    //   </figure>
    // </ZoomStyling>
  );
};

export default ProductImage;
