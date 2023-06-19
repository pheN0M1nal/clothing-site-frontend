import React, { useEffect, useState } from "react"
import img1 from "../assets/images/snowman-cute-doll-plush-toys-winter-5k-6000x4001-8676.jpg"
import img2 from "../assets/images/snowman-snow-covered-winter-snow-4608x3456-9163.jpg"
import img3 from "../assets/images/sydney-sweeney-7680x4320-9661.jpg"
import img4 from "../assets/images/winter-forest-trees-landscape-frost-snow-covered-sunrise-3840x2160-8001.jpg"

import "remixicon/fonts/remixicon.css"

import { sweaterSvg } from "../assets/svg/sweater.jsx"
import { tShirtsvg } from "../assets/svg/tShirt"
import { jacketsvg } from "../assets/svg/jacket"
import { creator1 } from "../assets/svg/creator1"
import { creator2 } from "../assets/svg/creator2"
import { creator3 } from "../assets/svg/creator3"

import hero1 from "../assets/images/0.svg"
import hero2 from "../assets/images/1.svg"
import hero3 from "../assets/images/2.svg"
import hero4 from "../assets/images/3.svg"

import { Link, useNavigate } from "react-router-dom"

import Carousel from "../components/product/Carousel"

import FeatureCarousel from "../components/product/FeatureCarousel"
import { useDispatch } from "react-redux"
import { getAllProducts } from "../store/actions/productActions"
import { icons } from "react-icons"
import { fetchUserDetails } from "../store/actions/userActions"
import { fetchDesignerInfo } from "../store/actions/designerActions"

function Home() {
    const updateForm = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }

    const [formData, setFormData] = useState({
        search: "",
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(
            getAllProducts({
                keyword: "",
                minPrice: 0,
                maxPrice: 99999999,
                rating: "",
                category: "",
                avgRating: "",
            })
        )
    }, [dispatch])

    const search = () => {
        if (formData.search !== "") {
            navigate(`/allProducts/search`)
            dispatch(
                getAllProducts({
                    keyword: formData.search,
                    minPrice: 0,
                    maxPrice: 99999999,
                    rating: "",
                    category: "",
                    avgRating: "",
                })
            )
        }
    }

    return (
        <>
            <div className="flex flex-col min-w-full">
                {/* First Section: Main heading with search bar and Picture */}
                <section className="bg-stee min-w-[320px] sm:w-full ">
                    <div className="flex flex-col sm:mx-auto items-start bg-stee">
                        <div className="invisible lg:visible">
                            <img
                                src={hero1}
                                alt=""
                                className=" w-20 h-20 absolute right-56 top-32"
                            />
                            <img
                                src={hero2}
                                alt=""
                                className=" w-20 h-20 absolute right-72 top-72"
                            />{" "}
                            <img
                                src={hero3}
                                alt=""
                                className=" w-20 h-20 absolute left-2/4 top-64"
                            />{" "}
                            <img
                                src={hero4}
                                alt=""
                                className=" w-20 h-20 absolute right-96 top-32"
                            />
                            <img
                                src={hero1}
                                alt=""
                                className=" w-20 h-20 absolute left-2/4 top-44"
                            />
                            <img
                                src={hero2}
                                alt=""
                                className=" w-20 h-20 absolute right-36 top-44"
                            />{" "}
                            <img
                                src={hero3}
                                alt=""
                                className=" w-20 h-20 absolute left-3/4 top-60"
                            />{" "}
                            <img
                                src={hero4}
                                alt=""
                                className=" w-20 h-20 absolute right-80 top-56"
                            />
                        </div>
                        <div className="flex flex-col sm:w-80 h-80 bg-stee ml-6 sm:ml-14">
                            <span className="capitalize text-primary text-4xl font-bold mt-5 w-auto">
                                Create & Wear on demand
                            </span>
                            <p className="mt-5 text-primary w-auto">
                                Create & sell custom products with your designs,
                                we'll print and ship them to your customers
                            </p>
                            <div className="flex flex-row mt-5 w-[275px] sm:w-auto rounded-lg shadow-2xl bg-white">
                                <form>
                                    <input
                                        type="text"
                                        id="search"
                                        className="h-14 ml-1 sm:ml-4 items-center focus:outline-none placeholder:text-zinc-700 transition-all"
                                        placeholder="Search product here"
                                        value={formData.search}
                                        onChange={updateForm}
                                    />
                                    <div className="inline ml-3 sm:ml-12 py-2 px-3 rounded-md bg-stee searchbtn">
                                        <button
                                            className="text-primary"
                                            onClick={search}
                                        >
                                            Search
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Best Product Category */}
                <section className="mt-20">
                    {/* <div className="container flex flex-col items-center justify-center mx-auto w-80 sm:max-w-full"> */}
                    {/* <div className="flex flex-col items-center justify-center"> */}
                    <div className="flex items-center mx-auto w-72">
                        <span className="bg-stee flex flex-row text-center text-2xl font-bold text-zinc-700  mr-1">
                            Best{" "}
                        </span>
                        <span className="flex flex-row text-center text-2xl font-bold text-zinc-700">
                            Product Category
                        </span>
                        {/* </div> */}
                    </div>
                    <div className="mt-7 min-w-[310px] sm:w-[80%] m-auto ">
                        {/* allProducts Carousel */}
                        <Carousel />
                        <div className="flex flex-col items-center mt-11">
                            <button className="text-zinc-700">
                                <Link to="/allProducts">See all product</Link>
                                <i
                                    className="fa fa-long-arrow-right"
                                    aria-hidden="true"
                                ></i>
                            </button>
                        </div>
                    </div>
                    {/* </div> */}
                </section>
                <div className="h-20"></div>
                {/* Trendy Categories section*/}
                <section>
                    <div className="flex flex-col items-center">
                        {/* heading*/}
                        <div className="flex flex-col space-y-4 text-center w-80 mx-auto">
                            <div>
                                <span className="bg-stee text-center text-3xl font-bold text-zinc-700  mr-1">
                                    Trendy{" "}
                                </span>
                                <span className="text-3xl text-zinc-700 font-bold">
                                    Categories
                                </span>
                            </div>
                            <div className="text-center">
                                <span>
                                    Create & sell custom products with your
                                    designs, we'll print and ship them to your
                                    customers
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="h-20"></div>
                {/*Sub Categories button*/}
                <div className="flex">
                    <div className="flex flex-col items-center space-y-6 space-x-0 subcateg mx-auto text-zinc-700 font-bold sm:flex-row sm:space-x-16 sm:space-y-0">
                        <div className="flex flex-col w-52 h-52 shadow-2xl rounded-2xl space-y-2 items-center justify-center mx-auto subcategRes">
                            <div className="">{sweaterSvg()}</div>
                            <div>Sweater Custom</div>
                        </div>
                        <div className="flex flex-col w-52 h-52 bg-zinc-700 shadow-2xl rounded-2xl space-y-2 items-center justify-center mx-auto subcategRes">
                            <div>{tShirtsvg()}</div>
                            <div className="text-primary">T-Shirt Custom</div>
                        </div>
                        <div className="flex flex-col w-52 h-52 shadow-2xl rounded-2xl space-y-2 items-center justify-center mx-auto subcategRes">
                            <div>{jacketsvg()}</div>
                            <div>Jacket Custom</div>
                        </div>
                    </div>
                </div>
                <div className="h-20"></div>
                {/* Best Product Category */}
                <section className="mt-20 space-y-16">
                    <div className="items-center text-center mx-auto w-80">
                        <span className="text-center capitalize textsize font-bold text-zinc-700">
                            You want to know about
                        </span>
                        <span className="ml-1 text-center capitalize textsize font-bold text-zinc-700 bg-stee">
                            Feature Products
                        </span>
                    </div>

                    <div className="mt-7 min-w-[310px] sm:w-full">
                        {/* allProducts Carousel */}
                        <Carousel />
                        <div className="flex flex-col items-center mt-11">
                            <button className="text-zinc-700">
                                <Link to="/allProducts">See all product</Link>
                                <i
                                    className="fa fa-long-arrow-right"
                                    aria-hidden="true"
                                ></i>
                            </button>
                        </div>
                    </div>
                </section>
                <div className="h-16"></div>
                {/* 
                <section className="flex flex-col items-center bg-stee">
                    <div className="flex flex-col items-center">
                 
                        <div className="flex flex-col space-y-4 text-center mx-auto bg-stee text-primary">
                            <div className="w-80 mx-auto mt-5">
                                <span className="text-3xl  font-bold">
                                    Featured Creators
                                </span>
                            </div>
                            <div className="text-center">
                                <span>
                                    The top rated creators of our designing
                                    community
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center subcateg mx-auto space-y-6 space-x-0 text-primary font-bold bg-stee categ sm:flex-row sm:h-96 sm:space-x-16 sm:space-y-0 sm:mt-0">
                        <div className="shadow-2xl rounded-2xl sm:mt-0">
                            {creator1()}
                        </div>
                        <div className="shadow-xl rounded-2xl">
                            {creator2()}
                        </div>
                        <div className="shadow-xl rounded-2xl">
                            {creator3()}
                        </div>
                    </div>
                </section> */}
                <div className="h-20"></div>
                {/* Best Product Category */}
                {/* <section className="mt-20">
                    <div className="container flex flex-col items-center justify-center mx-auto w-80 sm:max-w-full">
                        <div className="flex flex-col items-center justify-center">
                            <div className="flex items-center justify-center w-80 text-center">
                                <span className="capitalize text-3xl font-bold text-zinc-700 ml-7">
                                    Sell your Designs
                                </span>
                            </div>
                        </div>
                        <div className="container flex flex-col items-center productadjust sm:w-180 sm:mx-auto mt-7">
                            <div className="flex flex-row space-x-2">
  
                            </div>
                            <div className="">
                                <button className="text-zinc-700">
                                    <Link to="/allProducts">
                                        See all product
                                    </Link>
                                    <i
                                        className="fa fa-long-arrow-right"
                                        aria-hidden="true"
                                    ></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </section> */}
                <div className="h-20"></div>
            </div>
        </>
    )
}

export default Home
