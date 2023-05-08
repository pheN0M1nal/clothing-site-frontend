import React from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getAllProducts } from "../../store/actions/productActions";
import { Spinner } from "../Spinner";
const Carousel = ({ products }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const productsInfo = useSelector(state => state.allProducts);

  const { loading, allProducts } = productsInfo;
  const displayedProducts = allProducts?.slice(0, 4);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: displayedProducts?.length,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {loading ? (
        <div className="flex items-center justify-center w-full h-96">
          <Spinner />
        </div>
      ) : (
        <>
          {displayedProducts?.map((product, index) => (
            <Link to={`/product/${product._id}`} key={product._id}>
              <div key={product.id}>
                <h2>{product.name}</h2>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-3/4 h-64"
                />
              </div>
            </Link>
          ))}
        </>
      )}
    </Slider>
  );
};

export default Carousel;
