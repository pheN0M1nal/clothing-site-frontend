import React, { useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useEffect } from "react"

import { Spinner } from "../Spinner"
const FeaturedCarousel = () => {
    const { allProducts, loading } = useSelector(
        (state) => state.featuredProducts
    )

    //const len = topProducts && topProducts.length / 2;

    const [slidesToShow, setSlidesToShow] = useState(3)

    useEffect(() => {
        const handleResize = () => {
            // Update slidesToShow based on screen size
            if (window.innerWidth < 640) {
                setSlidesToShow(1)
            } else if (window.innerWidth < 768) {
                setSlidesToShow(2)
            } else {
                setSlidesToShow(3)
            }
        }

        // Call handleResize on initial load
        handleResize()

        // Attach event listener to window resize
        window.addEventListener("resize", handleResize)

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const CustomNextArrow = ({ onClick }) => (
        <div className="custom-arrow next-arrow" onClick={onClick}>
            <i className="fa fa-long-arrow-right"></i>
        </div>
    )

    const CustomPrevArrow = ({ onClick }) => (
        <div className="custom-arrow prev-arrow" onClick={onClick}>
            <i className="fa fa-long-arrow-left"></i>
        </div>
    )

    const settings = {
        prevArrow: <CustomPrevArrow />,
        dots: true,
        infinite: false,
        speed: 400,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        // initialSlide: len,
        arrows: true,
        nextArrow: <CustomNextArrow />,
    }
    return (
        <Slider {...settings}>
            {loading ? (
                <div className="flex items-center justify-center w-full h-40 sm:h-96">
                    <Spinner />
                </div>
            ) : (
                allProducts?.products?.map((product, index) => (
                    <Link to={`/product/${product?._id}`} key={product?._id}>
                        <div key={product?._id}>
                            {/* <h2>{product?.productName}</h2> */}
                            <img
                                src={product?.image[0]}
                                alt={product?.productName}
                                className="w-80 h-80"
                            />
                        </div>
                    </Link>
                ))
            )}
        </Slider>
    )
}

export default FeaturedCarousel
